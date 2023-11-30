import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Box, Grid, Typography } from "@mui/material";
import { IMG_CDN } from "../../../utlis/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./coursel.css";

const MovieList = (props) => {
  const { title, movies } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Box mt={"10px"}>
        <Typography
          fontFamily={"Poppins-Regular"}
          fontWeight={"500"}
          fontSize={"20px"}
          color={"white"}
        >
          {title}
        </Typography>
        <Box mt={"20px"}>
          {movies?.length && (
            <Carousel
              ssr
              swipeable={true}
              partialVisbile
              containerClass="carousel-container"
              itemClass="image-item"
              responsive={responsive}
              className={"track"}
            >
              {movies?.length &&
                movies?.map((item) => {
                  return <MovieCard allMovies={item} />;
                })}
            </Carousel>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MovieList;
