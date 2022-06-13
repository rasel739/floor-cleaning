import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import ourContactUsStyle from "../../../assets/css/ourContactUs.module.css";

const OurContactUs = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ py: 10 }}
      className={ourContactUsStyle.ourContactUs}
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h6" component="div" gutterBottom>
                  Work Inquiries
                </Typography>
                <Typography variant="h3" component="div" gutterBottom>
                  Questions? Get in touch.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="body2" component="div" gutterBottom>
                  Curabitur blandit tempus porttitor. Nullam quis risus eget
                  urna mollis ornare vel eu leo. Sed posuere consectetur est at
                  lobortis.Lorem ipsum dolor sit amet, consectetur
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Button variant="contained" endIcon={<ArrowRightIcon />}>
                  CONTACT US
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default OurContactUs;
