import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Jost, Manrope, sans-serif',
    h1: { color: '#222222' },
    h2: { color: '#ffffff' },
    h3: { color: '#222222' },
    h4: { color: '#222222' },
    h5: { color: '#222222' },

  },
  palette: {
    primary: {
      main: '#222222',
    },
    secondary: {
      main: '#404040',
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
          color: '#404040',
        },
        icon: {
          right: '10px',
          top: 'calc(45% - 0.5em)',
          width: '19px',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          color: '#404040',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#404040',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#445B9C',
          height: '48px',
          fontSize: '16px',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#445B9C',
          },
        },
      },
    },
  },
});

export default theme;
