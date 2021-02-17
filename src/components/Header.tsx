import React from "react";
import { IHeaderProps } from "../types/pages";
import { Grid, Button, Box, Paper, Typography, Link } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Avatar from "@material-ui/core/Avatar";
import Photo from "../assets/Parveen.jpg";

const Header = (props: IHeaderProps) => {
  return (
    <Paper square elevation={5}>
      <Box padding={2}>
        <Grid container spacing={0} justify="space-between">
          <Grid item xs={12} sm={8}>
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} md={4}>
                <Avatar
                  alt="Parveen Gupta"
                  src={Photo}
                  style={{ height: "150px", width: "150px" }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Typography variant="h3" color="primary">
                      {props.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="overline">
                      {props?.designation}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <PhoneAndroidIcon color="primary" />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1"> {props.phone}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <EmailIcon color="primary" />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1">{props.email}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <GitHubIcon color="primary" />
                  </Grid>
                  <Grid item xs={11}>
                    <Link
                      target="_blank"
                      variant="body2"
                      href={props?.githubURL}
                      color="inherit"
                    >
                      <Typography variant="body1">
                        {props?.githubURL}
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <LinkedInIcon color="primary" />
                  </Grid>
                  <Grid item xs={11}>
                    <Link
                      target="_blank"
                      variant="body2"
                      href={props?.linkedInURL}
                      color="inherit"
                      rel="noopener noreferrer"
                    >
                      <Typography variant="body1">
                        {props?.linkedInURL}
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Header;
