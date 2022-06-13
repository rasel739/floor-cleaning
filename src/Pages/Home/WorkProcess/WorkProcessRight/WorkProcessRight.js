import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WorkStyle from "../../../../assets/css/Work.module.css";

const WorkProcessRight = () => {
  return (
    <Box
      sx={{ textAlign: "left", color: "#154784" }}
      className={WorkStyle.workRight}
    >
      <Typography variant="h3" component="div" gutterBottom>
        What you need to know about our work process
      </Typography>
      <Typography
        variant="paragraph"
        component="div"
        sx={{ color: "gray", textAlign: "justify" }}
        gutterBottom
      >
        We Provide Quality Residential Cleaning Services At Great Prices. Call
        Today! We Use Only Biodegradable Products Are Fully Licensed Insured For
        Your Peace Of Mind. Available 24/7 on call. Se habla español. Flexible
        monthly rates. 10% Senior discount.Our approach towards cleaning and
        disinfecting that reinforces health protocols. We pride ourselves in
        keeping your building clean, compliant, and sustainable. Services:
        Commercial Cleaning, Property Management, Office Cleaning, Commercial
        Real Estate, Janitorial Services.
      </Typography>
    </Box>
  );
};

export default WorkProcessRight;
