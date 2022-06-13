import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";

const OurServicesLeft = () => {
  const theme = useTheme();

  const OurServicesLeft = makeStyles({
    ourServicesL: {
      fontSize: "3rem",
      color: "#154784",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
  });

  const { ourServicesL } = OurServicesLeft();

  return (
    <Box sx={{ textAlign: "left", pt: 5, pr: 5 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ color: "#154784", fontWeight: "500" }}
        gutterBottom
      >
        Our services
      </Typography>
      <Typography
        variant="body"
        component="div"
        sx={{ py: 5 }}
        className={ourServicesL}
        gutterBottom
      >
        Serving the entire San Fransisco Bay Area
      </Typography>
      <Typography
        variant="paragraph"
        component="div"
        sx={{ textAlign: "justify", color: "gray" }}
        gutterBottom
      >
        The services page is about what we floor cleaning can do, and how great
        you are at it.Although they make sure to mention how their services will
        turn into the solutions for their audience, they make sure to include
        the reader or the potential customer is involved within each of the
        services.
      </Typography>
    </Box>
  );
};

export default OurServicesLeft;
