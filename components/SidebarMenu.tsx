"use client";

import { Avatar, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

type MenuItem = {
  label: string;
  icon: React.ElementType;
  tab: string;
};

type SidebarProps = {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
  menuItems?: MenuItem[];
};

const defaultMenu: MenuItem[] = [
  { label: "My Orders", icon: () => null, tab: "orders" },
  { label: "Edit Profile", icon: () => null, tab: "profile" },
  { label: "My Wishlist", icon: () => null, tab: "wishlist" },
  { label: "Manage Addresses", icon: () => null, tab: "addresses" },
  { label: "Change Password", icon: () => null, tab: "password" },
];

export default function SidebarMenu({
  selectedTab,
  onSelectTab,
  menuItems,
}: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = menuItems || defaultMenu;

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        background: "#fff",
        padding: "15px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Profile section (only show on desktop) */}
      {!isMobile && (
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            borderBottom: "1px solid #e2e2e2",
            paddingBottom: "15px",
            marginBottom: "15px",
          }}
        >
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgcolor: "#ECEFF5",
              color: "#445B9C",
              fontWeight: "600",
            }}
          >
            AS
          </Avatar>
          <Box>
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{ fontSize: "14px", color: "#666" }}
            >
              Hello,
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ fontSize: "18px", color: "#222" }}
            >
              Ashish Sharma
            </Typography>
          </Box>
        </Stack>
      )}

      {/* Menu items */}
      <Box
        display="flex"
        flexDirection={isMobile ? "row" : "column"}
        overflow={isMobile ? "auto" : "visible"}
        gap={isMobile ? 1 : 0}
      >
        {items.map((item) => {
          const isActive = selectedTab === item.tab;
          const Icon = item.icon;

          return (
            <Box
              key={item.tab}
              onClick={() => onSelectTab(item.tab)}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: isMobile ? 1 : 1.5,
                cursor: "pointer",
                backgroundColor: isActive ? "#E5E9F5" : "transparent",
                borderLeft: !isMobile
                  ? isActive
                    ? "2px solid #445B9C"
                    : "2px solid transparent"
                  : "none",
                borderBottom: isMobile
                  ? isActive
                    ? "2px solid #445B9C"
                    : "2px solid transparent"
                  : "none",
                transition: "all 0.3s ease",
                transform: isActive && !isMobile ? "translateX(2px)" : "none",
                ":hover": {
                  backgroundColor: "#f0f0f0",
                  transform: !isMobile ? "translateX(2px)" : "none",
                },
                color: isActive ? "#445B9C" : "#333",
                fontWeight: isActive ? "700" : "500",
                whiteSpace: "nowrap",
              }}
            >
              <Icon
                size={18}
                style={{ marginRight: 8 }}
                color={isActive ? "#445B9C" : "#666"}
              />
              <Typography sx={{ fontSize: "14px" }}>{item.label}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
