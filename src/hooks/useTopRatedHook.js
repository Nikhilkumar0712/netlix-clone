import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utlis/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";

const useTopRatedHook = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(addTopRatedMovies(data?.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedHook;
