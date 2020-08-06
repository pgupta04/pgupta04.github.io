import React from 'react';
import { Grid, Button, Box, Paper } from "@material-ui/core";
import {ISummaryProps} from '../types/pages';

const Summary = (props: ISummaryProps) => (
  <Paper>
    {props?.detail}
  </Paper>  
);

export default Summary;