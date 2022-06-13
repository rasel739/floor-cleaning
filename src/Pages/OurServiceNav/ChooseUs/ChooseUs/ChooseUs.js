import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ChooseUsLeft from "../ChooseUsLeft/ChooseUsLeft";
import ChooseUsRight from "../ChooseUsRight/ChooseUsRight";

const ChooseUs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ChooseUsLeft
                expanded={expanded}
                setExpanded={setExpanded}
              ></ChooseUsLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <ChooseUsRight expanded={expanded}></ChooseUsRight>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default ChooseUs;
