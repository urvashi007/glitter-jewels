"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import type { InfoCardBannerProps } from "../utils/type";

export default function InfoCardBanner({
  image,
  title,
  description,
  buttonText,
  buttonOnClick,
  layout = "card",
  descriptionWidth,
  sx = {},
  enableZoom = false,
}: InfoCardBannerProps) {
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
        color: "#fff",
        cursor: enableZoom ? "pointer" : "default",
        "@media (max-width:540px)": {
          height: "500px",
          padding: "30px 20px",
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
          backgroundColor: "rgba(0, 0, 0, 0.4)",
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
          "@media (max-width:540px)": {
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
          "@media (max-width:540px)": {
            padding: "0px 20px",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: "40px",
            width: descriptionWidth || "100%",
            "@media (max-width:540px)": {
              maxWidth: "100%",
              fontSize: "28px",
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: "16px",
            fontFamily: "Jost",
            "@media (max-width:540px)": {
              maxWidth: "100%",
            },
          }}
        >
          {description}
        </Typography>

        <Button
          variant="outlined"
          onClick={buttonOnClick}
          sx={{
            borderColor: "#fff",
            color: "#fff",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "#fff",
            },
          }}
        >
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
}
