import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCart(state, action) {
      let flag = true;
      state.filter((i) => {
        if (i.id === action.payload.id) {
          i.quantity += action.payload.quantity;
          flag = false;
        }
        return i;
      });
      if (flag) state.push(action.payload);
    },
    removeCart(state, action) {
      state.push(action);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
