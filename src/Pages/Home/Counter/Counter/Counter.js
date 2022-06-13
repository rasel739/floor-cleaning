import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CounterNumber from "../CounterNumber/CounterNumber";
import counterStyle from "../../../../assets/css/counter.module.css";

const Counter = () => {
  const CounterUp = [
    {
      id: 1,
      count: 100,
      title: "SUCCESS RATE",
      rate: "%",
    },
    {
      id: 2,
      count: 100,
      title: "HAPPY CLIENTS",
      rate: "+",
    },
    {
      id: 3,
      count: 100,
      title: "SERVICE DONE",
      rate: "+",
      border: "none",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ pt: 5, pb: 5 }}
      className={counterStyle.counter}
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {CounterUp.map((counter) => (
              <CounterNumber key={counter.id} counter={counter}></CounterNumber>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default Counter;
