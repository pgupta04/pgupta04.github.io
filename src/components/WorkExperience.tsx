import React from 'react';
import {IWorkExperienceProps} from '../types/pages';
import {Paper, Box, Grid, Typography} from '@material-ui/core';

const WorkExperience = (props:IWorkExperienceProps) => {

  return (
    <Paper square elevation={0}>
      <Box padding={2}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Work Experience
            </Typography>
          </Grid>

        </Grid>
      </Box>
    </Paper>
  );
};

export default WorkExperience;