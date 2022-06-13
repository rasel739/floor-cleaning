import CampaignIcon from "@mui/icons-material/Campaign";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import Shop2Icon from "@mui/icons-material/Shop2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

const categories = [
  {
    id: "Build",
    children: [
      {
        id: "Profile",
        icon: <PersonIcon />,
        active: true,
        linkId: "profile",
      },
      { id: "Your Order", icon: <Shop2Icon />, linkId: "your-order" },
      {
        id: "Payment History",
        icon: <PaymentIcon />,
        linkId: "payment-history",
      },
      { id: "Announcement", icon: <CampaignIcon />, linkId: "announcement" },
      {
        id: "Order History",
        icon: <HistoryIcon />,
        linkId: "order-history",
      },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

const Navigator = (props) => {
  const { logOut } = useFirebase();

  const navigate = useNavigate();

  const { ...other } = props;

  const handleLogOut = () => {
    logOut();

    navigate("/");
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Floor Cleaning
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            {children.map(({ id: childId, icon, active, linkId }) => (
              <ListItem disablePadding key={childId}>
                <Link
                  to={`/user-dashboard/${linkId}`}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    paddingTop: "2rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>

                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
            <ListItemButton sx={item} onClick={handleLogOut}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>

              <ListItemText>LogOut</ListItemText>
            </ListItemButton>
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigator;
