import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true };


const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
