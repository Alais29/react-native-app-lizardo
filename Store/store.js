import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Features/products/productsSlice";
import newsReducer from "../Features/news/newsSlice";
import themeReducer from "../Features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    news: newsReducer,
    products: productsReducer,
  },
});
