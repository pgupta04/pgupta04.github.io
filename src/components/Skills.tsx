import React from "react";
import { Grid, Typography, Chip, Paper, Box } from "@material-ui/core";
import { ISkillsProps } from "../types/pages";

const Skills = (props: ISkillsProps) => {
  return (
    <Paper square elevation={0}>
      <Box padding={2}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Skills
            </Typography>
          </Grid>
          {props?.skillGroup?.map((item) => {
            return (
              <>
                <Grid item xs={12}>
                  <Typography variant="body1">{item.type}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    {item?.skills?.map((item) => (
                      <Grid item>
                        <Chip label={item} size="small" />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Skills;
