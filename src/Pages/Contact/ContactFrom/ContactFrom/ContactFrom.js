import React from "react";
import AboutCustomImport from "../../../About/AboutCustomImport/AboutCustomImport";
import ContactFromLeft from "../ContactFromLeft/ContactFromLeft";
import ContactFromRight from "../ContactFromRight/ContactFromRight";

const ContactFrom = () => {
  const { Container, Box, Grid, Typography } = AboutCustomImport();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" component="div" gutterBottom>
                  Dont be shy
                </Typography>
                <Typography variant="h4" component="div" gutterBottom>
                  Drop us a line
                </Typography>
              </Box>
              <ContactFromLeft></ContactFromLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactFromRight></ContactFromRight>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default ContactFrom;
