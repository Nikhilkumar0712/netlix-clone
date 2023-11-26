import { createSlice } from "@reduxjs/toolkit";
import { current } from "immer";
const slice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerId: {},
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
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
    addPopularMovies: (state, action) => {
      return {
        ...state,
        popularMovies: action.payload,
      };
    },
    addTopRatedMovies: (state, action) => {
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    },
    addUpComingMovies: (state, action) => {
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    },
  },
});

export const {
  addNowPayingMovies,
  addTrailerID,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = slice.actions;

export default slice.reducer;
