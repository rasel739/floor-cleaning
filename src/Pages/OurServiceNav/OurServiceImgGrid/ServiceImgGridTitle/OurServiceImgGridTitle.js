import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import gridTitleStyle from "../../../../assets/css/OurServiceItemGrid.module.css";

const OurServiceImgGridTitle = () => {
  const theme = useTheme();

  const gridTitle = makeStyles({
    gridTitleBox: {
      width: "60%",
      textAlign: "center",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  });

  const { gridTitleBox } = gridTitle();

  return (
    <Box sx={{ width: "100%", py: 5 }}>
      <Box className={gridTitleBox}>
        <Typography
          variant="h6"
          component="div"
          className={gridTitleStyle.gridTitle}
          gutterBottom
        >
          Types of cleaning jobs
        </Typography>

        <Typography variant="h3" component="div" gutterBottom>
          San Francisco home cleaning services you can see and feel
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "gray" }}
          component="div"
          gutterBottom
        >
          If you advertise yourself as a floor cleaning business only, people
          won't be hiring you to clean upholstery or windows. It can also be
          rewarding to narrow your focus, however.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurServiceImgGridTitle;
