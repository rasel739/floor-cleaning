import React from "react";
import aboutCounterRStyle from "../../../assets/css/about.module.css";
import aboutCounterImgOne from "../../../img/about-counter-img-1.jpg";
import aboutCounterImgTwo from "../../../img/about-counter-img-2.jpg";
import AboutCustomImport from "../AboutCustomImport/AboutCustomImport";

const AboutCounterRight = () => {
  const { Box } = AboutCustomImport();

  return (
    <Box sx={{ width: "100%" }}>
      <Box className={aboutCounterRStyle.imgBoxOne}>
        <img
          src={aboutCounterImgOne}
          alt=""
          className={aboutCounterRStyle.aboutCounterImgone}
        />
      </Box>
      <Box className={aboutCounterRStyle.imgBoxTwo}>
        <img
          src={aboutCounterImgTwo}
          alt=""
          className={aboutCounterRStyle.aboutCounterImgtwo}
        />
      </Box>
    </Box>
  );
};

export default AboutCounterRight;
