import React from "react";
import { Grid, Button, Box, Divider } from "@material-ui/core";
import Summary from "../components/Summary";
import Header from "../components/Header";
import summaryData from "../data/SummaryData";
import headerData from "../data/HeaderData";
import Skills from "../components/Skills";
import skilldData from "../data/SkillsData";
import WorkExperience from "../components/WorkExperience";
import workExpData from "../data/WorkExpData";
import pastWorkExpData from "../data/PastWorkExpData";
import personnalWorkData from "../data/PersonnalWorkData";

const Landing = () => {
  return (
    <Box px={2} py={2} bgcolor="white">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header {...headerData}></Header>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Summary {...summaryData}></Summary>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Skills skillGroup={skilldData}></Skills>
        </Grid>

        <Grid item xs={12} sm={6}>
          <WorkExperience
            label="Current Work Experience"
            workExperiences={workExpData}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <WorkExperience
            label="Personnal Projects"
            workExperiences={personnalWorkData}
          />
        </Grid>
        <Grid item xs={12}>
          <WorkExperience
            label="Past Work Experience"
            workExperiences={pastWorkExpData}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
