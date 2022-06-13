import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import CommonModal from "../../../ComonComponent/CommonModal";

const HeaderLeft = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();

  const headerLeftStyle = makeStyles({
    headerTitle: {
      color: "#154784",
      fontSize: "3rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },

    nav: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    titleText: {
      textAlign: "left",
      paddingLeft: "2rem",
      color: "#154784",

      [theme.breakpoints.down("sm")]: {
        textAlign: "left",
        paddingTop: ".5rem",
      },
    },
  });

  const { headerTitle } = headerLeftStyle();

  return (
    <Box sx={{ textAlign: "left" }}>
      <Button variant="contained">Need a clean space?</Button>
      <Typography
        variant="body"
        className={headerTitle}
        sx={{ width: "100%", fontWeight: "500", py: 2 }}
        component="div"
        gutterBottom
      >
        Meet the professional commercial cleaning you deserve
      </Typography>
      <Typography paragraph sx={{ width: "80%", color: "gray" }}>
        As a cleaning business owner, I know the day-to-day struggles of racking
        your brain trying to come up with creative content for your floor
        cleaning sites.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button variant="contained" sx={{ borderRadius: 5 }}>
            <Box>
              <Typography variant="body2" gutterBottom>
                NOW BOOK YOUR SERVICE
              </Typography>
            </Box>
            <Box sx={{ ml: 2 }}>
              <CleaningServicesIcon />
            </Box>
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: 5,
            }}
            onClick={handleOpen}
          >
            <Box sx={{ mr: 2 }}>
              <PlayCircleFilledIcon />
            </Box>

            <Box>
              <Typography variant="body2" gutterBottom>
                WATCH HOW WE DO IT
              </Typography>
            </Box>
          </Button>
        </Grid>
      </Grid>
      <CommonModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default HeaderLeft;
