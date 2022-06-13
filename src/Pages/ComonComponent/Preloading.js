import { Box } from "@mui/material";
import React from "react";
import { Rings } from "react-loader-spinner";
import spinnerCss from "../../assets/css/spinner.module.css";

const Preloading = () => {
  return (
    <Box className={spinnerCss.spinnerBg}>
      <Box className={spinnerCss.spinnerMainPage}>
        <Rings color="#154784" height={150} width={150} />
      </Box>
    </Box>
  );
};

export default Preloading;
