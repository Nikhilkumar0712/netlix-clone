import { Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box pl={"100px"} position={"absolute"}>
      <img
        width={"150px"}
        height={"150px"}
        style={{ objectFit: "contain" }}
        src={
          "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        }
        alt=""
      />
    </Box>
  );
};

export default Header;
