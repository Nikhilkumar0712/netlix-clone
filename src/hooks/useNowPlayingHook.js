import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utlis/constants";
import { useDispatch } from "react-redux";
import { addNowPayingMovies } from "../redux/movieSlice";

const useNowPlayingHook = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(addNowPayingMovies(data?.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingHook;
