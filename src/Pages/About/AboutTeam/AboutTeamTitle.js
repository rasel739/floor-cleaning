import React from "react";
import AboutCustomImport from "../AboutCustomImport/AboutCustomImport";

const AboutTeamTitle = () => {
  const { Box, Typography } = AboutCustomImport();

  return (
    <Box sx={{ textAlign: "left", width: "70%", pb: 5 }}>
      <Typography
        gutterBottom
        variant="h6"
        sx={{ color: "#02C5D1" }}
        component="div"
      >
        Cleanco superteam
      </Typography>
      <Typography gutterBottom variant="h3" component="div">
        Our dedicated team ready to do our best services
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        sx={{ color: "gray" }}
        component="div"
      >
        There is a lot more to cleaning floors than a mop and bucket, and the
        truth is that many human beings don’t smooth their floors effectively.
        Relying on the kind of floor surface, you can need mainly formulated
        cleaning materials, as the wrong materials can simply ruin your flooring
        through the years. If you’re in doubt about the way you have to smooth
        your floors, it might be a terrific idea to deliver to the floor
        cleaning professionals to take care of your particular cleaning
        requirements.
      </Typography>
    </Box>
  );
};

export default AboutTeamTitle;
