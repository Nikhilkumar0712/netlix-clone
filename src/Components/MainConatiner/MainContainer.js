import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const moviesList = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (!moviesList) return;

  const mainMovie = moviesList[1];
  return (
    <>
      <VideoTitle mainMovie={mainMovie} />
      <VideoBackGround movieId={mainMovie?.id} />
    </>
  );
};

export default MainContainer;
