import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utlis/firebase";
import { addUser, removeUser } from "../redux/userSlice";
import CustomButton from "./Button/button";
import { toggleGptSearchView } from "../redux/gptSlice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { changeLanguage } from "../redux/configSlice";
const Header = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    //its kind a event listner to track the user,
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, photoURL, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error.message);
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView(true));
  };

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const showGPTSearch = useSelector((store) => store?.gpt?.showGPTSearch);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        position={"absolute"}
        sx={{
          background: "linear-gradient( black, rgba(0,0,0,0))",
        }}
      >
        <img
          width={"150px"}
          style={{ objectFit: "contain", zIndex: 1 }}
          src={
            "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          }
          alt=""
        />
        <Box pr={"20px"} zIndex={"1"}>
          {user?.uid && (
            <Box display={"flex"} gap={"10px"}>
              {showGPTSearch && (
                <select
                  name=""
                  id=""
                  style={{ width: "150px" }}
                  onChange={handleChange}
                >
                  <option value="en">English</option>
                  <option value="hindi">Hindhi</option>
                </select>
              )}

              <CustomButton
                title={"GPT Search"}
                onClick={handleGPTSearch}
                backgroundColor={"purple"}
                color={"white"}
                fontSize={"14px"}
                padding={"5px 20px"}
              />
              <CustomButton
                title={"Sign Out"}
                onClick={handleSignOut}
                backgroundColor={"#fff"}
                color={"black"}
                fontSize={"14px"}
                padding={"5px 24px"}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
