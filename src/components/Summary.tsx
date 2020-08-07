import React from 'react';
import { Grid, Button, Box, Paper, Typography } from "@material-ui/core";
import {ISummaryProps} from '../types/pages';

const Summary = (props: ISummaryProps) => (
  <Paper>
    <Grid container>
      <Grid item>
        <Typography variant="h5" color="primary">
          Summary
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
        {props?.detail}
        </Typography>
      </Grid>
    </Grid>
  </Paper>  
);

export default Summary;