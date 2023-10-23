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
    h2: {
      fontSize: '24px',
      fontWeight: 500,
      color: '#000',
      textTransform: 'capitalize',
      lineHeight: '32px'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#797981',
      lineHeight: '20px'
    }
  }
});
