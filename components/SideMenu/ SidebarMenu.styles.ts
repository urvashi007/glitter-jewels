"use client";

import { customVars } from "@/utils/theme";
import { SxProps, Theme } from "@mui/material";

const sidebarStyles = {
  root: (theme: Theme): SxProps<Theme> => ({
    backgroundColor: theme.palette.common.white,
    p: 2,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    borderRadius: 1,
  }),

  profileSection: (theme: Theme): SxProps<Theme> => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    pb: 2,
    mb: 2,
  }),

  avatar: {
    width: 60,
    height: 60,
    bgcolor: "#ECEFF5",
    color: "#445B9C",
    fontWeight: 600,
  },

  helloText: {
    fontWeight: 500,
    fontSize: customVars.fontSizes.base,
    color: customVars.colors.dark,
  },

  nameText: {
    fontWeight: 700,
    fontSize: 18,
    color: customVars.colors.dark,
  },

  menuContainer: (theme: Theme, isMobile: boolean): SxProps<Theme> => ({
    display: "flex",
    flexDirection: isMobile ? "row" : "column",
    overflow: isMobile ? "auto" : "visible",
    gap: isMobile ? 1 : 0,
    ...(isMobile && {
      borderBottom: `1px solid ${theme.palette.divider}`,
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    }),
  }),

  menuItem: (isActive: boolean, isMobile: boolean): SxProps<Theme> => ({
    display: "flex",
    alignItems: "center",
    px: 2,
    py: isMobile ? 1 : 1.5,
    cursor: "pointer",
    backgroundColor: isActive ? "#E5E9F5" : "transparent",
    borderLeft: !isMobile
      ? `2px solid ${isActive ? "#445B9C" : "transparent"}`
      : "none",
    borderBottom: isMobile
      ? `2px solid ${isActive ? "#445B9C" : "transparent"}`
      : "none",
    transition: "all 0.3s ease",
    transform: isActive && !isMobile ? "translateX(2px)" : "none",
    "&:hover": {
      backgroundColor: "#f0f0f0",
      transform: !isMobile ? "translateX(2px)" : "none",
    },
    color: isActive ? customVars.colors.accent : customVars.colors.dark,
    // color: isActive ? "#445B9C" : "#333",
    whiteSpace: "nowrap",
  }),

  menuText: {
    fontWeight: 500,
    fontSize: customVars.fontSizes.base,
  },
};

export default sidebarStyles;
