// utils/accountMenu.ts
import { Store, User, Heart, Home, Lock } from "lucide-react";

export const accountMenu = [
  { label: "My Orders", icon: Store, tab: "orders" },
  { label: "Edit Profile", icon: User, tab: "profile" },
  { label: "My Wishlist", icon: Heart, tab: "wishlist" },
  { label: "My Addresses", icon: Home, tab: "addresses" },
  { label: "Change Password", icon: Lock, tab: "password" },
];
