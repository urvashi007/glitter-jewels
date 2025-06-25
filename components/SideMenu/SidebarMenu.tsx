"use client";


import {
  Avatar,
  Box,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import sidebarStyles from "./ SidebarMenu.styles";


type MenuItem = {
  label: string;
  icon?: React.ElementType<{ size?: number; color?: string; style?: React.CSSProperties }>;
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
    <Box sx={sidebarStyles.root(theme)}>
      {!isMobile && (
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={sidebarStyles.profileSection(theme)}
        >
          <Avatar sx={sidebarStyles.avatar}>AS</Avatar>
          <Box>
            <Typography sx={sidebarStyles.helloText}>Hello,</Typography>
            <Typography sx={sidebarStyles.nameText}>Ashish Sharma</Typography>
          </Box>
        </Stack>
      )}

      <Box sx={sidebarStyles.menuContainer(theme, isMobile)}>
        {items.map(({ tab, label, icon: Icon }) => {
          const isActive = selectedTab === tab;
          return (
            <Box
              key={tab}
              onClick={() => onSelectTab(tab)}
              sx={sidebarStyles.menuItem(isActive, isMobile)}
            >
              {Icon && (
                <Icon
                  size={18}
                  style={{ marginRight: 8 }}
                  color={isActive ? "#445B9C" : "#666"}
                />
              )}
              <Typography sx={sidebarStyles.menuText}>{label}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
