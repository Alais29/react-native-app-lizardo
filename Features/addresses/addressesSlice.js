import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { deleteAddress, fetchAddress, insertAddress } from '../../DB';
import { Status } from '../interfaces';

const initialState = {
  addresses: [],
  selectedAddress: {},
  status: Status.idle,
  error: '',
};

export const addAddressAsync = createAsyncThunk(
  'address/addAddressAsync',
  async (address, { rejectWithValue }) => {
    try {
      const result = await insertAddress(
        address.id,
        address.userid,
        address.name,
        address.address,
      );
      console.log('Add location db result:');
      console.log(result);
      return 'Record added succesfully';
    } catch (error) {
      console.log(error.message);
      return rejectWithValue('Error at writing address on db');
    }
  },
);

export const removeAddressAsync = createAsyncThunk(
  'address/removeAddressAsync',
  async (addressId, asyncThunk) => {
    try {
      const result = await deleteAddress(addressId);
      console.log('Delete address result');
      console.log(result);
      return `Item with id: ${addressId}, removed`;
    } catch (error) {
      console.log(error.message);
      return asyncThunk.rejectWithValue('Error at deleting address on db');
    }
  },
);

export const getAddressesAsync = createAsyncThunk(
  'address/getAddressesAsync',
  async (userid, { rejectWithValue }) => {
    try {
      const result = await fetchAddress(userid);
      console.log('Resultado al traer los datos de la DB en el thunk');
      console.log(result);
      const data = result.rows._array;
      return data;
    } catch (error) {
      console.log('error when fetching data from database');
      console.log(error);
      return rejectWithValue('Error at fetching addresses on db');
    }
  },
);

export const addressesSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, { payload }) => {
      state.addresses.push(payload);
    },
    removeAddress: (state, { payload }) => {
      state.addresses = state.addresses.filter(
        address => address.id !== payload,
      );
      if (payload === state.selectedAddress.id) {
        state.selectedAddress = {};
      }
    },
    selectAddress: (state, { payload }) => {
      state.selectedAddress = payload;
    },
    resetAddresses: state => {
      state.addresses = [];
      state.selectedAddress = {};
      state.status = Status.idle;
      state.error = '';
    },
  },
  extraReducers: {
    [addAddressAsync.pending]: state => {
      state.status = Status.loading;
    },
    [addAddressAsync.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.status = Status.success;
      state.error = '';
      // state.rowId = payload
    },
    [addAddressAsync.rejected]: (state, { payload }) => {
      state.status = Status.failed;
      state.error = payload;
    },
    [getAddressesAsync.pending]: state => {
      state.status = Status.loading;
    },
    [getAddressesAsync.fulfilled]: (state, { payload }) => {
      state.status = Status.success;
      state.error = '';
      state.addresses = payload;
    },
    [getAddressesAsync.rejected]: (state, { payload }) => {
      state.status = Status.failed;
      state.error = payload;
    },
    [removeAddressAsync.pending]: state => {
      state.status = Status.loading;
    },
    [removeAddressAsync.fulfilled]: state => {
      state.status = Status.success;
      state.error = '';
    },
    [removeAddressAsync.rejected]: (state, { payload }) => {
      state.status = Status.failed;
      state.error = payload;
    },
  },
});

export const { selectAddress, addAddress, removeAddress, resetAddresses } =
  addressesSlice.actions;

export default addressesSlice.reducer;
