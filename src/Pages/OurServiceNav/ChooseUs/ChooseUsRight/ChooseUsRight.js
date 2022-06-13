import React from "react";
import Box from "@mui/material/Box";
import chooseUsImg from "../../../../img/choose-us.png";
import chooseStyle from "../../../../assets/css/chooseUs.module.css";

const ChooseUsRight = ({ expanded }) => {
  return (
    <Box>
      <img
        src={chooseUsImg}
        alt=""
        className={
          expanded
            ? chooseStyle.chooseRightImgOne
            : chooseStyle.chooseRightImgTwo
        }
      />
    </Box>
  );
};

export default ChooseUsRight;
