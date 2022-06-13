import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Box from "@mui/material/Box";

const ScrollToTops = () => {
  const scrollStyle = {
    backgroundColor: "#FBC92C",
  };

  return (
    <Box>
      <ScrollToTop smooth color="blue" style={scrollStyle} />
    </Box>
  );
};

export default ScrollToTops;
