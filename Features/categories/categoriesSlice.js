import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../Services/categories";
import { Status } from "../interfaces";

const initialState = {
  items: [],
  categorySelected: {},
  status: Status.idle,
  error: "",
};

export const getCategoriesAsync = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await getCategories();
    return response;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategorySelected: (state, { payload }) => {
      state.categorySelected = payload;
    },
  },
  extraReducers: {
    [getCategoriesAsync.pending]: (state) => {
      state.status = Status.loading;
    },
    [getCategoriesAsync.fulfilled]: (state, { payload }) => {
      state.status = Status.success;
      state.items = payload;
    },
    [getCategoriesAsync.rejected]: (state, payload) => {
      state.status = Status.failed;
      state.error = payload.error.message;
    },
  },
});

export const { setCategorySelected } = categoriesSlice.actions;

export default categoriesSlice.reducer;
