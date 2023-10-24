import { createTheme } from '@mui/material';

export const projectTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '16px',
          textTransform: 'capitalize',
          borderRadius: '6px',
          padding: '18px 0',
          height: '56px',
          '&.MuiButton-contained': {
            backgroundColor: '#5A9BFF',
            '&:hover': {
              backgroundColor: '#006db3'
            }
          },
          '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }
        }
      }
    }
  },
  typography: {
    h1: {
      fontSize: '34px',
      fontWeight: 400,
      color: '#1A1B22',
      lineHeight: '40px'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 500,
      color: '#1A1B22',
      lineHeight: '32px'
    },
    h3: {
      fontSize: '20px',
      fontWeight: 400,
      color: '#1A1B22',
      lineHeight: '24px'
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#1A1B22',
      lineHeight: '20px'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#797981',
      lineHeight: '20px'
    },
    button: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#FF',
      lineHeight: '20px'
    }
  }
});
