import React from "react";
import AboutCustomImport from "../../../About/AboutCustomImport/AboutCustomImport";

const ContactFromLeftItem = ({ fromItem }) => {
  const { Box, Grid, Typography } = AboutCustomImport();

  const { title, addressOne, addressTwo, addressThree, time } = fromItem;

  return (
    <Grid item xs={12} md={6}>
      <Box>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Box>
          <Typography variant="body2" component="div" gutterBottom>
            {addressOne}
          </Typography>
          <Typography variant="body2" component="div" gutterBottom>
            {addressTwo}
          </Typography>
          <Typography variant="body2" component="div" gutterBottom>
            {addressThree}
          </Typography>
        </Box>
        <Typography variant="body2" component="div" gutterBottom>
          {time}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ContactFromLeftItem;
