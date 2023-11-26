import React from "react";
import Button from "@mui/material/Button";
const CustomButton = (props) => {
  const {
    variant,
    size,
    startIcon,
    padding,
    color,
    backgroundColor,
    border,
    borderRadius,
    onchange,
    value,
    title,
    fontSize,
    fontWeight,
    onClick,
  } = props;
  return (
    <>
      <Button
        variant={variant}
        value={value}
        onClick={onClick}
        size={size}
        startIcon={startIcon}
        onChange={onchange}
        sx={{
          padding: padding,
          color: color,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          border: border,
          fontFamily: "Poppins-Regular",
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}
      >
        {title}
      </Button>
    </>
  );
};

export default CustomButton;
