import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import CleanHomeLeft from "../CleanHomeLeft/CleanHomeLeft";
import CleanHomeRight from "../CleanHomeRight/CleanHomeRight";

const CleanHome = () => {
  return (
    <Container maxWidth="xl" sx={{ pt: 5, pb: 5 }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CleanHomeLeft></CleanHomeLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <CleanHomeRight></CleanHomeRight>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default CleanHome;
