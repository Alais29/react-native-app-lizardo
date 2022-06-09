import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Features/products/productsSlice";
import categoriesReducer from "../Features/categories/categoriesSlice";
import newsReducer from "../Features/news/newsSlice";
import themeReducer from "../Features/theme/themeSlice";
import authReducer from "../Features/auth/authSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    news: newsReducer,
    products: productsReducer,
    categories: categoriesReducer,
  },
});
