import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../Services/products";
import { Status } from "../interfaces";

const initialState = {
  items: [],
  topRatedProducts: [],
  productsByCategory: [],
  productSelected: {},
  status: Status.idle,
  error: "",
};

export const getProductsAsync = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await getProducts();
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setTopRatedProducts: (state) => {
      const topRatedGames = [...state.items]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);
      state.topRatedProducts = topRatedGames;
    },
    setProductSelected: (state, { payload }) => {
      state.productSelected = payload;
    },
    setProductsByCategory: (state, { payload }) => {
      const productsFiltered = items.filter(
        (item) => item.category === payload
      );
      state.productsByCategory = productsFiltered;
    },
  },
  extraReducers: {
    [getProductsAsync.pending]: (state) => {
      state.status = Status.loading;
    },
    [getProductsAsync.fulfilled]: (state, { payload }) => {
      state.status = Status.success;
      state.items = payload;
    },
    [getProductsAsync.rejected]: (state, payload) => {
      state.status = Status.failed;
      state.error = payload.error.message;
    },
  },
});

export const {
  setTopRatedProducts,
  setProductSelected,
  setProductsByCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
