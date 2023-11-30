import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import MovieList from "../SecondContainer/MovieList/MovieList";

const GPTMoviesSuggestions = () => {
  const { gptMovieList, gptMovieNames } = useSelector((store) => store.gpt);

  return (
    <>
      {gptMovieNames?.length && (
        <Box>
          <Box
            mt={"-250px"}
            bgcolor={"black"}
            ml={"20px"}
            mr={"20px"}
            padding={"20px"}
          >
            <Box>
              {gptMovieNames?.length &&
                gptMovieNames?.map((item, index) => {
                  return (
                    <Box key={index}>
                      <MovieList
                        movies={gptMovieList?.[index]?.results}
                        title={item}
                      />
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default GPTMoviesSuggestions;
