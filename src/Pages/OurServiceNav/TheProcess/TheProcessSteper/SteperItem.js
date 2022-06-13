import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const SteperItem = ({ steperProduct }) => {
  const { id, steperTitle, steperText } = steperProduct;

  return (
    <Grid item xs={12} md={2.4}>
      <Box>
        <Typography variant="h6" component="div" gutterBottom>
          {id}.{""}
          {steperTitle}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          gutterBottom
          sx={{ textAlign: "justify" }}
        >
          {steperText}
        </Typography>
      </Box>
    </Grid>
  );
};

export default SteperItem;
