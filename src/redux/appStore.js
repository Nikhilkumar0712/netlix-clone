import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import moviesReducer from './movieSlice'
const store = configureStore({
  reducer: {
    user,
    movies:moviesReducer
  },
});

export default store;
