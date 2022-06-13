import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CheckIcon from "@mui/icons-material/Check";

const BetterChoiceRight = () => {
  const listItem = [
    {
      id: 1,
      itemIcon: <CheckIcon />,
      itemText: "Disinfectant Chemicals",
    },
    {
      id: 2,
      itemIcon: <CheckIcon />,
      itemText: "Liquid Floor Cleaner",
    },
    {
      id: 3,
      itemIcon: <CheckIcon />,
      itemText: "Concentrated Floor Cleaner",
    },
    {
      id: 4,
      itemIcon: <CheckIcon />,
      itemText: "Diversey Floor Cleaner",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "left",
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "#154780" }}
        component="div"
        gutterBottom
      >
        How we do it
      </Typography>
      <Typography
        variant="h3"
        component="div"
        sx={{ color: "#154780" }}
        gutterBottom
      >
        A better choice for cleaning
      </Typography>
      <Typography
        variant="paragraph"
        component="div"
        gutterBottom
        sx={{ textAlign: "justify", color: "gray" }}
      >
        Innovative and universal multi-purpose liquid. Intended for cleaning
        various surfaces, including wooden, lacquered, ceramic and plastic,
        floor panels, tiles, window sills, kitchen furniture etc.
      </Typography>
      <List sx={{ textAlign: "left", ml: -2 }}>
        {listItem.map((listItem) => (
          <ListItem key={listItem.id}>
            <ListItemAvatar sx={{ color: "green" }}>
              {listItem.itemIcon}
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#154780" }}
              primary={listItem.itemText}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BetterChoiceRight;
