// utils/types.ts

import { SxProps, Theme } from "@mui/material";
import { RefObject } from "react";

export type InfoCardBannerProps = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  sx?: SxProps<Theme>;        
  buttonOnClick?: () => void;
  layout?: "full" | "card";
  enableZoom?: boolean;
  descriptionWidth?: string | number;
};

export type ProductListProps = {
  products: Product[];
  columns?: number;
  sx?: SxProps<Theme>;        
};

export type Product = {
  id: string;
  image: string;
  goldWeight: number;
  diamondWeight: number;
  price: string;
};


export type ProfileMenuProps = {
  anchorRef: RefObject<HTMLDivElement | null>;
  userName: string;
  onLogout: () => void;
};