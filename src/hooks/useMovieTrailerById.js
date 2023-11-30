import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utlis/constants";
import { addTrailerID } from "../redux/movieSlice";

const useMovieTrailerById = (props) => {
  const { movieId } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      getMovieVideoById(movieId);
    }
  }, []);

  const getMovieVideoById = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
      .then((res) => res?.json())
      .then((data) => {
        const filteredTrailerData = data?.results?.filter(
          (item) => item?.type === "Trailer"
        );
        const trailer = filteredTrailerData.length
          ? filteredTrailerData?.[0]
          : data?.results[0];

        dispatch(addTrailerID(trailer));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default useMovieTrailerById;
