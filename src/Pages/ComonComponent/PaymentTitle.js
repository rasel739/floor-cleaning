import { Box, Typography } from "@mui/material";
import React from "react";

const PaymentTitle = ({ title }) => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
};

export default PaymentTitle;
