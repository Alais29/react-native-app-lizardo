import { configureStore } from '@reduxjs/toolkit';

import addressesReducer from '../Features/addresses/addressesSlice';
import authReducer from '../Features/auth/authSlice';
import cartReducer from '../Features/cart/cartSlice';
import categoriesReducer from '../Features/categories/categoriesSlice';
import newsReducer from '../Features/news/newsSlice';
import ordersReducer from '../Features/orders/ordersSlice';
import productsReducer from '../Features/products/productsSlice';
import themeReducer from '../Features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    news: newsReducer,
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    addresses: addressesReducer,
    orders: ordersReducer,
  },
});
