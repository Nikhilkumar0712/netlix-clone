import { createSlice } from "@reduxjs/toolkit";

const getSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGptSearchView } = getSlice.actions;

export default getSlice.reducer;
