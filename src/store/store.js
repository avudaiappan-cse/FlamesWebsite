import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "../features/CounterSlice";
import PostReducer from "../features/PostSlice";
import CartReducer from "../features/Cart/Cart";

export default configureStore({
  reducer: {
    counter: CounterReducer,
    post: PostReducer,
    cart: CartReducer,
  },
});
