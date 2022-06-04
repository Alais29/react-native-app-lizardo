import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../Services/products";

const Status = Object.freeze({
  idle: "idle",
  loading: "loading",
  success: "success",
  failed: "failed",
});

const initialState = {
  items: [],
  topRatedItems: [],
  itemsByCategory: [],
  itemSelected: {},
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
      state.topRatedItems = topRatedGames;
    },
    setProductSelected: (state, { payload }) => {
      state.itemSelected = payload;
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

export const { setTopRatedProducts, setProductSelected } =
  productsSlice.actions;

export default productsSlice.reducer;
