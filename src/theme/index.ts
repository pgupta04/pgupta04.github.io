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
  palette: {
    primary: teal,
  },
});

export default theme;
