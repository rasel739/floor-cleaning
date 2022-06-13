import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import sponsorStyle from "../../../../assets/css/sponsor.module.css";
import sponsorImgOne from "../../../../img/Asset-1.png";
import sponsorImgTwo from "../../../../img/Asset-2.png";
import sponsorImgThree from "../../../../img/Asset-3.png";
import sponsorImgFour from "../../../../img/Asset-4.png";
import sponsorImgFive from "../../../../img/Asset-5.png";
import sponsorImgSix from "../../../../img/Asset-6.png";
import sponsorImgSeven from "../../../../img/Asset-7.png";
import sponsorImgEight from "../../../../img/Asset-8.png";
import SponsorItem from "../SponsorItem/SponsorItem";

const Sponsor = () => {
  const sponsor = [
    {
      id: 1,
      img: sponsorImgOne,
    },
    {
      id: 2,
      img: sponsorImgTwo,
    },
    {
      id: 3,
      img: sponsorImgThree,
    },
    {
      id: 4,
      img: sponsorImgFour,
    },
    {
      id: 5,
      img: sponsorImgFive,
    },
    {
      id: 6,
      img: sponsorImgSix,
    },
    {
      id: 7,
      img: sponsorImgSeven,
    },
    {
      id: 8,
      img: sponsorImgEight,
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ pt: 5, pb: 5 }}
      className={sponsorStyle.sponsor}
    >
      <Container>
        <Typography
          variant="h2"
          className={sponsorStyle.sponsorTitle}
          component="div"
          gutterBottom
        >
          Our Clients
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {sponsor.map((sponsor) => (
                    <SponsorItem
                      key={sponsor.id}
                      sponsor={sponsor}
                    ></SponsorItem>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default Sponsor;
