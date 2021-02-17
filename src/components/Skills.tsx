import React from "react";
import { Grid, Typography, Chip, Paper, Box } from "@material-ui/core";
import { ISkillsProps } from "../types/pages";

const Skills = (props: ISkillsProps) => {
  return (
    <Paper square elevation={5}>
      <Box padding={2}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Skills
            </Typography>
          </Grid>
        </Grid>
        {props?.skillGroup?.map((item,index) => {
          return (
            <Box py={1}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1">{item.type}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    {item?.skills?.map((item) => (
                      <Grid item>
                        <Chip label={item} size="small" color={index%2==0?'primary':'secondary'} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};

export default Skills;
