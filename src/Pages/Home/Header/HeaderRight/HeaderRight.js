import React from "react";
import Box from "@mui/material/Box";
import headerImg from "../../../../img/cleaning-img2.png";
import "./HeaderRight.css";
import HeaderSlideBox from "../HeaderSlideBox/HeaderSlideBox";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";

const HeaderRight = () => {
  const theme = useTheme();

  const headerRightStyle = makeStyles({
    headerRightImg: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        paddingBottom: ".5rem",
      },
    },
    headerRightSlide: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  });

  const { headerRightImg, headerRightSlide } = headerRightStyle();

  return (
    <Box>
      <Box className={headerRightSlide}>
        <HeaderSlideBox></HeaderSlideBox>
      </Box>
      <Box>
        <img src={headerImg} className={headerRightImg} alt="eleaning-img" />
      </Box>
    </Box>
  );
};

export default HeaderRight;
