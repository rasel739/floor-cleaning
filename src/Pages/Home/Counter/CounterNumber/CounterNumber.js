import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterNumber = ({ counter }) => {
  const theme = useTheme();

  const counterNumber = makeStyles({
    counterBorder: {
      borderRight: "1px solid #154784",
      [theme.breakpoints.down("sm")]: {
        borderRight: "none",
      },
    },
  });

  const { counterBorder } = counterNumber();

  return (
    <Grid item xs={12} md={4}>
      <Box className={counterBorder} sx={{ borderRight: counter.border }}>
        <CountUp start={0} end={counter.count} duration={2}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <Typography
                variant="h3"
                sx={{ color: "#154784" }}
                component="div"
                gutterBottom
                ref={countUpRef}
              ></Typography>
            </VisibilitySensor>
          )}
        </CountUp>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          sx={{ color: "#154784" }}
        >
          {counter.rate}
        </Typography>
      </Box>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: "#154784" }}
        gutterBottom
      >
        {counter.title}
      </Typography>
    </Grid>
  );
};

export default CounterNumber;
