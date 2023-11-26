import { createSlice } from "@reduxjs/toolkit";
import { current } from "immer";
const slice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerId: {},
  },
  reducers: {
    addNowPayingMovies: (state, action) => {
      //   console.log(action);
      //   console.log(current(state));
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    },
    addTrailerID: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});

export const { addNowPayingMovies, addTrailerID } = slice.actions;

export default slice.reducer;
