import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";
import footerStyle from "../../../../assets/css/footer.module.css";

const FooterLeft = ({ footerItem }) => {
  const {
    title,
    itemText,
    itemIconOne,
    itemIconTwo,
    itemIconThree,
    itemIconFour,
  } = footerItem;

  return (
    <Box className={footerStyle.footerLeft} sx={{ mr: 2, mt: -3 }}>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ textAlign: "left" }}
      >
        {title}
      </Typography>
      <Typography
        variant="paragraph"
        component="p"
        gutterBottom
        sx={{ textAlign: "justify" }}
      >
        {itemText}
      </Typography>
      <Box className={footerStyle.footerIconBox}>
        <Link href="#" underline="none" className={footerStyle.footerIcon}>
          {itemIconOne}
        </Link>
        <Link href="#" underline="none" className={footerStyle.footerIcon}>
          {itemIconTwo}
        </Link>
        <Link href="#" underline="none" className={footerStyle.footerIcon}>
          {itemIconThree}
        </Link>
        <Link href="#" underline="none" className={footerStyle.footerIcon}>
          {itemIconFour}
        </Link>
      </Box>
    </Box>
  );
};

export default FooterLeft;
