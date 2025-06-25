// OrderStatusCard.style.ts
import { customVars } from "@/utils/theme";
import { SxProps, Theme } from "@mui/material";

export const cardContainer: SxProps<Theme> = {
  backgroundColor: customVars.background.whitebg,
  padding: "20px",
  border: '1px solid #ebebeb',
  marginBottom:'20px'
};

export const statusBadge = (bg: string, color: string): SxProps<Theme> => ({
  backgroundColor: bg,
  color,
  fontFamily: customVars.fontFamily.secondary,
  fontSize: "12px",
  fontWeight: 500,
  padding: "2px 6px",
  display: "inline-block",
  marginBottom: "8px",
});

export const orderText: SxProps<Theme> = {
  color: "#5e5e5e",
   fontFamily: customVars.fontFamily.secondary,
  marginTop: "8px",
};

export const textHighlight: SxProps<Theme> = {
  color: customVars.colors.dark,
  fontWeight: 500,
};

export const amountText: SxProps<Theme> = {
  color: customVars.colors.dark,
  fontSize: "20px",
  fontWeight: 600,
  marginTop: 1,
};

export const iconButton: SxProps<Theme> = {
  color: customVars.colors.color404040,
};
