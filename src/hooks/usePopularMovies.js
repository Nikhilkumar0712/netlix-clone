import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utlis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";

const useNowPopularHook = () => {
  const dispatch = useDispatch();

  const popularMoviesExists = useSelector(
    (store) => store.movies.popularMovies
  );

  const getPopularMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(addPopularMovies(data?.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (!popularMoviesExists) {
      getPopularMovies();
    }
  }, []);
};

export default useNowPopularHook;
