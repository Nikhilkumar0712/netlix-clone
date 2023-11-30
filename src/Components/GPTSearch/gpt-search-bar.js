import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import CustomButton from "../Button/button";
import { Box } from "@mui/material";
import lang from "../../utlis/langugaeConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utlis/openAI";
import { API_OPTIONS } from "../../utlis/constants";
import { addGptMovies } from "../../redux/gptSlice";
const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();

  const searchText = useRef();

  const searchTMBDMovie = (movie) => {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data; // Assuming you want to return the data
      })
      .catch((err) => {
        console.log(err);
        throw err; // Rethrow the error to be caught later
      });
  };

  const handleGPTSearchClick = async () => {
    try {
      // Your existing code here
      const gptQuery =
        "Act as a movie recommendation system and suggest some query " +
        searchText.current.value +
        ". Only give me names of five movies, comma-separated like the example result given ahead. Example Result:Gadar, Don, Sholay, Golmal, Koi Mil Gaya";
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      const gptMovies = gptResults?.choices?.[0]?.message?.content?.split(",");

      const data = gptMovies?.map((movie) => searchTMBDMovie(movie));

      const tmbdResults = await Promise.all(data);

      dispatch(
        addGptMovies({ movieNames: gptMovies, movieResults: tmbdResults })
      );
    } catch (error) {
      console.error("Error making OpenAI API request:", error.message);
    }
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"40%"}
          background={"black"}
          padding={"10px"}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "13px",
              background: "black",
              borderRadius: "11px",
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              inputProps={{
                autocomplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
              sx={{
                color: "black",
                background: "white",
                ".MuiOutlinedInput-input": {
                  padding: "8px 24px",
                  borderRadius: "11px",
                },
              }}
              autoComplete="off"
              placeholder={lang[langKey].gptSearchPlaceHolder}
              inputRef={searchText}
            />
            <CustomButton
              title={lang[langKey].search}
              backgroundColor={"red"}
              color={"white"}
              fontSize={"14px"}
              padding={"8px 24px"}
              onClick={handleGPTSearchClick}
            />
          </form>
        </Box>
      </Box>
    </>
  );
};

export default GPTSearchBar;
