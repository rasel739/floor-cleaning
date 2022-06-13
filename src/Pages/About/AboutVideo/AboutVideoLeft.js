import React from "react";
import AboutCustomImport from "../AboutCustomImport/AboutCustomImport";

const AboutVideoLeft = () => {
  const { Box } = AboutCustomImport();

  return (
    <Box>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/odVAT-BqS1E"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default AboutVideoLeft;
