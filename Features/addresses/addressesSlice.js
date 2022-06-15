import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addresses: [],
  selectedAddress: {},
  loading: false,
  error: '',
};

export const addressesSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, { payload }) => {
      state.addresses.push(payload);
    },
    selectAddress: (state, { payload }) => {
      state.selectedAddress = payload;
    },
  },
  extraReducers: {},
});

export const { selectAddress, addAddress } = addressesSlice.actions;

export default addressesSlice.reducer;
