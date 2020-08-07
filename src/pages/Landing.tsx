import React from 'react';
import { Grid, Button, Box, Divider } from "@material-ui/core";
import Summary from '../components/Summary';
import Header from '../components/Header';
import summaryData from '../data/SummaryData';
import headerData from '../data/HeaderData';

const Landing = () => {
  console.log(summaryData);
  return (
    <Box px={2} py={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header {...headerData}></Header>
        </Grid>
        <Grid item xs={12}>
          <Divider/>
        </Grid>
        <Grid item xs={12}>
          <Summary {...summaryData}></Summary>
        </Grid>
        <Grid item xs={12}>
          <Divider/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
