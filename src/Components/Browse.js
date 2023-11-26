import React from "react";
import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook";
import MainContainer from "./MainConatiner/MainContainer";
import SecondaryContainer from "./SecondContainer/SecondaryContainer";
import { Box } from "@mui/material";
const Browse = () => {
  useNowPlayingHook();

  return (
    <>
      <Box >
        <Box position={"relative"}>
          <Header />
          <Box  width={"100%"}>
            <MainContainer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Browse;
