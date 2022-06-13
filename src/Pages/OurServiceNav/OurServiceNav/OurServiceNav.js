import React from "react";
import Footer from "../../Shered/Footer/Footer";
import Navigation from "../../Shered/Navigation/Navigation";
import ChooseUs from "../ChooseUs/ChooseUs/ChooseUs";
import Location from "../Location/Location/Location";
import OurContactUs from "../OurContactUs/OurContactUs";
import OurServiceBox from "../OurServiceBox/OurServiceBox/OurServiceBox";
import OurServiceImgGrid from "../OurServiceImgGrid/OurServiceImgGrid/OurServiceImgGrid";
import OurServiceTitle from "../OurServiceTitle/OurServiceTitle";
import TheProcess from "../TheProcess/TheProcess/TheProcess";

const OurServiceNav = () => {
  document.title = "Our Service";

  return (
    <>
      <Navigation></Navigation>
      <OurServiceTitle></OurServiceTitle>
      <OurServiceBox></OurServiceBox>
      <ChooseUs></ChooseUs>
      <OurServiceImgGrid></OurServiceImgGrid>
      <TheProcess></TheProcess>
      <Location></Location>
      <OurContactUs></OurContactUs>
      <Footer></Footer>
    </>
  );
};

export default OurServiceNav;
