import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice" 
  import configSlice from "./configSlice";
const store = configureStore({
  reducer: {
    user,
    movies: moviesReducer,
    gpt:gptReducer,
    config:configSlice
  },
});

export default store;
