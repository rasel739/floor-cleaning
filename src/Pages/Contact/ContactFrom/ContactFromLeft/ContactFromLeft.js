import React from "react";
import AboutCustomImport from "../../../About/AboutCustomImport/AboutCustomImport";
import ContactFromLeftItem from "./ContactFromLeftItem";

const ContactFromLeft = () => {
  const { Box, Grid } = AboutCustomImport();

  const contactItems = [
    {
      id: 1,
      title: "New Jersey",
      addressOne: "772 East Olive Ave.",
      addressTwo: "Flemington, NJ 08822",
      addressThree: "nj@cleanco.com",
      time: "087.666.090",
    },
    {
      id: 2,
      title: "New York",
      addressOne: "772 East Olive Ave.",
      addressTwo: "Flemington, NJ 08822",
      addressThree: "nj@cleanco.com",
      time: "087.666.090",
    },
    {
      id: 3,
      title: "Texas",
      addressOne: "772 East Olive Ave.",
      addressTwo: "Flemington, NJ 08822",
      addressThree: "nj@cleanco.com",
      time: "087.666.090",
    },
    {
      id: 4,
      title: "Minnesota",
      addressOne: "772 East Olive Ave.",
      addressTwo: "Flemington, NJ 08822",
      addressThree: "nj@cleanco.com",
      time: "087.666.090",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {contactItems.map((fromItem) => (
          <ContactFromLeftItem
            fromItem={fromItem}
            key={fromItem.id}
          ></ContactFromLeftItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactFromLeft;
