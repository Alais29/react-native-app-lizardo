import { initializeApp } from 'firebase/app';
import React from 'react';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import { init } from './DB';
import { firebaseConfig } from './Database/firebase';
import MainNavigation from './Navigation';
import { store } from './Store/store';

initializeApp(firebaseConfig);

init()
  .then(() => {
    console.log('Db initialized');
  })
  .catch(err => {
    console.log('Error loading db');
    console.log(err.message);
  });

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
      <Toast />
    </Provider>
  );
};

export default App;
