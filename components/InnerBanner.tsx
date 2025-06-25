'use client';

import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { customVars } from '@/utils/theme';

interface InnerBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  backgroundImage?: string;
}

export default function InnerBanner({
  title,
  breadcrumbs,
  backgroundImage = '/innerBanner.jpg',
}: InnerBannerProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 300, sm: 280, md: 374 },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: customVars.colors.white,
        fontFamily: customVars.fontFamily.primary,
      }}
    >

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: customVars.colors.overlayDark,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ color: customVars.colors.white, mb: 1 }}
        >
          {breadcrumbs.map((crumb, index) =>
            crumb.href ? (
              <Link
                key={index}
                underline="hover"
                color="inherit"
                href={crumb.href}
                sx={{
                  fontSize: customVars.fontSizes.sm,
                  color: customVars.colors.white,
                  fontFamily: customVars.fontFamily.secondary,
                }}
              >
                {crumb.label}
              </Link>
            ) : (
              <Typography
                key={index}
                sx={{
                  fontSize: customVars.fontSizes.sm,
                  color: customVars.colors.white,
                  fontFamily: customVars.fontFamily.secondary,
                }}
              >
                {crumb.label}
              </Typography>
            )
          )}
        </Breadcrumbs>

        <Typography
          variant="h2"
          sx={{
            textShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
          }}
        >
          {title}
        </Typography>
      </Container>
    </Box>
  );
}
