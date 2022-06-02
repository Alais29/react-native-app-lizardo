import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Features/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
