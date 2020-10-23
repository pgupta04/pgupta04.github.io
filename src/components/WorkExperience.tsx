import React from "react";
import { IWorkExperienceProps } from "../types/pages";
import { IWorkExperience } from "../types/data";
import { Paper, Box, Grid, Typography, ListItemIcon } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LabelIcon from "@material-ui/icons/Label";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";

const WorkExperience = (props: IWorkExperienceProps) => {
  return (
    <Paper square elevation={0}>
      <Box padding={2}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Current Work Experience
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <List>
              {props?.workExperiences?.map((item: IWorkExperience) => (
                <ListItem>
                  <Paper square elevation={0}>
                    <Box padding={2}>
                    <Typography variant="h6" color="textSecondary">
                      {item?.company} | {item?.startDate}-{item?.endDate}
                    </Typography>
                    <List>
                      {item?.responsibilities?.map((task: string) => (
                        <ListItem>
                          <ListItemIcon>
                            <LabelImportantTwoToneIcon color="primary" />
                          </ListItemIcon>
                          {/* <LabelIcon>
                        </LabelIcon> */}
                          <Typography variant="body1" color="textSecondary">
                            {task}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                    </Box>
                  </Paper>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default WorkExperience;
