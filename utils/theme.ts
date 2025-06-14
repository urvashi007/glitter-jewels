import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Manrope, Jost, sans-serif",
    h1: { color: "#222222" },
    h2: {
      color: "#222222",
      fontSize: "40px",
      [`@media (max-width:600px)`]: {
        fontSize: "25px",maxWidth:'200px'
      },
    },
    h3: {
      color: "#ffffff",
      fontSize: "40px",
      fontWeight: "600",
      [`@media (max-width:600px)`]: {
        fontSize: "25px",
      },
    },
    h4: { color: "#222222" },
    h5: { color: "#222222" },
  },
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#404040",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: "#404040",
          fontSize: "14px",
        },
        icon: {
          right: "10px",
          top: "calc(45% - 0.5em)",
          width: "19px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          color: "#404040",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#404040",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#445B9C",
          height: "48px",
          fontSize: "16px",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#445B9C",
          },
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: "500",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (max-width:768px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        },
      },
    },
  },
});

export default theme;
