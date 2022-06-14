import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const productExistsInCart = state.products.find(
        item => item.id === payload.id,
      );

      const platform = payload.platformSelected;
      const copyProduct = JSON.parse(JSON.stringify(payload));
      delete copyProduct.platformSelected;

      if (productExistsInCart) {
        state.products.map(item => {
          if (item.id === productExistsInCart.id) {
            if (item.quantities[platform]) item.quantities[platform]++;
            else item.quantities[platform] = 1;
            item.totalPrice += item.price;
          }
          return item;
        });
      } else {
        const quantities = {};
        quantities[platform] = 1;
        const totalPrice = payload.price;

        state.products.push({ ...copyProduct, quantities, totalPrice });
      }
    },
    removeItem: (state, { payload }) => {
      // payload will bring the product id, and it may bring the platform to remove items from or not
      const { id, platform } = payload;

      const productToRemove = state.products.find(
        item => item.id === payload.id,
      );

      const justOneProductRemains =
        Object.values(productToRemove?.quantities).length <= 1 &&
        Object.values(productToRemove?.quantities)[0] <= 1;

      // Check if only one item remains from the product or if platform was not received
      // if so then remove the whole product from cart
      if (justOneProductRemains || !platform) {
        state.products = state.products.filter(item => item.id !== payload.id);
      } else {
        state.products.map(item => {
          if (item.id === id) {
            // check if that platform qty is more than 1, in which case remove one, if not, delete the platform
            if (item.quantities[platform] > 1) item.quantities[platform]--;
            else delete item.quantities[platform];
            item.totalPrice -= item.price;
          }
          return item;
        });
      }
    },
    emptyCart: state => {
      state.products = [];
    },
  },
  extraReducers: {},
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
