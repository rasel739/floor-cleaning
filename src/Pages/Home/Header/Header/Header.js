import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import HeaderStyle from "../../../../assets/css/header.module.css";
import HeaderLeft from "../HeaderLeft/HeaderLeft";
import HeaderRight from "../HeaderRight/HeaderRight";

const Header = () => {
  return (
    <Container maxWidth="xl" className={HeaderStyle.header}>
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
            <Grid item xs={12} md={6}>
              <HeaderLeft></HeaderLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <HeaderRight></HeaderRight>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default Header;
