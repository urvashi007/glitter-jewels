"use client";

import { Box, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { rootStyle, subtitleStyle, titleStyle } from "./HeroBanner.styles";

type BannerProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
};

export default function HeroBanner({
  backgroundImage,
  title,
  subtitle,
  buttonText,
}: BannerProps) {
  const theme = useTheme();

  return (
    <Box sx={rootStyle(theme, backgroundImage)}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ zIndex: 2 }}
      >
        <Box sx={{ zIndex: 2 }}>
          <Typography variant="h3" component="h1" color="common.white" sx={titleStyle(theme)}>
            {title}
          </Typography>

          <Typography variant="subtitle1" sx={subtitleStyle(theme)}>
            {subtitle}
          </Typography>

          <Link href="/product-list" passHref legacyBehavior>
            <Button variant="outlined">{buttonText}</Button>
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
}
