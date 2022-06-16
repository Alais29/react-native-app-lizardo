import axios from 'axios';

import { DB_URL } from '../Constants/firebase';

export const getOrders = async userid => {
  try {
    const response = await axios.get(`${DB_URL}/orders/${userid}.json`);
    if (response.data === null) {
      throw Error('There was an error getting the orders');
    } else {
      return response.data;
    }
  } catch (error) {
    console.log('service error getorder', error.response);
    throw new Error('There was an error getting the orders');
  }
};

export const createOrder = async (order, userid) => {
  const response = await axios.post(`${DB_URL}/orders/${userid}.json`, order);
  if (response.data === null) {
    return Error('There was an error creating the order');
  } else {
    return response.data;
  }
};
