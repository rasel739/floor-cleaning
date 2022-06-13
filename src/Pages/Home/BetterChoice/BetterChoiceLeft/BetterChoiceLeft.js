import FlipToBackIcon from "@mui/icons-material/FlipToBack";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import ReactBoxFlip from "react-box-flip";
import BetterStyle from "../../../../assets/css/better.module.css";

const BetterChoiceLeft = ({ better }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <Grid item xs={12} md={6}>
      <ReactBoxFlip isFlipped={isFlipped}>
        <Box>
          <img
            src={better.img}
            alt=""
            onChange={handleClick}
            className={BetterStyle.betterImg}
          />
          <Button
            onChange={handleClick}
            href="#contained-buttons"
            className={
              isFlipped ? BetterStyle.betterImgOne : BetterStyle.betterImgTwo
            }
          ></Button>
        </Box>
        <Box sx={{ textAlign: "justify", p: 5 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "#154780", textAlign: "center" }}
            gutterBottom
          >
            {better.title}
          </Typography>
          <Typography
            variant="paragraph"
            component="div"
            sx={{ color: "gray" }}
            gutterBottom
          >
            {better.cleanText}
          </Typography>
        </Box>
      </ReactBoxFlip>
      <Box>
        <img src={better.imgTwo} alt="" className={BetterStyle.betterImgBack} />
        <Button
          onClick={handleClick}
          href="#contained-buttons"
          className={
            isFlipped ? BetterStyle.betterImgOne : BetterStyle.betterImgTwo
          }
        >
          {isFlipped ? <FlipToFrontIcon /> : <FlipToBackIcon />}
        </Button>
      </Box>
    </Grid>
  );
};

export default BetterChoiceLeft;
