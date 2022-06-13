import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TheProcessTitle from "../TheProcessTitle/TheProcessTitle";
import TheProcessSteper from "../TheProcessSteper/TheProcessSteper";

const TheProcess = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 5, bgcolor: "#F6F6F6" }}>
      <Container>
        <Box>
          <TheProcessTitle></TheProcessTitle>
        </Box>
        <Box sx={{ mt: 5 }}>
          <TheProcessSteper></TheProcessSteper>
        </Box>
      </Container>
    </Container>
  );
};

export default TheProcess;
