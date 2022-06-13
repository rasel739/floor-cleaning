import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";

const SteperItemImg = ({ steperImgs }) => {
  const theme = useTheme();

  const steperImgStyle = makeStyles({
    steperBox: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: "5rem",
      },
      width: "100%",
    },
  });

  const { steperBox } = steperImgStyle();
  return (
    <Grid item xs={12} md={2.4}>
      <Box className={steperBox}>
        <Stepper activeStep={1} alternativeLabel>
          <Step key={steperImgs}>
            <StepLabel>
              <img src={steperImgs} style={{ width: "50%" }} alt="" />
            </StepLabel>
          </Step>
        </Stepper>
      </Box>
    </Grid>
  );
};

export default SteperItemImg;
