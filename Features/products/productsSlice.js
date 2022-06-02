import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../data/products";

const initialState = {
  products: PRODUCTS,
  topRatedProducts: [],
  productsByCategory: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setTopRatedProducts: (state) => {
      const topRatedGames = state.products
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);
      state.topRatedProducts = topRatedGames;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTopRatedProducts } = productsSlice.actions;

export default productsSlice.reducer;
