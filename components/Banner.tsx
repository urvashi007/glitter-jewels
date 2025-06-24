"use client";

import { customVars } from "@/utils/theme";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "800px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        paddingBottom: "60px",
        textAlign: "center",
        overflow: "hidden",
        fontFamily: "var(--font-family-primary)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        },
        [theme.breakpoints.down("sm")]: {
          height: "700px",
          padding: "0 20px 50px",
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ zIndex: 2 }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h1"
            color="common.white"
            sx={{
            fontSize: theme.typography.h1.fontSize,
              mb: 2,
              textShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
            
              [theme.breakpoints.down("sm")]: {
                fontSize: customVars.fontSizes.font32,
                lineHeight:'45px',
              },
            }}
          >
            {title}
          </Typography>

          <Typography
           variant="subtitle1"
            sx={{
              textShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
              width: "700px",
              margin:'0 auto 32px;',
              [theme.breakpoints.down("sm")]: {
                width:'100%',
              },
            }}
          >
            {subtitle}
          </Typography>

          <Link href="/product-list" passHref legacyBehavior>
            <Button
              variant="outlined"
            >
              {buttonText}
            </Button>
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
}
