import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#ededed',
    },
    secondary: {
      main: '#2ca2c8',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fefefe',
      paper: '#ededed',
    },
    text: {
      primary: '#545454',
    },
  },
});

theme = responsiveFontSizes(theme, { factor: 15 });

export default theme;
