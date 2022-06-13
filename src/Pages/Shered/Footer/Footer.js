import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import FooterStyle from "../../../assets/css/footer.module.css";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
import FooterRight from "./FooterRight/FooterRight";

const Footer = () => {
  const footerItem = [
    {
      id: 1,
      title: "Floor Cleaning",
      itemText:
        "The website footer is the section of content at the very bottom of a web page. It typically contains a copyright notice, link to a privacy policy.",
      itemIconOne: <FacebookIcon />,
      itemIconTwo: <TwitterIcon />,
      itemIconThree: <LinkedInIcon />,
      itemIconFour: <YouTubeIcon />,
    },
    {
      id: 2,
      title: "About",
      itemOne: "Our Team",
      itemTwo: "Company",
      itemThree: "Angel Investor",
      itemFour: "Offices",
    },
    {
      id: 3,
      title: "Useful linkes",
      itemOne: "Shop",
      itemTwo: "Contact Us",
      itemThree: "News",
      itemFour: "Legal",
    },
    {
      id: 4,
      title: "Resources",
      itemOne: "Training",
      itemTwo: "Marketplace",
      itemThree: "Expert",
      itemFour: "Knowledge base",
    },
    {
      id: 5,
      title: "Head office",
      itemOne: "Via Galileo Ferraris 73 Nuvolato, Cordon Bléu Italy 46020",
      itemTwo: "hola@cleanco.com",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 5 }} className={FooterStyle.footer}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              {footerItem.slice(0, 1).map((footerItem) => (
                <FooterLeft
                  key={footerItem.id}
                  footerItem={footerItem}
                ></FooterLeft>
              ))}
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Grid container spacing={2}>
                {footerItem.slice(1, 4).map((footerItem) => (
                  <FooterMiddle
                    key={footerItem.id}
                    footerItem={footerItem}
                  ></FooterMiddle>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              {footerItem.slice(4, 5).map((footerItem) => (
                <FooterRight
                  key={footerItem.id}
                  footerItem={footerItem}
                ></FooterRight>
              ))}
            </Grid>
          </Grid>
          <FooterBottom></FooterBottom>
        </Box>
      </Container>
    </Container>
  );
};

export default Footer;
