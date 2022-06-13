import Box from "@mui/material/Box";
import React from "react";
import WorkStyle from "../../../../assets/css/Work.module.css";
import workImgTwo from "../../../../img/work-img-2.jpg";

const WorkProcessBottomRight = ({ expanded }) => {
  return (
    <Box>
      <img
        src={workImgTwo}
        alt=""
        className={expanded ? WorkStyle.workImgOne : WorkStyle.workImgTwo}
      />
    </Box>
  );
};

export default WorkProcessBottomRight;
