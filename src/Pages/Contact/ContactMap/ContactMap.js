import React from "react";
import AboutCustomImport from "../../About/AboutCustomImport/AboutCustomImport";

const ContactMap = () => {
  const { Container, Box, CardMedia } = AboutCustomImport();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Box>
          <CardMedia
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939325.943495791!2d90.39645197229645!3d23.124829273530104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5b6f19c52f7%3A0x1e6d8ea1de69346d!2sFloor%20Care%20Limited.!5e0!3m2!1sen!2sbd!4v1648748996001!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></CardMedia>
        </Box>
      </Container>
    </Container>
  );
};

export default ContactMap;
