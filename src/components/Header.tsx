import React from "react";
import { IHeaderProps } from "../types/pages";
import { Grid, Button, Box, Paper, Typography } from "@material-ui/core";

const Header = (props: IHeaderProps) => {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={12} sm={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h3">{props.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                {props?.designation}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body1"> {props.phone}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                {props.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                {props.linkedInURL}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                {props.githubURL}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
