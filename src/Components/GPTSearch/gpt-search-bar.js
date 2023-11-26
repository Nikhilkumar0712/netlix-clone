import React from "react";
import TextField from "@mui/material/TextField";
import CustomButton from "../Button/button";
import { Box } from "@mui/material";
import lang from "../../utlis/langugaeConstants";
import { useSelector } from "react-redux";
const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
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
            action=""
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
            />
            <CustomButton
              title={lang[langKey].search}
              backgroundColor={"red"}
              color={"white"}
              fontSize={"14px"}
              padding={"8px 24px"}
            />
          </form>
        </Box>
      </Box>
    </>
  );
};

export default GPTSearchBar;
