// SidebarMenu.tsx
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
    <Box display="flex" flexDirection="column" gap={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ width: 60, height: 60, bgcolor: "#ECEFF5", color:'#445B9C', fontWeight:'600'}}>AS</Avatar>
        <Box>
          <Typography variant="body1" fontWeight={600}>
            Hello,
          </Typography>
          <Typography variant="h6">Ashish Sharma</Typography>
        </Box>
      </Stack>

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
              borderRadius: 2,
              cursor: "pointer",
              backgroundColor: isActive ? "#E5E9F5" : "transparent",
              fontWeight: isActive ? 600 : 400,
              ":hover": { backgroundColor: "#f0f0f0" },
              color: isActive ? "#445B9C" : "inherit",
            }}
          >
            <item.icon size={18} style={{ marginRight: 8 }} color={isActive ? "#445B9C" : "black"} />
            <Typography>{item.label}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
