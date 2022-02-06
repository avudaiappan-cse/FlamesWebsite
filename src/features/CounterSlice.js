import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment(state, action) {
      state = state + 1;
      return state;
    },
    decrement(state, action) {
      state = state - 1;
      return state;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
