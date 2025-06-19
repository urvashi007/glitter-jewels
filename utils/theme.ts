/* eslint-disable @typescript-eslint/no-require-imports */
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Manrope, Jost, sans-serif",
    h1: { color: "#222222" },
    h2: {
      color: "#222222",
      fontSize: "40px",
      [`@media (max-width:600px)`]: {
        fontSize: "25px",
        maxWidth: "200px",
      },
    },
    h3: {
      color: "#ffffff",
      fontSize: "40px",
      fontWeight: 600,
      [`@media (max-width:600px)`]: {
        fontSize: "25px",
      },
    },
    h4: { color: "#222222" },
    h5: { color: "#222222" },
  },
  palette: {
    text: {
      primary: "#222222",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          '&:not(.MuiInputBase-multiline)': {
        height: '48px',
      },
         
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #a6a6a6',
           
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #445B9C',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #445B9C',
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          disablePortal: true,
          PaperProps: {
            sx: { mt: 1 },
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        },
        IconComponent: require("lucide-react").ChevronDown,
      },
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
        root:{
          height: "48px",
        }
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
        root: {
          borderRadius: 0,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            
          },
        },
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
          fontWeight: 500,
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
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#445B9C",
          },
        },
      },
    },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: '#445B9C',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: '#5E5E5E', 
            fontWeight: 500,
            '&.Mui-selected': {
              color: '#445B9C',
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            margin: 0,
          },
        },
      },
  },
});

export default theme;
