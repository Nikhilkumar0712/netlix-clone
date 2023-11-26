import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utlis/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../redux/movieSlice";

const useUpComingHook = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(addUpComingMovies(data?.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingHook;
