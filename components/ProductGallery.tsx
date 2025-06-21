/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "./Categories/img1.png",
  "./Categories/img1.png",
  "./Categories/img1.png",
  "./Categories/img1.png",
];

export default function ProductGallery() {
  const isMobile = useMediaQuery("(max-width:540px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth;
    slider.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const width = slider.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMobile) {
    return (
      <Box sx={{ position: "relative" }}>
        {/* Left Arrow (Hide if at first image) */}
        {activeIndex > 0 && (
          <IconButton
            onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
              zIndex: 1,
              border: "1px solid #3f51b5",
              borderRadius: "50%",
              backgroundColor: "#f9faff",
              color: "#3f51b5",
              width: 30,
              height: 30,
              "&:hover": {
                backgroundColor: "#eef2ff",
              },
            }}
          >
            <ArrowLeft size={20} />
          </IconButton>
        )}

        {/* Right Arrow (Hide if at last image) */}
        {activeIndex < images.length - 1 && (
          <IconButton
            onClick={() =>
              scrollToIndex(Math.min(activeIndex + 1, images.length - 1))
            }
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              transform: "translateY(-50%)",
              zIndex: 1,
              border: "1px solid #3f51b5",
              borderRadius: "50%",
              backgroundColor: "#f9faff",
              color: "#3f51b5",
              width: 30,
              height: 30,
              "&:hover": {
                backgroundColor: "#eef2ff",
              },
            }}
          >
            <ArrowRight size={20} />
          </IconButton>
        )}

        {/* Slider */}
        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            gap: 0,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {images.map((src, i) => (
            <Box
              key={i}
              sx={{
                flex: "0 0 100%",
                scrollSnapAlign: "center",
                background: "#fff",
              }}
            >
              <img
                src={src}
                alt={`Bracelet ${i}`}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  // Desktop view 
  return (
    <Box sx={{ mx: "auto", py: 4 }}>
      <Box sx={{ marginBottom: "8px", background: "#fff" }}>
        <img
          src="./Categories/img1.png"
          alt="Bracelet Top"
          style={{
            width: "457px",
            height: "600px",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
            padding: "20px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <Box sx={{ flex: "1 1 300px", background: "#fff" }}>
          <img
            src="./Categories/img1.png"
            alt="Bracelet Left"
            style={{
              width: "228px",
              height: "300px",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
              padding: "20px",
            }}
          />
        </Box>
        <Box sx={{ flex: "1 1 300px", background: "#fff" }}>
          <img
            src="./Categories/img1.png"
            alt="Bracelet Right"
            style={{
              width: "228px",
              height: "300px",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
              padding: "20px",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", background: "#fff" }}>
        <img
          src="./Categories/img1.png"
          alt="Bracelet Bottom"
          style={{
            width: "457px",
            height: "600px",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
            padding: "20px",
          }}
        />
      </Box>
    </Box>
  );
}
