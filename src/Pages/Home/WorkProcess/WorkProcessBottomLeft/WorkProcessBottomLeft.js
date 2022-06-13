import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import WorkStyle from "../../../../assets/css/Work.module.css";

const WorkProcessBottomLeft = ({ expanded, setExpanded }) => {
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const workItem = [
    {
      id: 1,
      question: "What do floor cleaners contain?",
      ans: "Among the many active ingredients surface and floor cleaners contain, the most common ones are Ethanol a fluid that acts as sanitizer; Isopropyl alcohol which is partly responsible for the disinfectant s strong odour; antiseptics such asp-Chloro-o-benzylphenol, o-Phenylphenol, and lactic acid.",
      panel: "panel1",
    },
    {
      id: 2,
      question: "What are the 10 cleaning agents?",
      ans: "Among the many active ingredients surface and floor cleaners contain, the most common ones are Ethanol a fluid that acts as sanitizer; Isopropyl alcohol which is partly responsible for the disinfectant s strong odour; antiseptics such asp-Chloro-o-benzylphenol, o-Phenylphenol, and lactic acid.",
      panel: "panel2",
    },
    {
      id: 3,
      question: "What are the cleaning items?",
      ans: "Among the many active ingredients surface and floor cleaners contain, the most common ones are Ethanol a fluid that acts as sanitizer; Isopropyl alcohol which is partly responsible for the disinfectant s strong odour; antiseptics such asp-Chloro-o-benzylphenol, o-Phenylphenol, and lactic acid.",
      panel: "panel3",
    },
    {
      id: 4,
      question: "What contains harpic?",
      ans: "Among the many active ingredients surface and floor cleaners contain, the most common ones are Ethanol a fluid that acts as sanitizer; Isopropyl alcohol which is partly responsible for the disinfectant s strong odour; antiseptics such asp-Chloro-o-benzylphenol, o-Phenylphenol, and lactic acid.",
      panel: "panel4",
    },
    {
      id: 5,
      question: "What are the ingredients of domex?",
      ans: "Among the many active ingredients surface and floor cleaners contain, the most common ones are Ethanol a fluid that acts as sanitizer; Isopropyl alcohol which is partly responsible for the disinfectant s strong odour; antiseptics such asp-Chloro-o-benzylphenol, o-Phenylphenol, and lactic acid.",
      panel: "panel5",
    },
  ];

  return (
    <Box className={WorkStyle.workRight}>
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ textAlign: "left", color: "#154784" }}
        >
          Ensuring cleaning and hygiene standards
        </Typography>
      </Box>
      {workItem.map((workItem) => (
        <Accordion
          expanded={expanded === workItem.panel}
          onChange={handleChange(workItem.panel)}
          sx={{ mb: 1 }}
          key={workItem.id}
        >
          <AccordionSummary
            expandIcon={
              expanded === workItem.panel ? (
                <MinimizeIcon sx={{ color: "green" }} />
              ) : (
                <AddIcon sx={{ color: "green" }} />
              )
            }
            aria-controls={workItem.panel + "bh-content"}
            id={workItem.panel + "bh-header"}
          >
            <Typography variant="body" gutterBottom component="div">
              {workItem.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "justify" }}>
            <Typography>{workItem.ans}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default WorkProcessBottomLeft;
