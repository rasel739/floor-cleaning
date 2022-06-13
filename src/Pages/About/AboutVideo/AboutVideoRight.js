import React from "react";
import aboutVideoRightStyle from "../../../assets/css/about.module.css";
import videoRightIconOne from "../../../img/about-video-right-icon-1.png";
import videoRightIconTwo from "../../../img/about-video-right-icon-2.png";
import AboutCustomImport from "../AboutCustomImport/AboutCustomImport";

const AboutVideoRight = () => {
  const { Box, Typography, Button } = AboutCustomImport();

  return (
    <Box>
      <Box>
        <Typography variant="h4" component="div" gutterBottom>
          Cleanco helps small and mid-size businesses look their best.
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "gray" }}
          component="div"
          gutterBottom
        >
          You might be questioning why someone could hire a professional
          purifier simply to smooth floors. It isn’t always too difficult to
          clean the floor.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          pb: 2,
        }}
      >
        <Box>
          <Box className={aboutVideoRightStyle.aboutVideoImgBox}>
            <img
              src={videoRightIconOne}
              alt=""
              className={aboutVideoRightStyle.aboutVideoRightImg}
            />
          </Box>
          <Box>
            <Typography variant="h6" component="div" gutterBottom>
              Safe and Secure
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray" }}
              component="div"
              gutterBottom
            >
              We provide different Floor Cleaning Service solutions to hold your
              flooring easy, but earlier than that.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className={aboutVideoRightStyle.aboutVideoImgBox}>
            <img
              src={videoRightIconTwo}
              alt=""
              className={aboutVideoRightStyle.aboutVideoRightImg}
            />
          </Box>
          <Box>
            <Typography variant="h6" component="div" gutterBottom>
              Careful Detailed Cleaning
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray" }}
              component="div"
              gutterBottom
            >
              We’re a professional Floor Cleaning Service organization and
              consequently, we realize how deep sanitization your ground wishes
              each week.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Button sx={{ bgcolor: "#00E8F6" }} variant="contained">
          GET STARTED
        </Button>
      </Box>
    </Box>
  );
};

export default AboutVideoRight;
