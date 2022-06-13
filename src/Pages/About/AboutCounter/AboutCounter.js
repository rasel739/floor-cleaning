import React from "react";
import Counter from "../../Home/Counter/Counter/Counter";
import AboutCustomImport from "../AboutCustomImport/AboutCustomImport";
import AboutCounterLeft from "./AboutCounterLeft";
import AboutCounterRight from "./AboutCounterRight";

const AboutCounter = () => {
  const { Container, Grid, Box } = AboutCustomImport();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <AboutCounterLeft></AboutCounterLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <AboutCounterRight></AboutCounterRight>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ pt: 15 }}>
          <Counter></Counter>
        </Box>
      </Container>
    </Container>
  );
};

export default AboutCounter;
