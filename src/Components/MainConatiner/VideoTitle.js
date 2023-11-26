import { Box, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../Button/button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoTitle = (props) => {
  const { mainMovie } = props;

  return (
    <>
      <Box
        position={"absolute"}
        display={"flex"}
        justifyContent={"left"}
        alignItems={"center"}
        height={"100vh"}
        pl={6}
        sx={{
          background: "linear-gradient( black, rgba(0,0,0,0))",
          overFlow: "hidden",
        }}
      >
        <Box width={"30%"}>
          <Typography
            fontFamily={"Poppins-Bold"}
            fontSize={"36px"}
            color={"#fff"}
          >
            {mainMovie?.original_title}
          </Typography>
          <Typography
            fontFamily={"Poppins-Regular"}
            fontSize={"15px"}
            color={"#fff"}
          >
            {mainMovie?.overview}
          </Typography>
          <Box mt={2} display={"flex"} gap={"20px"}>
            <CustomButton
              title={"Play"}
              startIcon={<PlayArrowIcon />}
              backgroundColor={"#fff"}
              color={"black"}
              fontSize={"14px"}
              padding={"10px 24px"}
            />
            <CustomButton
              title={"More Info"}
              backgroundColor={"#494949"}
              color={"white"}
              fontSize={"14px"}
              padding={"10px 24px"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VideoTitle;
