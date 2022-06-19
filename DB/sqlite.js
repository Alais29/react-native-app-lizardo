import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('addresses.db');

export const init = () => {
  console.log('Entra en init');
  const promise = new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS addresses(id INTEGER PRIMARY KEY NOT NULL, userid TEXT NOT NULL, name TEXT NOT NULL, address TEXT NOT NULL)',
        [],
        () => {
          res();
        },
        (_, error) => {
          console.log(error.message);
          rej(error);
        },
      );
    });
  });

  return promise;
};

export const insertAddress = (id, userId, name, address) => {
  const promise = new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO addresses (id, userid, name, address) VALUES (?, ?, ?, ?);',
        [id, userId, name, address],
        (_, result) => res(result),
        (_, error) => rej(error),
      );
    });
  });
  return promise;
};

export const fetchAddress = userId => {
  const promise = new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM addresses WHERE userid = ?;',
        [userId],
        (_, result) => res(result),
        (_, err) => rej(err),
      );
    });
  });
  return promise;
};

export const deleteAddress = id => {
  const promise = new Promise((acc, rej) => {
    console.log('id deleteaddress', id);
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM addresses WHERE id = ?;',
        [id],
        (_, result) => acc(result),
        (_, error) => rej(error),
      );
    });
  });

  return promise;
};
