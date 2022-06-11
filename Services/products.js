import axios from 'axios';

import { DB_URL } from '../Constants/firebase';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${DB_URL}products.json`);
    if (response.data === null) {
      throw Error();
    } else {
      return response.data;
    }
  } catch (e) {
    console.log(e);
    throw new Error('There was an error getting the products');
  }
};
