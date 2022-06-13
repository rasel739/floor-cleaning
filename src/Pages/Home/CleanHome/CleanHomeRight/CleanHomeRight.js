import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import CleanStyle from "../../../../assets/css/cleanHome.module.css";

const CleanHomeRight = () => {
  const theme = useTheme();

  const cleanHomeRight = makeStyles({
    cleanHomeR: {
      padding: "1rem 4rem 1rem 4rem",
      color: "#154784",
      [theme.breakpoints.down("sm")]: {
        padding: "1.5rem",
      },
    },
  });

  const { cleanHomeR } = cleanHomeRight();
  return (
    <Box className={CleanStyle.cleanRight}>
      <Box>
        <Typography
          variant="h5"
          component="div"
          className={CleanStyle.cleanRightTitle}
          gutterBottom
        >
          A clean home is a happy home
        </Typography>
        <Typography
          variant="paragraph"
          component="div"
          gutterBottom
          sx={{ textAlign: "justify" }}
          className={cleanHomeR}
        >
          Even the tidiest homes can use a good deep cleaning from time to time.
          To avoid becoming overwhelmed when deep cleaning a house, it's helpful
          to break the process down into smaller, more manageable tasks. With
          our deep house-cleaning guide, you'll start with six basic tasks. Once
          you've completed those, you can move on to tackling a few
          room-specific chores. This whole-home cleaning checklist comes in
          handy before you host company or when daily clutter and messes have
          started to pile up. You can also follow these steps as part of your
          annual cleaning regimen in the spring or fall. Soon you'll have a
          clean and tidy home that can pass a white-glove inspection.A standard
          clean is something that a homeowner does or should do regularly to
          upkeep the cleanliness of their homes. Regular chores, such as
          vacuuming and mopping the floors, general bathroom cleaning, kitchen
          cleaning, and dusting. ... This cleaning will be longer than future
          recurring cleanings.
        </Typography>
      </Box>
    </Box>
  );
};

export default CleanHomeRight;
