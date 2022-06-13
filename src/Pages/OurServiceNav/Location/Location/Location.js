import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import LocationMap from "../LocationMap/LocationMap";
import LocationTitle from "../LocationTitle/LocationTitle";

const Location = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Box>
          <LocationTitle></LocationTitle>
        </Box>
        <Box>
          <LocationMap></LocationMap>
        </Box>
      </Container>
    </Container>
  );
};

export default Location;
