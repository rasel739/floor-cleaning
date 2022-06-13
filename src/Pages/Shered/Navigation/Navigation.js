import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, useTheme } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navStyle from "../../../assets/css/nav.module.css";
import useFirebase from "../../../hooks/useFirebase";
import cleaningLogo from "../../../img/cleaning-logo.png";
import MenuNav from "./MenuNav";

const drawerWidth = "100%";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navigation = () => {
  const { user } = useFirebase();
  const [navbarScroll, setNavbarScroll] = useState(false);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // custom navigation style

  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    nav: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
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
        paddingLeft: "0",
      },
    },
    navContainer: {
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "1rem",
      },
    },
  });

  const { navIcon, titleText, nav, navContainer } = useStyle();

  //navbar scrolling

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Container maxWidth="xl">
      <Container>
        <Box sx={{ display: "flex" }} className={navContainer}>
          <CssBaseline />
          <AppBar position="fixed" open={open} sx={{ boxShadow: 0 }}>
            <Toolbar
              className={navbarScroll ? navStyle.navbarActive : navStyle.navbar}
            >
              <div className={navIcon}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    mr: 2,
                    ...(open && { display: "none" }),
                    color: "blue",
                    backgroundColor: "yellow",
                    ml: 2,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </div>

              <Grid
                container
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    className={titleText}
                  >
                    <span className={navStyle.navTitle}>
                      Floor <img src={cleaningLogo} alt="" />
                      Cleaning
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={8} sx={{ textAlign: "right" }}>
                  <Box
                    className={nav}
                    sx={user?.email && { marginRight: "4rem" }}
                  >
                    <NavLink
                      to="/"
                      className={(navinfo) =>
                        navinfo.isActive
                          ? navStyle.navLinkActive
                          : navStyle.navLink
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/our-service"
                      className={(navinfo) =>
                        navinfo.isActive
                          ? navStyle.navLinkActive
                          : navStyle.navLink
                      }
                    >
                      Our Service
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={(navinfo) =>
                        navinfo.isActive
                          ? navStyle.navLinkActive
                          : navStyle.navLink
                      }
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className={(navinfo) =>
                        navinfo.isActive
                          ? navStyle.navLinkActive
                          : navStyle.navLink
                      }
                    >
                      Contact
                    </NavLink>

                    {user?.email ? (
                      <MenuNav></MenuNav>
                    ) : (
                      <NavLink
                        to="/login"
                        className={(navinfo) =>
                          navinfo.isActive
                            ? navStyle.navLinkActive
                            : navStyle.navLink
                        }
                      >
                        Login / Sign Up
                      </NavLink>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader sx={{ backgroundColor: "#e5f7fb" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                className={titleText}
              >
                <span className={navStyle.navTitle}>
                  Floor <img src={cleaningLogo} alt="" />
                  Cleaning
                </span>
              </Typography>
              <IconButton
                onClick={handleDrawerClose}
                sx={{ color: "red", backgroundColor: "yellow" }}
              >
                <CloseIcon />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List sx={{ backgroundColor: "#e5f7fb", height: "100%" }}>
              <ListItem>
                <ListItemText>
                  <NavLink
                    to="/home"
                    className={(navinfo) =>
                      navinfo.isActive
                        ? navStyle.navLinkActive
                        : navStyle.navLink
                    }
                  >
                    Home
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <NavLink
                    to="/our-service"
                    className={(navinfo) =>
                      navinfo.isActive
                        ? navStyle.navLinkActive
                        : navStyle.navLink
                    }
                  >
                    Our Service
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <NavLink
                    to="/about"
                    className={(navinfo) =>
                      navinfo.isActive
                        ? navStyle.navLinkActive
                        : navStyle.navLink
                    }
                  >
                    About
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <NavLink
                    to="/contact"
                    className={(navinfo) =>
                      navinfo.isActive
                        ? navStyle.navLinkActive
                        : navStyle.navLink
                    }
                  >
                    Contact
                  </NavLink>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <NavLink
                    to="/login"
                    className={(navinfo) =>
                      navinfo.isActive
                        ? navStyle.navLinkActive
                        : navStyle.navLink
                    }
                  >
                    Login
                  </NavLink>
                </ListItemText>
              </ListItem>
            </List>
          </Drawer>
          <Toolbar />
        </Box>
      </Container>
    </Container>
  );
};

export default Navigation;
