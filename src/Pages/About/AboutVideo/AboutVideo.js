import React from "react";
import AboutCustomImport from "../AboutCustomImport/AboutCustomImport";
import AboutVideoLeft from "./AboutVideoLeft";
import AboutVideoRight from "./AboutVideoRight";

const AboutVideo = () => {
  const { Box, Container, Grid } = AboutCustomImport();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <AboutVideoLeft></AboutVideoLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <AboutVideoRight></AboutVideoRight>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default AboutVideo;
