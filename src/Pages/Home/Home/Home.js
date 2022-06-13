import "animate.css";
import React from "react";
import ScrollToTops from "../../ScrollToTop/ScrollToTops";
import Footer from "../../Shered/Footer/Footer";
import Navigation from "../../Shered/Navigation/Navigation";
import BetterChoice from "../BetterChoice/BetterChoice/BetterChoice";
import CleanHome from "../CleanHome/CleanHome/CleanHome";
import Counter from "../Counter/Counter/Counter";
import DiscussServices from "../DiscussServices/DiscussServices/DiscussServices";
import Header from "../Header/Header/Header";
import OurServices from "../OurServices/OurServices/OurServices";
import Review from "../Review/Review/Review";
import ServicePrice from "../ServicePrice/ServicePrice/ServicePrice";
import Sponsor from "../Sponsor/Sponsor/Sponsor";
import WorkProcess from "../WorkProcess/WorkProcess/WorkProcess";

const Home = () => {
  document.title = "Home";

  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <CleanHome></CleanHome>
      <OurServices></OurServices>
      <Counter></Counter>
      <BetterChoice></BetterChoice>
      <WorkProcess></WorkProcess>
      <Review></Review>
      <Sponsor></Sponsor>
      <ServicePrice></ServicePrice>
      <DiscussServices></DiscussServices>
      <Footer></Footer>
      <ScrollToTops />
    </>
  );
};

export default Home;
