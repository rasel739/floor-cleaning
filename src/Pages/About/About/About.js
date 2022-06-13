import React from "react";
import Review from "../../Home/Review/Review/Review";
import Footer from "../../Shered/Footer/Footer";
import Navigation from "../../Shered/Navigation/Navigation";
import AboutCounter from "../AboutCounter/AboutCounter";
import AboutTeam from "../AboutTeam/AboutTeam";
import AboutTitle from "../AboutTitle/AboutTitle";
import AboutVideo from "../AboutVideo/AboutVideo";

const About = () => {
  document.title = "About";
  return (
    <>
      <Navigation></Navigation>
      <AboutTitle></AboutTitle>
      <AboutCounter></AboutCounter>
      <AboutVideo></AboutVideo>
      <AboutTeam></AboutTeam>
      <Review></Review>
      <Footer></Footer>
    </>
  );
};

export default About;
