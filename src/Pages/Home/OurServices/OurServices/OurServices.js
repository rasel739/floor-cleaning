import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import serviceStyle from "../../../../assets/css/ourService.module.css";
import servieImgOne from "../../../../img/service-cleaner-1.png";
import servieImgTwo from "../../../../img/service-cleaner-2.png";
import servieImgThree from "../../../../img/service-cleaner-3.png";
import servieImgFour from "../../../../img/service-cleaner-4.png";
import servieImgFive from "../../../../img/service-cleaner-5.png";
import servieImgSix from "../../../../img/service-cleaner-6.png";
import OurServicesLeft from "../OurServicesLeft/OurServicesLeft";
import OurServicesRight from "../OurServicesRight/OurServicesRight/OurServicesRight";

const OurServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const service = [
    {
      id: 1,
      title: "	Vacuum",
      subTitle: "Office, Residential",
      content:
        "But new research suggests that some vacuum cleaners may actually be making things worse, not better.",
      serviceIcon: servieImgOne,
    },
    {
      id: 2,
      title: "Garden Groom",
      subTitle: "Garden",
      content:
        "But new research suggests that some vacuum cleaners may actually be making things worse, not better.",
      serviceIcon: servieImgTwo,
    },
    {
      id: 3,
      title: "House Cleaning",
      subTitle: "Residential",
      content:
        "But new research suggests that some vacuum cleaners may actually be making things worse, not better.",
      serviceIcon: servieImgThree,
    },
    {
      id: 4,
      title: "Laundry",
      subTitle: "Home	",
      content:
        "But new research suggests that some vacuum cleaners may actually be making things worse, not better.",
      serviceIcon: servieImgFour,
    },
    {
      id: 5,
      title: "Car Salon",
      subTitle: "Automotive",
      content:
        "But new research suggests that some vacuum cleaners may actually be making things worse, not better.",
      serviceIcon: servieImgFive,
    },
    {
      id: 6,
      title: "Vacuum Cleaner",
      subTitle: "Automotive",
      content:
        "But new research suggests that some vacuum cleaners may actually be making things worse, not better.",
      serviceIcon: servieImgSix,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }} className={serviceStyle.ourService}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <OurServicesLeft></OurServicesLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slider {...settings}>
                {service.map((service) => (
                  <OurServicesRight
                    key={service.id}
                    service={service}
                  ></OurServicesRight>
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default OurServices;
