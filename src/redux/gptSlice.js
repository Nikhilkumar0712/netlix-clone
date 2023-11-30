import { createSlice } from "@reduxjs/toolkit";

const getSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptMovieList: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieList = movieResults;
      state.gptMovieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = getSlice.actions;

export default getSlice.reducer;
