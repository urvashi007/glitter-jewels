"use client";

import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Store, User, Heart, Home, Lock } from "lucide-react";

type SidebarProps = {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
};

const menuItems = [
  { label: "My Orders", icon: Store, tab: "orders" },
  { label: "Edit Profile", icon: User, tab: "profile" },
  { label: "My Wishlist", icon: Heart, tab: "wishlist" },
  { label: "Manage Addresses", icon: Home, tab: "addresses" },
  { label: "Change Password", icon: Lock, tab: "password" },
];

export default function SidebarMenu({ selectedTab, onSelectTab }: SidebarProps) {
  return (
    <>
    
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        background: "#fff",
        padding: "15px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Profile section */}
      <Stack direction="row" spacing={2} alignItems="center" sx={{borderBottom: "1px solid #e2e2e2",
    paddingBottom:"15px",
    marginBottom: "15px"}}>
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

      {/* Menu items */}
      {menuItems.map((item) => {
        const isActive = selectedTab === item.tab;

        return (
          <Box
            key={item.tab}
            onClick={() => onSelectTab(item.tab)}
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2,
              py: 1.5,
              cursor: "pointer",
              backgroundColor: isActive ? "#E5E9F5" : "transparent",
              borderLeft: isActive ? "2px solid #445B9C" : "2px solid transparent",
              transition: "all 0.3s ease",
              transform: isActive ? "translateX(2px)" : "none",
              ":hover": {
                backgroundColor: "#f0f0f0",
                transform: "translateX(2px)",
              },
              color: isActive ? "#445B9C" : "#333",
              fontWeight: isActive ? "700" : "500",
            }}
          >
            <item.icon
              size={18}
              style={{ marginRight: 10 }}
              color={isActive ? "#445B9C" : "#666"}
            />
            <Typography sx={{ fontSize: "15px" }}>{item.label}</Typography>
          </Box>
        );
      })}
    </Box>
    </>
  );
}
