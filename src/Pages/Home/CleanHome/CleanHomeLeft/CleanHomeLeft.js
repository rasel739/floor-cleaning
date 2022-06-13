import React from "react";
import Box from "@mui/material/Box";
import CleanHomeImg from "../../../../img/hom-clean.png";
import CleanStyle from "../../../../assets/css/cleanHome.module.css";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";

const CleanHomeLeft = () => {
  const theme = useTheme();

  const cleanHomeLeft = makeStyles({
    cleanHomeL: {
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "2rem",
      },
    },
  });

  const { cleanHomeL } = cleanHomeLeft();

  return (
    <Box className={cleanHomeL}>
      <Box className={CleanStyle.cleanLeft}>
        <img
          src={CleanHomeImg}
          className={CleanStyle.cleanImg}
          alt="clean-home-img"
        />
      </Box>
    </Box>
  );
};

export default CleanHomeLeft;
