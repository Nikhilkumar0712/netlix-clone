import React from "react";
import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook";
import MainContainer from "./MainConatiner/MainContainer";
import SecondaryContainer from "./SecondContainer/SecondaryContainer";
import { Box } from "@mui/material";
import useNowPopularHook from "../hooks/usePopularMovies";
import useTopRatedHook from "../hooks/useTopRatedHook";
import useUpComingHook from "../hooks/useUpcomingHook";
const Browse = () => {
  useNowPlayingHook();
  useNowPopularHook();
  useTopRatedHook();
  useUpComingHook();

  return (
    <>
      <Box>
        <Header />
        <MainContainer />
        <Box bgcolor={"black"}>
          <SecondaryContainer />
        </Box>
      </Box>
    </>
  );
};

export default Browse;
