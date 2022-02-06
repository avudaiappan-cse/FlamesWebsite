import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../features/CounterSlice";

export const Counter = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>The Current Value is {value}</p>
      <button onClick={() => dispatch(increment())}>Increment Counter</button>
      &nbsp;
      <button onClick={() => dispatch(decrement())}>Decrement Counter</button>
    </div>
  );
};
