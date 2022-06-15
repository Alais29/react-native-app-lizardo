import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addresses: [
    { id: 1, name: 'Home', address: 'Herrera 773' },
    { id: 2, name: 'Work', address: 'Test address 123' },
  ],
  selectedAddress: {},
  loading: false,
  error: '',
};

export const addressesSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    selectAddress: (state, { payload }) => {
      state.selectedAddress = payload;
    },
  },
  extraReducers: {},
});

export const { selectAddress } = addressesSlice.actions;

export default addressesSlice.reducer;
