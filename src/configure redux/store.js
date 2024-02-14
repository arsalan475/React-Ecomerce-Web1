import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart_slice.js";
import { addItem } from "./cart_slice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
