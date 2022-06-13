import React from "react";
import AboutCustomImport from "../About/AboutCustomImport/AboutCustomImport";

const ComonPageTitle = ({ title }) => {
  const { Box, Container, Typography, OurServiceNavStyle } =
    AboutCustomImport();
  return (
    <Container maxWidth="xl" className={OurServiceNavStyle.titleBox}>
      <Container>
        <Box>
          <Typography variant="h3" noWrap component="div" sx={{ py: 8 }}>
            {title}
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default ComonPageTitle;
