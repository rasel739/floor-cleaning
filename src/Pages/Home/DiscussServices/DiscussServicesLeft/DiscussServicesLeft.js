import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import discussStyle from "../../../../assets/css/discuss.module.css";

const DiscussServicesLeft = ({ serviceReq }) => {
  const { title, text, icon } = serviceReq;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box className={discussStyle.discussBox}>
            <Box>{icon}</Box>
            <Box>{title}</Box>
            <Box>{text}</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscussServicesLeft;
