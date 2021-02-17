import React from "react";
import {
  Grid,
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
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";

const Summary = (props: ISummaryProps) => (
  <Paper square elevation={5}>
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
                <LabelImportantTwoToneIcon color="primary" />
                  {/* <LabelIcon /> */}
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2" color="textSecondary">{item}</Typography>}
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
