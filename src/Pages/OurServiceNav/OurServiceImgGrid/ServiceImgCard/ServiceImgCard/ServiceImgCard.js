import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import ServiceImgCardItem from "../ServiceImgCardItem/ServiceImgCardItem";

const ServiceImgCard = () => {
  const serviceImgGrid = [
    {
      id: 1,
      title: "Adipiscing Consectetur",
      serviceImg: " https://i.ibb.co/z8BnDRV/service-grid-1.jpg",
      hoverText:
        " Floor care experience is necessary for anyone who will be doing the actual cleaning. ",
      buttonText: "Get Started ",
    },
    {
      id: 2,
      title: "Adipiscing Consectetur",
      serviceImg: " https://i.ibb.co/vqvdspK/service-grid-2.jpg",
      hoverText:
        " Floor care experience is necessary for anyone who will be doing the actual cleaning. ",
      buttonText: "Get Started ",
    },
    {
      id: 3,
      title: "Adipiscing Consectetur",
      serviceImg: "https://i.ibb.co/s3LpqKs/service-grid-3.jpg",
      hoverText:
        " Floor care experience is necessary for anyone who will be doing the actual cleaning. ",
      buttonText: "Get Started ",
    },
    {
      id: 4,
      title: "Adipiscing Consectetur",
      serviceImg: "https://i.ibb.co/J3f1VJZ/service-grid-4.jpg",
      hoverText:
        " Floor care experience is necessary for anyone who will be doing the actual cleaning. ",
      buttonText: "Get Started ",
    },
  ];

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {serviceImgGrid.map((serviceImgItem) => (
            <ServiceImgCardItem
              key={serviceImgItem.id}
              serviceImgItem={serviceImgItem}
            ></ServiceImgCardItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceImgCard;
