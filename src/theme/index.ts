import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import {
  orange,
  indigo,
  teal,
  deepPurple,
  blueGrey,
  amber,
  green,
} from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lato',
    fontSize: 16,
    h1: {
      fontSize: '2.0rem',
    },
    h2: {
      fontSize: '1.83rem',
    },
    h3: {
      fontSize: '1.73rem',
    },
    h4: {
      fontSize: '1.50rem',
    },
    h5: {
      fontSize: '1.43rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.3rem',
      fontWeight: 600,
    },
    body1: {
      // Large
      fontSize: '1rem',
    },
    body2: {
      // normal
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '0.66rem',
    },
    caption: {
      // small
      fontSize: '.55rem',
    },
    button: {
      textTransform: 'none',
      fontSize: '0.8rem',
      fontWeight: 600,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: teal,
  },
});

export default theme;
