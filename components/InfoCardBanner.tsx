"use client";

import { motion } from "framer-motion";
import { Box, Button, Typography, Container, useTheme } from "@mui/material";
import { customVars } from "@/utils/theme";
import type { InfoCardBannerProps } from "../utils/type";

export default function InfoCardBanner({
  image,
  title,
  description,
  buttonText,
  buttonOnClick,
  layout = "card",
  sx = {},
  enableZoom = false,
}: InfoCardBannerProps) {
  const theme = useTheme();
  const textAlign = layout === "full" ? "left" : "center";
  const contentAlign = layout === "full" ? "flex-start" : "center";

  return (
    <Box
      component={motion.div}
      {...(enableZoom && { whileHover: "hover" })}
      initial="initial"
      sx={{
        position: "relative",
        width: "100%",
        height: "640px",
        display: "flex",
        justifyContent: contentAlign,
        alignItems: "center",
        overflow: "hidden",
        color: customVars.colors.white,
        fontFamily: customVars.fontFamily.primary,
        cursor: enableZoom ? "pointer" : "default",
        background:customVars.background.whitebg,
        [theme.breakpoints.down("sm")]: {
          height: "500px",
          p: "30px 20px",
        },
        ...sx,
      }}
    >
      <Box
        component={motion.div}
        variants={
          enableZoom
            ? {
                initial: { scale: 1 },
                hover: { scale: 1.1 },
              }
            : undefined
        }
        transition={enableZoom ? { duration: 0.8, ease: "easeOut" } : undefined}
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: customVars.colors.overlayDark,
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0))",
          zIndex: 1,
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign,
          maxWidth: layout === "card" ? "md" : "lg",
          pl: layout === "full" ? 6 : 0,
          pr: layout === "full" ? 6 : 0,
          [theme.breakpoints.down("sm")]: {
            px: 2,
          },
        }}
      >
       <Typography
        variant="h4"
        mb={2}
        sx={{
          maxWidth: 600,
          [theme.breakpoints.down("sm")]: {
            fontSize: customVars.fontSizes.lg,
            maxWidth: 600,
          },
        }}
      >
        {title}
      </Typography>

        <Typography
          variant="body2"
          fontWeight={400}
          sx={{
            mb: 4,
            [theme.breakpoints.down("sm")]: {
              maxWidth: "100%",
            },
          }}
        >
          {description}
        </Typography>

        <Button variant="outlined" onClick={buttonOnClick}>
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
}
