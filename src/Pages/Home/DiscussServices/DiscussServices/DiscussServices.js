import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import discussStyle from "../../../../assets/css/discuss.module.css";
import DiscussServicesLeft from "../DiscussServicesLeft/DiscussServicesLeft";
import DiscussServicesRight from "../DiscussServicesRight/DiscussServicesRight";

const DiscussServices = () => {
  const theme = useTheme();

  const discussServiceStyle = makeStyles({
    discussService: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
    discussLeftS: {
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "1rem",
      },
    },
  });

  const { discussService, discussLeftS } = discussServiceStyle();

  const serviceReq = [
    {
      id: 1,
      icon: <LocalPhoneIcon />,
      title: "Phone",
      text: "01305344768",
    },
    {
      id: 2,
      icon: <MailIcon />,
      title: "Email",
      text: "floor@cleaning.com",
    },
    {
      id: 3,
      icon: <AccessTimeFilledIcon />,
      title: "Time",
      text: "8:00 am - 8:00 pm",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 5 }}
      className={discussStyle.discussMain}
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={7} className={discussLeftS}>
              <Box
                className={discussStyle.discussLeftBox}
                sx={{ boxShadow: 3 }}
              >
                <Box sx={{ textAlign: "left", mb: 5 }}>
                  <Typography variant="h4" component="div" gutterBottom>
                    Discuss our services or ​request a cleaning estimate today
                  </Typography>
                  <Typography
                    variant="paragraph"
                    sx={{ py: 2, color: "gray" }}
                    component="div"
                    gutterBottom
                  >
                    Collect cleaning service requests from your clients online
                    with Jotform’s free Cleaning Service Request Form Template!
                    Start by customizing the template design to match your
                    business or individual branding. Then embed the form in your
                    website or share it with a link via social media to start
                    receiving requests instantly.
                  </Typography>
                </Box>
                <Box className={discussService}>
                  {serviceReq.map((serviceReq) => (
                    <Grid item xs={12} md={4} key={serviceReq.id}>
                      <DiscussServicesLeft
                        serviceReq={serviceReq}
                      ></DiscussServicesLeft>
                    </Grid>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "#154784" }}
                  component="div"
                  gutterBottom
                >
                  {"Service ​request from"}
                </Typography>
              </Box>
              <Box>
                <DiscussServicesRight></DiscussServicesRight>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default DiscussServices;
