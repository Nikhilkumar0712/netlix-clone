import React from "react";
import { IMG_CDN } from "../../../utlis/constants";
import { Box } from "@mui/material";

const MovieCard = (props) => {
  const { allMovies } = props;

  return (
    <>
      <Box width={"100%"} display={"flex"} gap={"10px"}>
        <img
          src={IMG_CDN + allMovies?.poster_path}
          style={{objectFit:"contain"}}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </Box>
    </>
  );
};

export default MovieCard;
