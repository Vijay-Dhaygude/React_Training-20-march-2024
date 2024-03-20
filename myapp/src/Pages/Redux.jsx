import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    num: 1000,
  },
  reducers: {
    increment: (state, action) => {
      state.num = state.num + 1;
    },
    decrement: (state, action) => {
      state.num = state.num - 1;
    },
    incrementByAmount: (state, action) => {
      state.num = state.num + action.payload;
    },
  },
});

const { increment, decrement, incrementByAmount } = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default function Redux() {
  let num = useSelector((state) => state.counter.num);
  let dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <h3>A number from Redux store is {num}</h3>
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-warning m-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        type="button"
        className="btn btn-danger m-2"
        onClick={() => dispatch(incrementByAmount(50))}
      >
        Increment by 50
      </button>
    </div>
  );
}
