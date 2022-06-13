import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ServiceItem from "../ServiceItem/ServiceItem";

const OurServiceBox = () => {
  const serviceNavItem = [
    {
      id: 1,
      title: "Building Maintenances",
      logoImg: "https://i.ibb.co/1L9bGTg/our-service-1.png",
      description:
        "Etiam porta sem malesuada magna mollis euismod orbi leo risus maleuada Donec id elit non mi porta gravida at eget metus lorem ipsum sit",
    },
    {
      id: 2,
      title: "Floor Maintenance",
      logoImg: "https://i.ibb.co/fSpkC1b/our-service-img-2.png",
      description:
        "Etiam porta sem malesuada magna mollis euismod orbi leo risus maleuada Donec id elit non mi porta gravida at eget metus lorem ipsum sit",
    },
    {
      id: 3,
      title: "Janitorial Services",
      logoImg: "https://i.ibb.co/Cvghy9q/our-service-img-3.png",
      description:
        "Etiam porta sem malesuada magna mollis euismod orbi leo risus maleuada Donec id elit non mi porta gravida at eget metus lorem ipsum sit",
    },
    {
      id: 4,
      title: "After Construction Clean Up",
      logoImg: "https://i.ibb.co/wJx1xgv/our-service-img-4.png",
      description:
        "Etiam porta sem malesuada magna mollis euismod orbi leo risus maleuada Donec id elit non mi porta gravida at eget metus lorem ipsum sit",
    },
    {
      id: 5,
      title: "Moving Clean Up",
      logoImg: "https://i.ibb.co/kmcVLKr/our-service-img-5.png",
      description:
        "Etiam porta sem malesuada magna mollis euismod orbi leo risus maleuada Donec id elit non mi porta gravida at eget metus lorem ipsum sit",
    },
    {
      id: 6,
      title: "Junk Removal",
      logoImg: "https://i.ibb.co/Z2wV1Wr/our-service-img-6.png",
      description:
        "Etiam porta sem malesuada magna mollis euismod orbi leo risus maleuada Donec id elit non mi porta gravida at eget metus lorem ipsum sit",
    },
    {
      id: 7,
      title: "Steam Cleaning",
      logoImg: "https://i.ibb.co/CzvJ71T/our-service-img-7.png",
      description:
        "Etiam porta sem malesuada magna mollis euismod orbi leo risus maleuada Donec id elit non mi porta gravida at eget metus lorem ipsum sit",
    },
    {
      id: 8,
      title: "Handyman Services",
      logoImg: "https://i.ibb.co/882zf1x/our-service-img-8.png",
      description:
        "Etiam porta sem malesuada magna mollis euismod orbi leo risus maleuada Donec id elit non mi porta gravida at eget metus lorem ipsum sit",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#FFF1A8", mt: -4 }}>
      <Container sx={{ pt: 10, pb: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {serviceNavItem.map((serviceNItem) => (
              <ServiceItem
                serviceNItem={serviceNItem}
                key={serviceNItem.id}
              ></ServiceItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default OurServiceBox;
