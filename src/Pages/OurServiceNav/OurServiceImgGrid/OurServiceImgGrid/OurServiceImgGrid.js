import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import ServiceImgCard from "../ServiceImgCard/ServiceImgCard/ServiceImgCard";
import OurServiceImgGridTitle from "../ServiceImgGridTitle/OurServiceImgGridTitle";

const OurServiceImgGrid = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Box>
          <OurServiceImgGridTitle></OurServiceImgGridTitle>
        </Box>
        <Box>
          <ServiceImgCard></ServiceImgCard>
        </Box>
      </Container>
    </Container>
  );
};

export default OurServiceImgGrid;
