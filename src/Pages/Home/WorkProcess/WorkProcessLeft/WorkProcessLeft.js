import React from "react";
import Box from "@mui/material/Box";
import WorkStyle from "../../../../assets/css/Work.module.css";
import workImgOne from "../../../../img/work-img-1.jpg";

const WorkProcessLeft = () => {
  return (
    <Box>
      <img src={workImgOne} alt="" className={WorkStyle.workImg} />
    </Box>
  );
};

export default WorkProcessLeft;
