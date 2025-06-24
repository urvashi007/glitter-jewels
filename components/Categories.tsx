"use client";

import React, { useRef } from "react";
import { Box, Container, Typography, Link, useTheme } from "@mui/material";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { customVars } from "@/utils/theme";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = [
  { title: "BRACELETS", img: "./Categories/img1.png", link: "#" },
  { title: "NECKLACES", img: "./Categories/img2.png", link: "#" },
  { title: "EARRINGS", img: "./Categories/img3.png", link: "#" },
  { title: "BRACELETS", img: "./Categories/img1.png", link: "#" },
  { title: "NECKLACES", img: "./Categories/img2.png", link: "#" },
  { title: "EARRINGS", img: "./Categories/img3.png", link: "#" },
];

type CategorySliderProps = {
  title?: string;
  viewAllLink?: string;
  viewAllText?: string;
};

export default function CategorySlider({
  title = "Browse by Categories",
  viewAllLink = "/product-list",
  viewAllText = "VIEW ALL",
}: CategorySliderProps) {
  const theme = useTheme();
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box sx={{ py: 10, backgroundColor: customVars.background.bluex }}>
      <Container maxWidth="lg">
        {(title || viewAllLink) && (
          <Box
            display="flex"
            justifyContent="space-between"
            mb={4}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: 2, sm: 0 },
            }}
          >
            {title && (
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: customVars.fontSizes.lg,
                    sm: customVars.fontSizes.xl,
                  },
                }}
              >
                {title}
              </Typography>
            )}
            {viewAllLink && (
              <Link href={viewAllLink} underline="none">
                {viewAllText} <ArrowRight size={20} style={{ marginLeft: 6 }} />
              </Link>
            )}
          </Box>
        )}

        {/* Slider */}
        <Box
          sx={{
            position: "relative",
            "& .swiper-button-prev, & .swiper-button-next": {
              opacity: 0,
              visibility: "hidden",
              transition: "all 0.3s ease",
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: customVars.background.bluex,
              border: `1px solid ${customVars.colors.accent}`,
              color: customVars.colors.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 1.25,
              zIndex: 10,
              "&::after": { display: "none" },
            },
            "&:hover .swiper-button-prev, &:hover .swiper-button-next": {
              opacity: 1,
              visibility: "visible",
            },
            "& .swiper-button-prev": {
              left: -20,
              top: "40%",
              position: "absolute",
              [theme.breakpoints.down("sm")]: {
                left: 0,
                top: "auto",
                bottom: "140px",
              },
            },
            "& .swiper-button-next": {
              right: -20,
              top: "40%",
              position: "absolute",
              [theme.breakpoints.down("sm")]: {
                right: 0,
                top: "auto",
                bottom: "140px",
              },
            },
          }}
        >
          <div ref={prevRef} className="swiper-button-prev">
            <ArrowLeft
              size={16}
              strokeWidth={1.25}
              color={customVars.colors.accent}
            />
          </div>
          <div ref={nextRef} className="swiper-button-next">
            <ArrowRight
              size={16}
              strokeWidth={1.25}
              color={customVars.colors.accent}
            />
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            onBeforeInit={(swiper) => {
              if (
                typeof swiper.params.navigation !== "boolean" &&
                swiper.params.navigation
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            slidesPerView={3}
            autoplay={{ delay: 8000 }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
            }}
            onSlideChange={(swiper) => {
              const progress =
                ((swiper.realIndex + 1) / categories.length) * 100;
              const el = document.getElementById("progress-fill");
              if (el) el.style.width = `${progress}%`;
            }}
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={`${cat.title}-${index}`}>
                <Box
                  component="a"
                  href={cat.link}
                  className="card"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    textAlign: "center",
                    p: 4,
                    maxWidth: { xs: "100%", sm: 400 },
                    mx: "auto",
                    fontFamily: customVars.fontFamily.primary,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover img": { transform: "scale(1.05)" },
                    [theme.breakpoints.down("sm")]: {
                      padding: 0,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", mb: 3 }}>
                    <Box
                      component="img"
                      src={cat.img}
                      alt={cat.title}
                      sx={{
                        width: "100%",
                        height: { xs: 200, sm: 300 },
                        objectFit: "contain",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      letterSpacing: "8px",
                      mb: 1,
                      color: customVars.colors.dark,
                      fontSize: {
                        xs: customVars.fontSizes.lg,
                        sm: customVars.fontSizes.xl,
                      },
                      fontFamily: customVars.fontFamily.primary,
                    }}
                  >
                    {cat.title}
                  </Typography>
                  <Box
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: customVars.colors.accent,
                      fontFamily: customVars.fontFamily.secondary,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      gap: 1,
                      transition: "all 0.3s ease",
                      "& .arrow-icon": {
                        transform: "translateX(-8px)",
                        opacity: 0,
                        transition: "all 0.3s ease",
                      },
                      ".card:hover & .arrow-icon": {
                        transform: "translateX(0)",
                        opacity: 1,
                      },
                    }}
                  >
                    DISCOVER THE COLLECTION
                    <ArrowRight className="arrow-icon" size={18} />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Progress bar */}
        <Box
          sx={{
            height: 4,
            backgroundColor: "#e0e0e0",
            borderRadius: 4,
            mt: 3,
            width: "120px",
            mx: "auto",
            overflow: "hidden",
          }}
        >
          <Box
            id="progress-fill"
            sx={{
              height: "100%",
              backgroundColor: customVars.colors.accent,
              width: "33%",
              transition: "width 0.3s ease-in-out",
              borderRadius: 4,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
