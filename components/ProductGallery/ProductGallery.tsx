/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { styles, arrowButtonStyle } from "./ProductGallery.styles";

const images = [
  "/Categories/img1.png",
  "/Categories/img1.png",
  "/Categories/img1.png",
  "/Categories/img1.png",
];

export default function ProductGallery() {
  const isMobile = useMediaQuery("(max-width:540px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
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

  // 🔹 Mobile View
  if (isMobile) {
    return (
      <Box sx={styles.mobileWrapper}>
        {/* Left Arrow */}
        {activeIndex > 0 && (
          <IconButton
            onClick={() => scrollToIndex(activeIndex - 1)}
            sx={arrowButtonStyle("left")}
          >
            <ArrowLeft size={20} />
          </IconButton>
        )}

        {/* Right Arrow */}
        {activeIndex < images.length - 1 && (
          <IconButton
            onClick={() => scrollToIndex(activeIndex + 1)}
            sx={arrowButtonStyle("right")}
          >
            <ArrowRight size={20} />
          </IconButton>
        )}

        {/* Slider */}
        <Box ref={sliderRef} sx={styles.sliderBox}>
          {images.map((src, index) => (
            <Box key={index} sx={styles.slideImageBox}>
              <Box
                component="img"
                src={src}
                alt={`Image ${index}`}
                sx={styles.slideImage}
              />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  // 🔹 Desktop View
  return (
    <Box sx={styles.galleryWrapper}>
      {/* Top Main Image */}
      <Box sx={styles.mainImageBox}>
        <Box
          component="img"
          src={images[0]}
          alt="Main Product"
          sx={styles.mainImage}
        />
      </Box>

      {/* Thumbnail Row */}
      <Box sx={styles.thumbnailRow}>
        <Box sx={styles.thumbnailBox}>
          <Box
            component="img"
            src={images[1]}
            alt="Thumb 1"
            sx={styles.thumbnailImage}
          />
        </Box>
        <Box sx={styles.thumbnailBox}>
          <Box
            component="img"
            src={images[2]}
            alt="Thumb 2"
            sx={styles.thumbnailImage}
          />
        </Box>
      </Box>

      {/* Bottom Image */}
      <Box sx={styles.bottomImageBox}>
        <Box
          component="img"
          src={images[3]}
          alt="Bottom Product"
          sx={styles.bottomImage}
        />
      </Box>
    </Box>
  );
}
