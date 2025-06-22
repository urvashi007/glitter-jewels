"use client";

import {
  Avatar,
  Box,
  Divider,
  Typography,
  MenuItem,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import {
  LogOut,
  User,
  Heart,
  Home,
  Lock,
  Store,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type ProfileDropdownProps = {
  name?: string;
  onLogout: () => void;
};

const menuItems = [
  { label: "My Orders", icon: Store, href: "/account" },
  { label: "Edit Profile", icon: User, href: "/account?tab=profile" },
  { label: "My Wishlist", icon: Heart, href: "/account?tab=wishlist" },
  { label: "Manage Addresses", icon: Home, href: "/account?tab=addresses" },
  { label: "Change Password", icon: Lock, href: "/account?tab=password" },
];

export default function ProfileDropdown({
  name = "Ashish Sharma",
  onLogout,
}: ProfileDropdownProps) {
  const [open, setOpen] = useState(false);

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box sx={{ position: "relative" }}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "#ECEFF5",
            color: "#445B9C",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
          }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {initials}
        </Avatar>

        {open && (
          <Paper
            sx={{
              position: "absolute",
              top: "40px",
              right: 0,
              width: 300,
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              zIndex: 10,
              borderRadius: 0,
              overflow: "hidden",
            }}
          >
            {/* Profile Header */}
            <Box sx={{ px: 2, py: 2, display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: "#ECEFF5",
                  color: "#445B9C",
                  fontWeight: "600",
                  fontSize: "16px",
                  mr: 1.5,
                }}
              >
                {initials}
              </Avatar>
              <Box>
                <Typography
                  sx={{ fontSize: "14px", color: "#666", fontWeight: 400 }}
                >
                  Hello,
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 700, color: "#222" }}
                >
                  {name}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ borderColor: "#eee" }} />

            {/* Menu Items */}
            <Box>
              {menuItems.map(({ label, icon: Icon, href }) => (
                <Link key={label} href={href} passHref legacyBehavior>
                  <MenuItem
                    onClick={() => setOpen(false)}
                    sx={{
                      px: 2,
                      py: 1.5,
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#222",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    <Icon size={18} />
                    {label}
                  </MenuItem>
                </Link>
              ))}

              {/* Logout */}
              <MenuItem
                onClick={() => {
                  setOpen(false);
                  onLogout();
                }}
                sx={{
                  px: 2,
                  py: 1.5,
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#d32f2f",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  "&:hover": {
                    backgroundColor: "#fce8e6",
                  },
                }}
              >
                <LogOut size={18} />
                Logout
              </MenuItem>
            </Box>
          </Paper>
        )}
      </Box>
    </ClickAwayListener>
  );
}
