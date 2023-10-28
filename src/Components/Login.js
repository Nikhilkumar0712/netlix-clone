import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { checkValidations } from "../utlis/validate";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [signInOrSignUpForm, setSignInOrSignUpForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef();

  const handleSubmitForm = () => {
    const message = checkValidations(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;
    if (!signInOrSignUpForm) {
      //SignUP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              dispatch(
                addUser({
                  uid: auth.currentUser?.uid,
                  email: auth.currentUser?.email,
                  displayName: auth.currentUser?.displayName,
                  photoURL: auth.currentUser?.photoURL,
                })
              );
              navigate("/browse");
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      //signIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handleSignUp = () => {
    setSignInOrSignUpForm(!signInOrSignUpForm);
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
      <form onSubmit={(e) => e.preventDefault()}>
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
                {signInOrSignUpForm ? "Sign In" : "Sign Up"}
              </Typography>
              <Box mt={"20px"}>
                {!signInOrSignUpForm && (
                  <Box mt={2}>
                    <TextField
                      fullWidth
                      inputRef={name}
                      id="outlined-basic"
                      placeholder="Full Name"
                      variant="outlined"
                      sx={{ background: "#fff" }}
                      // onChange={handleChange}
                    />
                  </Box>
                )}
                <Box mt={2}>
                  <TextField
                    error
                    inputRef={email}
                    helperText={errorMessage}
                    id="outlined-basic"
                    fullWidth
                    placeholder="Email Address or phone number"
                    variant="outlined"
                    sx={{ background: "#fff" }}
                    // onChange={handleChange}
                  />
                </Box>
                <Box mt={2}>
                  <TextField
                    error
                    inputRef={password}
                    helperText={errorMessage}
                    id="outlined-basic"
                    fullWidth
                    placeholder="Password"
                    variant="outlined"
                    sx={{ background: "#fff" }}
                  />
                </Box>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    onClick={handleSubmitForm}
                  >
                    {signInOrSignUpForm ? "Sign In" : "Sign Up"}
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
      </form>
    </div>
  );
};

export default Login;
