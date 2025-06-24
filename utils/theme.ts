import { createTheme } from "@mui/material/styles";
import type { CSSObject, ThemeOptions } from "@mui/system";

// ✅ Custom variables
const customVars = {
  fontSizes: {
    xxs: "12px",
    xs: "13px",
    sm: "14px",
    base: "16px",
    md: "18px",
    lg: "24px",
    xl: "40px",
    xxl: "48px",
    font32: "32px",
  },
  lineHeights: {
    md: "45px",
  },
  colors: {
    black: "#000000",
    dark: "#222222",
    white: "#ffffff",
    accent: "#445B9C",
    gray: "#DFDFDF",
    overlayDark: "rgba(0, 0, 0, 0.4)",
    whiteRgba: "rgba(255, 255, 255, 0.1)",
    color5e5e5e: "#5e5e5e",
    colore2e2e2: "#E2E2E2",
    color404040: "#404040",
    color33333: "#333333",
  },
  background: {
    whitebg: "#ffffff",
    darkbg: "#222222",
    bluex: "#F9FAFF",
    bgaccent: "#445B9C",
    bgf7f7f7: "#F7F7F7",
    bgdfdfdf: "#dfdfdf",
  },
  fontFamily: {
    primary: "'Manrope', sans-serif",
    secondary: "'Jost', sans-serif",
  },
  hero: {
    heightDesktop: "800px",
    heightMobile: "500px",
    paddingDesktop: "60px",
    paddingMobile: "50px",
    overlayColor: "rgba(0, 0, 0, 0.4)",
    textColor: "#ffffff",
  },
  border: {
    Border445B9C: "#445B9C",
    Bordera6a6a6: "#a6a6a6",
  },
};

// ✅ Custom mixins
const customMixins = {
  slideIn: {
    animation: "slideIn 0.4s ease",
    "@keyframes slideIn": {
      from: { transform: "translateX(-100%)", opacity: 0 },
      to: { transform: "translateX(0)", opacity: 1 },
    },
  } as CSSObject,
  centerLogo: {
    width: 100,
    objectFit: "contain",
    transition: "0.3s ease",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "8px",
  } as CSSObject,
  submenuHover: {
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0)",
  } as CSSObject,
  submenuItem: {
    position: "absolute",
    top: "100%",
    left: 0,
    minWidth: 250,
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(10px)",
    transition: "all 0.3s ease",
    zIndex: 2000,
    paddingTop: '24px',
  } as CSSObject,
  submenuTypography: {
    display: "block",
    padding: "8px 16px",
    fontSize: customVars.fontSizes.sm,
    color: customVars.colors.dark,
    backgroundColor: customVars.background.whitebg,
    textDecoration: "none",
    "&:hover": {
      color: customVars.colors.accent,
    },
  } as CSSObject,
  headerNavItem: (color: string): CSSObject => ({
    fontWeight: 500,
    cursor: "pointer",
    color,
    fontSize: customVars.fontSizes.base,
    fontFamily: customVars.fontFamily.secondary,
    textTransform: "uppercase",
    padding: "4px 12px",
  }),
};

// ✅ Create theme
const theme = createTheme({
  typography: {
    fontFamily: customVars.fontFamily.primary,
    h1: {
      fontSize: customVars.fontSizes.xxl,
      fontWeight: 600,
    },
    h2: {
      fontSize: customVars.fontSizes.xl,
      fontWeight: 600,
    },
    h3: {
      fontSize: customVars.fontSizes.lg,
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
      fontSize: customVars.fontSizes.xl,
      color: customVars.colors.white,
      fontFamily: customVars.fontFamily.primary,
    },
    h6: {
      fontSize: customVars.fontSizes.md,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: customVars.fontSizes.md,
      color: customVars.colors.white,
      fontFamily: customVars.fontFamily.secondary,
    },
    body1: {
      fontSize: customVars.fontSizes.base,
    },
    body2: {
      color: customVars.colors.white,
      fontFamily: customVars.fontFamily.secondary,
      fontSize: customVars.fontSizes.base,
    },
  },
  mixins: customMixins as unknown as ThemeOptions["mixins"],
  palette: {
    primary: {
      main: customVars.colors.accent,
    },
    text: {
      primary: customVars.colors.dark,
      secondary: customVars.colors.black,
    },
    common: {
      white: customVars.colors.white,
    },
    background: {
      default: customVars.colors.white,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "formLabel" },
          style: {
            fontFamily: customVars.fontFamily.secondary,
            fontSize: customVars.fontSizes.sm,
            color: customVars.colors.dark,
            fontWeight: 500,
            marginBottom: 8,
            textTransform: "capitalize",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: customVars.fontSizes.md,
          color: customVars.colors.accent,
          display: "inline-flex",
          alignItems: "center",
          fontFamily: customVars.fontFamily.secondary,
          fontWeight: 500,
          textDecoration: "none",
          transition: "all 0.3s ease",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: customVars.fontFamily.secondary,
          border: customVars.border.Bordera6a6a6,
          fontWeight: 400,
          color: customVars.colors.color5e5e5e,
          "&:not(.MuiInputBase-multiline)": {
            height: "48px",
          },
        },
        input: {
          fontFamily: customVars.fontFamily.secondary,
          textTransform: "capitalize",
          "&::placeholder": {
            color: customVars.colors.color5e5e5e,
            fontWeight: 400,
            fontSize: customVars.fontSizes.base,
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          marginBottom: "8px",
          fontFamily: customVars.fontFamily.secondary,
          fontSize: customVars.fontSizes.sm,
          color: customVars.colors.dark,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: "48px",
          fontFamily: customVars.fontFamily.secondary,
          fontSize: customVars.fontSizes.sm,
          color: customVars.colors.dark,
          "& .MuiSelect-select": {
            padding: "10px 40px 10px 12px",
            textTransform: "capitalize",
          },
          "& fieldset": {
            borderColor: customVars.colors.colore2e2e2,
          },
          "& .MuiSelect-icon": {
            color: customVars.colors.color5e5e5e,
            right: "10px",
            top: "calc(50% - 0.5em)",
            width: "20px",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderTop: `1px solid ${customVars.colors.gray}`,
          borderBottom: `1px solid ${customVars.colors.gray}`,
          marginBottom: 24,
          padding: 0,
          minHeight: "unset",
          "& .MuiButtonBase-root": {
            margin: 0,
            padding: 0,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: customVars.fontFamily.secondary,
          fontWeight: 500,
        },
        outlined: {
          color: customVars.colors.white,
          borderColor: customVars.colors.white,
          fontSize: customVars.fontSizes.base,
          padding: "12px 28px",
          borderRadius: "0",
          "&:hover": {
            backgroundColor: customVars.colors.whiteRgba,
          },
        },
        contained: {
          color: customVars.colors.white,
          fontSize: customVars.fontSizes.base,
          padding: "12px 28px",
          borderRadius: "0",
          height: "48px",
        },
      },
    },
  },
});

export { customVars };
export default theme;


declare module "@mui/material/styles" {
  interface TypographyVariants {
    formLabel: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    formLabel?: React.CSSProperties;
  }

  interface Mixins {
    slideIn: CSSObject;
    centerLogo: CSSObject;
    submenuHover: CSSObject;
    submenuItem: CSSObject;
    submenuTypography: CSSObject;
    headerNavItem: (color: string) => CSSObject;
  }

  interface MixinsOptions {
    slideIn?: CSSObject;
    centerLogo?: CSSObject;
    submenuHover?: CSSObject;
    submenuItem?: CSSObject;
    submenuTypography?: CSSObject;
    headerNavItem?: (color: string) => CSSObject;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    formLabel: true;
  }
}
