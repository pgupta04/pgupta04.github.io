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
import personnalWorkData from "../data/PersonnalWorkData";

const Landing = () => {
  console.log(summaryData);
  return (
    <Box px={2} py={2} bgcolor="white">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header {...headerData}></Header>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={8}>
              <Summary {...summaryData}></Summary>
            </Grid>
            <Grid item>
              <Divider orientation="vertical"/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Skills skillGroup={skilldData}></Skills>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <WorkExperience label="Current Work Experience" workExperiences={workExpData}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <WorkExperience label="Personnal Projects" workExperiences={personnalWorkData}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
