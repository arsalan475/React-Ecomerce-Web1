import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: 0,
    ItemId: [],
    numOfItems: {},
  },

  reducers: {
    addItem(state, action) {
      state.cartItem += 1;
      state.ItemId.push(action.payload);

      if (state.numOfItems[action.payload] === undefined) {
        state.numOfItems[action.payload] = 0;
      }
      if (state.numOfItems[action.payload] !== undefined) {
        state.numOfItems[action.payload] += 1;
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
