'use client';

import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';

const categories = [
  { title: 'BRACELETS', img: './Categories/img1.png', link: '#' },
  { title: 'NECKLACES', img: './Categories/img2.png', link: '#' },
  { title: 'EARRINGS', img: './Categories/img3.png', link: '#' },
  { title: 'BRACELETS', img: './Categories/img1.png', link: '#' },
  { title: 'NECKLACES', img: './Categories/img2.png', link: '#' },
  { title: 'EARRINGS', img: './Categories/img3.png', link: '#' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function CategorySlider() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#F9FAFF' }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontFamily: 'Manrope',
                fontSize: '40px',
                color: '#222',
              }}
            >
              Browse by Categories
            </Typography>
            <Link
              href="#"
              underline="none"
              sx={{
                fontSize: '18px',
                color: '#445B9C',
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'Jost',
                fontWeight: '500',
              }}
            >
              VIEW ALL <ArrowRight size={20} style={{ marginLeft: 6 }} />
            </Link>
          </Box>
        </motion.div>

        {/* Banner / Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            autoplay={{ delay: 6000 }}
            loop
            onSlideChange={(swiper) => {
              const progress =
                ((swiper.realIndex + 1) / categories.length) * 100;
              const el = document.getElementById('progress-fill');
              if (el) el.style.width = `${progress}%`;
            }}
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={`${cat.title}-${index}`}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    maxWidth: 400,
                    mx: 'auto',
                    cursor: 'pointer',
                    fontFamily: 'Manrope',
                    '&:hover .arrow-icon': {
                      opacity: 1,
                      transform: 'translateX(4px) scale(1.1)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={cat.img}
                    alt={cat.title}
                    sx={{
                      height: '300px',
                      objectFit: 'contain',
                      mb: 3,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      letterSpacing: '8px',
                      mb: 1,
                      color: '#222',
                      fontSize: '40px',
                      fontFamily: 'Manrope',
                    }}
                  >
                    {cat.title}
                  </Typography>
                  <Box
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#445B9C',
                      fontFamily: 'Jost',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    DISCOVER THE COLLECTION
                    <Box
                      className="arrow-icon"
                      sx={{
                        transition: 'all 0.3s ease',
                        opacity: 0,
                        transform: 'translateX(-5px)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        mt: '6px',
                        pl: '4px',
                      }}
                    >
                      <ArrowRight size={20} />
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar */}
          <Box
            sx={{
              height: 4,
              backgroundColor: '#e0e0e0',
              borderRadius: 4,
              mt: 3,
              width: '120px',
              mx: 'auto',
              overflow: 'hidden',
            }}
          >
            <Box
              id="progress-fill"
              sx={{
                height: '100%',
                backgroundColor: '#445B9C',
                width: '33%',
                transition: 'width 0.3s ease-in-out',
                borderRadius: 4,
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
