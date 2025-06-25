// components/HeroBanner.styles.ts
import { customVars } from "@/utils/theme";
import { Theme } from "@mui/material";

export const rootStyle = (theme: Theme, backgroundImage: string) => ({
  position: "relative",
  width: "100%",
  height: "800px",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  paddingBottom: "60px",
  textAlign: "center",
  overflow: "hidden",
  fontFamily: "var(--font-family-primary)",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  [theme.breakpoints.down("sm")]: {
    height: "700px",
    padding: "0 20px 50px",
  },
});

export const titleStyle = (theme: Theme) => ({
  fontSize: theme.typography.h1.fontSize,
  marginBottom: 2,
  textShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
  [theme.breakpoints.down("sm")]: {
    fontSize: customVars.fontSizes.font32,
    lineHeight: "45px",
  },
});

export const subtitleStyle = (theme: Theme) => ({
  textShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
  width: "700px",
  margin: "0 auto 32px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
});
