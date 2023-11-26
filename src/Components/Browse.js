import React from "react";
import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook";
import MainContainer from "./MainConatiner/MainContainer";
import SecondaryContainer from "./SecondContainer/SecondaryContainer";
import { Box } from "@mui/material";
import useNowPopularHook from "../hooks/usePopularMovies";
import useTopRatedHook from "../hooks/useTopRatedHook";
import useUpComingHook from "../hooks/useUpcomingHook";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
const Browse = () => {
  useNowPlayingHook();
  useNowPopularHook();
  useTopRatedHook();
  useUpComingHook();

  const showGPTSearchView = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <>
      <Box>
        <Header />
        {showGPTSearchView ? (
          <GPTSearch />
        ) : (
          <>
            <Box>
              <MainContainer />
              <Box bgcolor={"black"}>
                <SecondaryContainer />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Browse;
