import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { blue, pink, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: pink[500],
      },
      error: {
        main: red.A400,
      },
    },
  })
);

export default theme;
