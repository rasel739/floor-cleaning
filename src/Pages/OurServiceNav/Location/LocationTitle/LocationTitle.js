import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const LocationTitle = () => {
  return (
    <Box sx={{ width: "100%", pb: 5 }}>
      <Box sx={{ width: "60%", margin: "auto" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "#0BC7D3" }}
          gutterBottom
        >
          Our offices
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          Where we located around the globe
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ color: "gray" }}
          gutterBottom
        >
          You can't leave out the business skills when it comes to starting your
          own business. Customer relations, time management, financing, and all
          other business matters are a critical factor to the success of your
          business.
        </Typography>
      </Box>
    </Box>
  );
};

export default LocationTitle;
