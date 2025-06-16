"use client";

import { Paper, Typography, Stack, Box } from "@mui/material";
import {
  ShoppingBag,
  Person,
  Favorite,
  LocationOn,
  Lock,
} from "@mui/icons-material";

const menuItems = [
  { icon: <ShoppingBag fontSize="small" />, label: "My Orders" },
  { icon: <Person fontSize="small" />, label: "Edit Profile" },
  { icon: <Favorite fontSize="small" />, label: "My Favourites" },
  { icon: <LocationOn fontSize="small" />, label: "Manage Addresses" },
  { icon: <Lock fontSize="small" />, label: "Change Password" },
];

export default function ProfileMenu() {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        right: 16,
        top: 70,
        width: 260,
        p: 2,
        borderRadius: 2,
        zIndex: 1100,
      }}
    >
      <Stack spacing={1}>
        {menuItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              px: 1,
              py: 0.75,
              borderRadius: 1,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            {item.icon}
            <Typography variant="body2" ml={1}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
