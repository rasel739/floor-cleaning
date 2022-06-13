import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import footerStyle from "../../../../assets/css/footer.module.css";

const FooterRight = ({ footerItem }) => {
  const { title, itemOne, itemTwo } = footerItem;

  return (
    <Box sx={{ textAlign: "left", mt: -2 }}>
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        className={footerStyle.footerRight}
      >
        {title}
      </Typography>
      <Box>
        <Link href="#" underline="none">
          <span className={footerStyle.footerRight}>{itemOne}</span>
        </Link>
        <Link href="#" underline="none">
          <span className={footerStyle.footerRight}>{itemTwo}</span>
        </Link>
      </Box>
    </Box>
  );
};

export default FooterRight;
