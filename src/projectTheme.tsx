import { createTheme } from '@mui/material';

export const projectTheme = createTheme({
  palette: {
    primary: {
      main: '#1D6BF3',
      // light: '',
      // dark: '',
      contrastText: 'white',
    },
    secondary: {
      main: '#5A9BFF',
      // light: '',
      // dark: '',
      contrastText: 'white',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '34px',
      fontWeight: 400,
      color: '#1A1B22',
      lineHeight: '40px',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 500,
      color: '#1A1B22',
      lineHeight: '32px',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 400,
      color: '#1A1B22',
      lineHeight: '24px',
    },
    // Не работает 500?
    h4: {
      fontSize: '14px',
      fontWeight: 700,
      color: '#1A1B22',
      lineHeight: '20px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#1A1B22',
      lineHeight: '20px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#797981',
      lineHeight: '20px',
    },
    button: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#FF',
      lineHeight: '20px',
    },
  },
});
