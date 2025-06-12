import { SxProps, Theme } from "@mui/material";


export type InfoCardBannerProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    sx?: SxProps<Theme>;
    buttonOnClick?: () => void;
    layout?: 'full' | 'card';
    enableZoom?: boolean;
    descriptionWidth?: string | number;
  };
  