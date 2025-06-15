// components/common/Dot.tsx
"use client";

import { Box, SxProps, Theme } from "@mui/material";

type DotProps = {
  color?: string;
  size?: number;
  sx?: SxProps<Theme>;
};

const Dot = ({ color = "#A6A6A6", size = 4, sx = {} }: DotProps) => {
  return (
    <Box
      component="span"
      sx={{
        width: size,
        height: size,
        bgcolor: color,
        borderRadius: "50%",
        display: "inline-block",
        margin: "8px 4px 0 0",
        ...sx,
      }}
    />
  );
};

export default Dot;
