import React from "react";
import AboutCustomImport from "../AboutCustomImport/AboutCustomImport";

const AboutCounterLeft = () => {
  const { Box, Typography } = AboutCustomImport();

  return (
    <Box>
      <Box sx={{ textAlign: "left" }}>
        <Typography
          variant="h6"
          sx={{ color: "#26CED8" }}
          component="div"
          gutterBottom
        >
          18 Years of Experience
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
          A better choice for better cleaning for you
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "gray" }}
          component="div"
          gutterBottom
        >
          Your competition is going to be the floor cleaning business that have
          been around longer and have proved their reputation in your local
          area. They may have larger teams of employees and more expensive
          equipment, as they have been around longer and raised the finances.
          You may be just starting out with a team of two or three people, and
          the bare essentials for equipment. You can still make your business a
          success, though, if you learn to highlight your strengths to potential
          clients.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutCounterLeft;
