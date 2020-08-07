
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { orange, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
  },
});

export default theme;