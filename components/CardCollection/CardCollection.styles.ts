import { customVars } from "@/utils/theme";
import type { SxProps, Theme } from "@mui/material";

export const styles = {
  wrapper: {
    background: customVars.background.whitebg,
  } as SxProps<Theme>,

  headerBox: {
    display: "flex",
    justifyContent: "space-between",
    mb: 4,
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    gap: { xs: 2, sm: 0 },
  } as SxProps<Theme>,

  title: {
    fontSize: {
      xs: customVars.fontSizes.lg,
      sm: customVars.fontSizes.xl,
    },
  } as SxProps<Theme>,

  sortSelect: {
    fontSize: customVars.fontSizes.sm,
    fontWeight: 500,
    fontFamily: customVars.fontFamily.primary,
    ".MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${customVars.colors.dark}`,
    },
  } as SxProps<Theme>,

  card: {
    p: 2,
    backgroundColor: customVars.background.bgf7f7f7,
    borderRadius: 0,
    position: "relative",
    overflow: "visible",
  } as SxProps<Theme>,

  badge: {
    fontSize: customVars.fontSizes.xxs,
    background: customVars.background.whitebg,
    fontFamily: customVars.fontFamily.primary,
    px: 1,
    py: 0.5,
    borderRadius: 0.5,
    fontWeight: 600,
  } as SxProps<Theme>,

  image: {
    width: "100%",
    height: 240,
    objectFit: "contain",
    mb: 2,
  } as SxProps<Theme>,

  iconBtn: {
    background: customVars.background.whitebg,
    width: 36,
    height: 36,
    borderRadius: 0,
    "&:hover": {
      background: customVars.background.whitebg,
    },
  } as SxProps<Theme>,

  iconBtnAccent: {
    background: customVars.background.bgaccent,
    color: customVars.colors.white,
    width: 36,
    height: 36,
    borderRadius: 0,
    "&:hover": {
      background: customVars.background.bgaccent,
    },
  } as SxProps<Theme>,

  cardContent: {
    px: 0,
    pt: 1,
  } as SxProps<Theme>,

  cardText: {
    fontSize: customVars.fontSizes.md,
    fontWeight: 500,
    color: customVars.colors.dark,
  } as SxProps<Theme>,

  cardPrice: {
    fontWeight: 700,
  } as SxProps<Theme>,
};

export const hoverIconsSx: SxProps<Theme> = {
  position: "absolute",
  bottom: 16,
  right: 16,
  display: "flex",
  flexDirection: "column",
  gap: 1,
  opacity: 0,
  transform: "translateY(10px)",
  transition: "all 0.3s ease",
};

export const chevronIconStyle = (open: boolean): React.CSSProperties => ({
  color: customVars.colors.dark,
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.3s ease",
  position: "absolute",
  right: "8px",
  fontWeight: "400",
  width: "18px",
});
