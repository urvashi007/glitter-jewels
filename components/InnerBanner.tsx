'use client';

import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';

interface InnerBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function InnerBanner({ title, breadcrumbs }: InnerBannerProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 300, sm: 280, md: 374 },
        backgroundImage: `url('/innerBanner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#fff', mb: 1 }}>
          {breadcrumbs.map((crumb, index) =>
            crumb.href ? (
              <Link
                key={index}
                underline="hover"
                color="inherit"
                fontSize="14px"
                href={crumb.href}
              >
                {crumb.label}
              </Link>
            ) : (
              <Typography key={index} color="#fff" fontSize="14px">
                {crumb.label}
              </Typography>
            )
          )}
        </Breadcrumbs>

        {/* Title */}
        <Typography
          variant="h3"
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
