import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { createOrder, getOrders } from '../../Services/orders';
import { Status } from '../interfaces';

const initialState = {
  orders: [],
  status: Status.idle,
  error: '',
};

export const getOrdersAsync = createAsyncThunk(
  'orders/getOrdersAsync',
  async (userinfo) => {
    try {
      const response = await getOrders(userinfo.userid, userinfo.token);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  },
);

export const createOrderAsync = createAsyncThunk(
  'orders/createOrderAsync',
  async (orderInfo, { rejectWithValue }) => {
    try {
      const response = await createOrder(orderInfo.order, orderInfo.userid, orderInfo.token);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    resetOrders: state => {
      state.status = Status.idle;
      state.orders = [];
      state.error = '';
    },
  },
  extraReducers: {
    [getOrdersAsync.pending]: state => {
      state.status = Status.loading;
    },
    [getOrdersAsync.fulfilled]: (state, { payload }) => {
      state.status = Status.success;
      const formattedOrders = Object.entries(payload).map(item => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      state.orders = formattedOrders;
    },
    [getOrdersAsync.rejected]: (state, payload) => {
      state.status = Status.failed;
      state.error = payload.error.message;
    },
    [createOrderAsync.pending]: state => {
      state.status = Status.loading;
    },
    [createOrderAsync.fulfilled]: state => {
      state.status = Status.success;
    },
    [createOrderAsync.rejected]: (state, payload) => {
      state.status = Status.failed;
      state.error = payload.error.message;
    },
  },
});

export const { resetOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
