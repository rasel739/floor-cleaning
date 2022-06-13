import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import betterOne from "../../../../img/better-1.jpg";
import betterTwo from "../../../../img/better-2.jpg";
import betterThree from "../../../../img/better-3.jpg";
import betterFour from "../../../../img/better-4.jpg";
import betterTwoOne from "../../../../img/better-two-1.jpg";
import betterTwoTwo from "../../../../img/better-two-2.jpg";
import betterTwoThree from "../../../../img/better-two-3.jpg";
import betterTwoFour from "../../../../img/better-two-4.jpg";
import BetterChoiceLeft from "../BetterChoiceLeft/BetterChoiceLeft";
import BetterChoiceRight from "../BetterChoiceRight/BetterChoiceRight";

const BetterChoice = () => {
  const better = [
    {
      id: 1,
      img: betterOne,
      imgTwo: betterTwoOne,
      title: "Cleaning Appointment",
      cleanText:
        "Innovative and universal multi-purpose liquid. Intended for cleaning various surfaces, including wooden, ",
    },
    {
      id: 2,
      img: betterTwo,
      imgTwo: betterTwoTwo,
      title: "Cleaning Floor",
      cleanText:
        "Innovative and universal multi-purpose liquid. Intended for cleaning various surfaces, including wooden, ",
    },
    {
      id: 3,
      img: betterThree,
      imgTwo: betterTwoThree,
      title: "Cleaning Tools",
      cleanText:
        "Innovative and universal multi-purpose liquid. Intended for cleaning various surfaces, including wooden, ",
    },
    {
      id: 4,
      img: betterFour,
      imgTwo: betterTwoFour,
      title: "Cleaning Man",
      cleanText:
        "Innovative and universal multi-purpose liquid. Intended for cleaning various surfaces, including wooden, ",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ pt: 5, pb: 5 }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={8}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {better.map((better) => (
                    <BetterChoiceLeft
                      key={better.id}
                      better={better}
                    ></BetterChoiceLeft>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <BetterChoiceRight></BetterChoiceRight>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default BetterChoice;
