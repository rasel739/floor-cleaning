import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

const FooterBottom = () => {
  return (
    <Box sx={{ flexGrow: 1, pt: 5, color: "#e5f7fb", textAlign: "left" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography variant="paragraph" component="p" gutterBottom>
              Copyright &copy; {new Date().getFullYear()} By Floor Cleaning
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box>
            <Link href="#" underline="none" sx={{ color: "#e5f7fb" }}>
              Privacy policy
            </Link>
            <Link href="#" underline="none" sx={{ px: 2, color: "#e5f7fb" }}>
              Term of service
            </Link>
            <Link href="#" underline="none" sx={{ color: "#e5f7fb" }}>
              Career
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterBottom;
