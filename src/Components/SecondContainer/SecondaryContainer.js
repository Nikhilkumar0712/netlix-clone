import React from "react";
import MovieList from "./MovieList/MovieList";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <>
      <Box padding={"0px 48px"}>
        <Box mt={"-160px"}>
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          />
        </Box>
        <Box bgcolor={"black"}>
          <MovieList
            title={"Popular Movies"}
            movies={movies.popularMovies}
          />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
        
        </Box>
      </Box>
    </>
  );
};

export default SecondaryContainer;
