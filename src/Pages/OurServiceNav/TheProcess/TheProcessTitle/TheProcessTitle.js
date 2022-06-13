import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const TheProcessTitle = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "60%",

          margin: "auto",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "#00E8F6" }}
          gutterBottom
        >
          <span style={{ marginRight: "1rem" }}>
            <PlayCircleOutlineIcon />
          </span>
          <span>Click to play video</span>
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
          The process we have been doing for over 25 years of service
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ color: "gray" }}
          gutterBottom
        >
          Floor care experience is necessary for anyone who will be doing the
          actual cleaning. If you will be doing the cleaning, and have never had
          actual floor care experience apart from cleaning your own home, then
          you should learn before starting your business.
        </Typography>
      </Box>
    </Box>
  );
};

export default TheProcessTitle;
