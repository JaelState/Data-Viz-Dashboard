// src/theme.js
import { createTheme } from '@mui/material/styles';
import { purple, pink, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: pink[300],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: '#ffffff',
      secondary: grey[400],
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: purple[300],
    },
    body1: {
      fontSize: '1rem',
      color: grey[300],
    },
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: grey[900],
          color: grey[300],
          margin: 0,
          padding: 0,
          fontFamily: 'Roboto, sans-serif',
        },
      },
    },
  },
});

export default theme;
