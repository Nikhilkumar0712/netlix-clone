import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Login = () => {
  const [signInOrSignUpForm, setSignInOrSignUpForm] = useState(false);
  const handleSignUp = () => {
    if (signInOrSignUpForm === true) {
      setSignInOrSignUpForm(false);
    } else if (signInOrSignUpForm === false) {
      setSignInOrSignUpForm(true);
    }else{
      
    }
  };
  return (
    <div>
      <Header />

      <Box>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
          style={{ height: "100vh", width: "100%" }}
        />
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          bgcolor={"rgba(0,0,0,.75)"}
          top={"0px"}
          height={"500px"}
          width={"450px"}
          position={"absolute"}
          mt={"200px"}
        >
          <Box padding={"40px"}>
            <Typography color={"#fff"} fontSize={"30px"}>
              {!signInOrSignUpForm ? "Sign In" : "Sign Up"}
            </Typography>
            <Box mt={"20px"}>
              {signInOrSignUpForm && (
                <Box mt={2}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    placeholder="Full Name"
                    variant="outlined"
                    sx={{ background: "#fff" }}
                  />
                </Box>
              )}
              <Box mt={2}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  placeholder="Email Address or phone number"
                  variant="outlined"
                  sx={{ background: "#fff" }}
                />
              </Box>
              <Box mt={2}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  placeholder="Password"
                  variant="outlined"
                  sx={{ background: "#fff" }}
                />
              </Box>
              <Box mt={2}>
                <Button variant="contained" color="error" fullWidth>
                  {!signInOrSignUpForm ? "Sign In" : "Sign Up"}
                </Button>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mt={2}
                alignItems={"center"}
              >
                <Typography color={"white"}>
                  {!signInOrSignUpForm
                    ? "Already registered?"
                    : "New to Netflix"}
                </Typography>
                <Typography
                  color={"white"}
                  sx={{ cursor: "pointer" }}
                  onClick={handleSignUp}
                >
                  {!signInOrSignUpForm ? "Sign In" : "Sign Up"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
