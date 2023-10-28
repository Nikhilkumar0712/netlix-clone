import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
const Browse = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <Box display={"flex"} justifyContent={"end"} m={2}>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Browse;
