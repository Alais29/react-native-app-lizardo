import axios from 'axios';

import { DB_URL } from '../Constants/firebase';

export const getCategories = async (token) => {
  try {
    const response = await axios.get(`${DB_URL}categories.json?auth=${token}`);
    if (response.data === null) {
      throw Error();
    } else {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    throw new Error('There was an error getting the categories');
  }
};
