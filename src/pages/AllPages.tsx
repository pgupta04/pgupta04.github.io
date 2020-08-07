import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import theme from "../theme";
import { HOME_PAGE, ROOT } from "../common/Constants";
import Landing from '../pages/Landing';

const AllPages = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={ROOT}>
      <Route path={ROOT} component={Landing} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AllPages;
