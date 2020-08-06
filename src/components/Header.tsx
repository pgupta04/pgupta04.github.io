import React from 'react';
import { IHeaderProps } from '../types/pages';
import { Grid, Button, Box, Paper } from "@material-ui/core";

const Header = (props: IHeaderProps) => {

    return (
      <Paper>
        {props.name}
      </Paper>      
    );
}

export default Header;