import { createTheme } from "@mui/material";

export const projectTheme = createTheme({
  palette: {
    primary: {
      main: "#1D6BF3",
      // light: '',
      // dark: '',
      contrastText: "white",
    },
    secondary: {
      main: "#5A9BFF",
      // light: '',
      // dark: '',
      contrastText: "white",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: { root: { borderRadius: 0 }, list: { padding: 0 } },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          borderColor: "#1D6BF3",
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: "YS Text, Arial, sans-serif",
      fontSize: "34px",
      fontWeight: 400,
      color: "#1A1B22",
      lineHeight: "40px",
    },
    h2: {
      fontFamily: "YS Text, Arial, sans-serif",
      fontSize: "24px",
      fontWeight: 500,
      color: "#1A1B22",
      lineHeight: "32px",
    },
    h3: {
      fontFamily: "YS Text, Arial, sans-serif",
      fontSize: "20px",
      fontWeight: 400,
      color: "#1A1B22",
      lineHeight: "24px",
    },
    // Не работает 500?
    h4: {
      fontFamily: "YS Text, Arial, sans-serif",
      fontSize: "14px",
      fontWeight: 700,
      color: "#1A1B22",
      lineHeight: "20px",
    },
    body1: {
      fontFamily: "YS Text, Arial, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      color: "#1A1B22",
      lineHeight: "20px",
    },
    body2: {
      fontFamily: "YS Text, Arial, sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      color: "#797981",
      lineHeight: "20px",
    },
    button: {
      fontFamily: "YS Text, Arial, sans-serif",
      textTransform: "capitalize",
      fontSize: "16px",
      fontWeight: 500,
      color: "#FF",
      lineHeight: "20px",
    },
    // Не было нигде?
    subtitle1: {
      fontFamily: "YS Text, Arial, sans-serif",
      fonеSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
    },
    caption: {
      fontFamily: "YS Text, Arial, sans-serif",
      fontSize: "13px",
      fontStyle: "normal",
      lineHeight: "16px",
    },
  },
});
