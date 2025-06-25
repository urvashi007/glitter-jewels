// UploadImage.style.ts
import { SxProps, Theme } from "@mui/material";

export const wrapperBoxStyle: SxProps<Theme> = {
  cursor: (theme) => theme.palette.mode === "dark" ? "pointer" : "pointer", // dynamic if needed
  flexShrink: 0,
  width: 526,
  height: 526,
  border: (theme) => `1px dashed ${theme.palette.divider}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: (theme) => theme.palette.text.primary,
  fontSize: (theme) => theme.typography.body2.fontSize,
  mx: "auto",
  overflow: "hidden",
  position: "relative",
  marginTop: "30px",
  "@media (max-width:900px)": {
    width: "100%",
    height: "300px",
  },
};

export const removeButtonStyle: SxProps<Theme> = {
  position: "absolute",
  top: 8,
  right: 8,
  backgroundColor: (theme) => theme.palette.common.white,
  "&:hover": {
    backgroundColor: (theme) => theme.palette.grey[200],
  },
};

export const headingStyle: SxProps<Theme> = {
  lineHeight: "0",
};
