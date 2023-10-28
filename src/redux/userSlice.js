import { createSlice } from "@reduxjs/toolkit";
import { current } from "immer";
const slice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      // console.log(current(state));
      // console.log(action, "action");
      return action.payload;
    },
    removeUser: (state, action) => {
      return {};
    },
  },
});

export const { addUser, removeUser } = slice.actions;

export default slice.reducer;
