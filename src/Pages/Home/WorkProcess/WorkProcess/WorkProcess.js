import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import WorkProcessLeft from "../WorkProcessLeft/WorkProcessLeft";
import WorkProcessRight from "../WorkProcessRight/WorkProcessRight";
import WorkProcessBottomLeft from "../WorkProcessBottomLeft/WorkProcessBottomLeft";
import WorkProcessBottomRight from "../WorkProcessBottomRight/WorkProcessBottomRight";

import WorkStyle from "../../../../assets/css/Work.module.css";

const WorkProcess = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container
      maxWidth="xl"
      sx={{ pt: 5, pb: 5 }}
      className={WorkStyle.workMain}
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={6} lg={6}>
              <WorkProcessLeft></WorkProcessLeft>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <WorkProcessRight></WorkProcessRight>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pt: 2,
              }}
            >
              <Grid item xs={12} md={6} lg={6}>
                <WorkProcessBottomLeft
                  expanded={expanded}
                  setExpanded={setExpanded}
                ></WorkProcessBottomLeft>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <WorkProcessBottomRight
                  expanded={expanded}
                ></WorkProcessBottomRight>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default WorkProcess;
