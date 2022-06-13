import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import sponsorStyle from "../../../../assets/css/sponsor.module.css";

const SponsorItem = ({ sponsor }) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Box>
        <img src={sponsor.img} alt="" className={sponsorStyle.sponsorImg} />
      </Box>
    </Grid>
  );
};

export default SponsorItem;
