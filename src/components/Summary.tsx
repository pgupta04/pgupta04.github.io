import React from "react";
import {
  Grid,
  Button,
  Box,
  Paper,
  Typography,
  ListItemIcon,
} from "@material-ui/core";
import { ISummaryProps } from "../types/pages";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LabelIcon from "@material-ui/icons/Label";

const Summary = (props: ISummaryProps) => (
  <Paper square elevation={0}>
    <Box padding={2}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">
            Summary
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            {props?.bullets?.map((item) => (
              <ListItem>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">{item}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  </Paper>
);

export default Summary;
