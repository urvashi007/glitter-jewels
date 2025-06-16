"use client";

import { Box, Typography, Button } from "@mui/material";
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
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        },
        "@media (max-width:540px)": {
          height: "500px",
          padding: "0 20px 50px 20px",
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
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#fff",
              fontFamily: "Manrope",
              textShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
              "@media (max-width:540px)": {
                fontSize: "34px",
                lineHeight: "43px",
                fontWeight: "700",
              },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#fff",
              fontSize: "18px",
              fontFamily: "Jost",
              width: "700px",
              margin: "0 auto 32px",
              fontWeight:'400',
              textShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
              "@media (max-width:540px)": {
                width: "100%",
                fontSize: "16px",
              },
            }}
          >
            {subtitle}
          </Typography>

          <Link href="/product-list" passHref legacyBehavior>
            <Button
              variant="outlined"
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
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
}
