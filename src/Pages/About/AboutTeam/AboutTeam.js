import React from "react";
import AboutCustomImport from "../AboutCustomImport/AboutCustomImport";
import AboutTeamItem from "./AboutTeamItem";
import AboutTeamTitle from "./AboutTeamTitle";

const AboutTeam = () => {
  const { Box, Container, Grid } = AboutCustomImport();

  const aboutTeamItemObj = [
    {
      id: 1,
      title: "Timo Verner",
      subTitle: "Custodian",
      logoImg: "https://i.ibb.co/5Gn4yt3/team-1.jpg",
      description:
        "A team normally consists of Team leader, Facilitator, Recorder, Timekeeper and Members. Each and every member have their own responsibilities. They play their role for the welfare of the team. Some of the roles and responsibilities of team members are briefly explained below.",
    },
    {
      id: 2,
      title: "Mas Karyo",
      subTitle: "Caretaker",
      logoImg: "https://i.ibb.co/NFJ2H7Y/team-2.jpg",
      description:
        "A team normally consists of Team leader, Facilitator, Recorder, Timekeeper and Members. Each and every member have their own responsibilities. They play their role for the welfare of the team. Some of the roles and responsibilities of team members are briefly explained below.",
    },
    {
      id: 3,
      title: "Sam Gamgee",
      subTitle: "Supervisor",
      logoImg: "https://i.ibb.co/51H3vh3/team-3.jpg",
      description:
        "A team normally consists of Team leader, Facilitator, Recorder, Timekeeper and Members. Each and every member have their own responsibilities. They play their role for the welfare of the team. Some of the roles and responsibilities of team members are briefly explained below.",
    },
    {
      id: 4,
      title: "Magnus Aachen",
      subTitle: "Groundskeeper",
      logoImg: "https://i.ibb.co/ZJv64ys/team-4.jpg",
      description:
        "A team normally consists of Team leader, Facilitator, Recorder, Timekeeper and Members. Each and every member have their own responsibilities. They play their role for the welfare of the team. Some of the roles and responsibilities of team members are briefly explained below.",
    },
    {
      id: 5,
      title: "Jose Malaga",
      subTitle: "Manager",
      logoImg: "https://i.ibb.co/L91DG65/team-5.jpg",
      description:
        "A team normally consists of Team leader, Facilitator, Recorder, Timekeeper and Members. Each and every member have their own responsibilities. They play their role for the welfare of the team. Some of the roles and responsibilities of team members are briefly explained below.",
    },
    {
      id: 6,
      title: "Jack Brauer",
      subTitle: "Maintenance Person",
      logoImg: "https://i.ibb.co/4V7b92k/team-6.jpg",
      description:
        "A team normally consists of Team leader, Facilitator, Recorder, Timekeeper and Members. Each and every member have their own responsibilities. They play their role for the welfare of the team. Some of the roles and responsibilities of team members are briefly explained below.",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#F6F6F6", mt: -4 }}>
      <Container sx={{ pt: 10, pb: 5 }}>
        <Box>
          <AboutTeamTitle></AboutTeamTitle>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {aboutTeamItemObj.map((aboutTeamItem) => (
              <AboutTeamItem
                aboutTeamItem={aboutTeamItem}
                key={aboutTeamItem.id}
              ></AboutTeamItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default AboutTeam;
