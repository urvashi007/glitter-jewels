"use client";

import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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

export default function CategorySlider() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#F9FAFF" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            "@media (max-width:540px)": {
              alignItems: "flex-start",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              "@media (max-width:540px)": {
                fontSize: "25px",
                maxWidth: "200px",
              },
            }}
          >
            Browse by Categories
          </Typography>
          <Link
            href="/product-list"
            underline="none"
            sx={{
              fontSize: "18px",
              color: "#445B9C",
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "Jost",
              fontWeight: "500",
              "@media (max-width:540px)": {
                fontSize: "16px",
              },
            }}
          >
            VIEW ALL <ArrowRight size={20} style={{ marginLeft: 6 }} />
          </Link>
        </Box>

        {/* Slider Wrapper */}
        <Box
          className="slider-wrapper"
          sx={{
            position: "relative",
            "& .swiper-button-prev, & .swiper-button-next": {
              opacity: 0,
              visibility: "hidden",
              transition: "all 0.3s ease",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#F9FAFF",
              border: "1px solid #445B9C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#445B9C",
              padding:'10px',
              zIndex: 10,
              "&::after": {
                display: "none",
              },
            },
            "&:hover .swiper-button-prev, &:hover .swiper-button-next": {
              opacity: 1,
              visibility: "visible",
            },
            "& .swiper-button-prev": {
              left: -20,
              top: "40%",
              position: "absolute",
            },
            "& .swiper-button-next": {
              right: -20,
              top: "40%",
              position: "absolute",
            },
          }}
        >
          {/* Arrow buttons must be outside Swiper */}
          <div className="swiper-button-prev">
            <ArrowLeft size={10} strokeWidth={1.25} color="#445B9C" />
          </div>
          <div className="swiper-button-next">
            <ArrowRight size={10} strokeWidth={1.25} color="#445B9C" />
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            slidesPerView={3}
            autoplay={{ delay: 8000 }}
            loop
 
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
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
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    textAlign: "center",
                    p: 4,
                    width: "100%",
                    maxWidth: { xs: "100%", sm: 400 },
                    mx: "auto",
                    fontFamily: "Manrope",
                    cursor: "pointer",
                    "@media (max-width:540px)": {
                      padding: "0",
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
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      letterSpacing: "8px",
                      mb: 1,
                      color: "#222",
                      fontSize: {
                        xs: "28px",
                        sm: "40px",
                        fontFamily: "Manrope",
                      },
                    }}
                  >
                    {cat.title}
                  </Typography>
                  <Box
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#445B9C",
                      fontFamily: "Jost",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    DISCOVER THE COLLECTION
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
              backgroundColor: "#445B9C",
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
