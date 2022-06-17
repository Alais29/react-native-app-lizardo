import axios from 'axios';

import { DB_URL } from '../Constants/firebase';

export const getOrders = async userid => {
  const response = await axios.get(`${DB_URL}/orders/${userid}.json`);
  if (response.data === null) {
    throw new Error('No orders exist for this user');
  } else {
    return response.data;
  }
};

export const createOrder = async (order, userid) => {
  const response = await axios.post(`${DB_URL}/orders/${userid}.json`, order);
  if (response.data === null) {
    throw new Error('There was an error creating the order');
  } else {
    return response.data;
  }
};
