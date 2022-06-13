import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import footerStyle from "../../../../assets/css/footer.module.css";

const FooterMiddle = ({ footerItem }) => {
  const { title, itemOne, itemTwo, itemThree, itemFour } = footerItem;

  const theme = useTheme();

  const footerMiddleStyle = makeStyles({
    footerMiddleItem: {
      marginLeft: "2rem",
      [theme.breakpoints.down("sm")]: {
        marginLeft: ".9rem",
      },
    },
  });

  const { footerMiddleItem } = footerMiddleStyle();

  return (
    <Grid item xs={12} md={4}>
      <Box className={footerMiddleItem}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          className={footerStyle.footerMiddle}
          sx={{ textAlign: "left" }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            textAlign: "left",
          }}
        >
          <Link href="#" underline="none">
            <span className={footerStyle.footerMiddle}>{itemOne}</span>
          </Link>
          <Link href="#" underline="none">
            <span className={footerStyle.footerMiddle}>{itemTwo}</span>
          </Link>
          <Link href="#" underline="none">
            <span className={footerStyle.footerMiddle}>{itemThree}</span>
          </Link>
          <Link href="#" underline="none">
            <span className={footerStyle.footerMiddle}>{itemFour}</span>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default FooterMiddle;
