'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Link,
  Grid,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowRight, Heart, HeartIcon, Plus, ChevronDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const StyledChevronDown = ({ open }: { open: boolean }) => (
  <ChevronDown
    style={{
      color: '#222',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease',
      position: 'absolute',
      right: '8px',
      fontWeight: '400',
      width: '18px',
    }}
  />
);

export type Product = {
  id: string;
  price: string;
  gold: string;
  diamond: string;
  image: string;
};

type LatestCollectionProps = {
  title?: string;
  viewAllLink?: string;
  products: Product[];
  columns?: number;
  showProductCountAndSort?: boolean;
  onProductClick?: (product: Product) => void; // ✅
};

export default function CardCollection({
  title,
  viewAllLink,
  products,
  columns = 4,
  showProductCountAndSort = true,
  onProductClick,
}: LatestCollectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [sortBy, setSortBy] = useState('priceLowHigh');
  const [sortOpen, setSortOpen] = useState(false);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sortedProducts = useMemo(() => {
    if (!showProductCountAndSort) return products;
    return [...products].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
      switch (sortBy) {
        case 'priceLowHigh':
          return priceA - priceB;
        case 'priceHighLow':
          return priceB - priceA;
        default:
          return 0;
      }
    });
  }, [products, sortBy, showProductCountAndSort]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Box>
        <Container maxWidth="lg">
          {(title || viewAllLink) && (
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
              {title && (
                <Typography variant="h4" fontWeight={600}>
                  {title}
                </Typography>
              )}
              {viewAllLink && (
                <Link href={viewAllLink} underline="none" sx={{ color: '#445B9C' }}>
                  VIEW ALL <ArrowRight size={18} style={{ marginLeft: 6 }} />
                </Link>
              )}
            </Box>
          )}

          {showProductCountAndSort && (
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h6" fontWeight={600}>
                {products.length} Products
              </Typography>
              <FormControl size="small" sx={{ minWidth: 160 }}>
                <InputLabel>Sort by</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort by"
                  onChange={(e: SelectChangeEvent) => setSortBy(e.target.value)}
                  onOpen={() => setSortOpen(true)}
                  onClose={() => setSortOpen(false)}
                  IconComponent={() => <StyledChevronDown open={sortOpen} />}
                >
                  <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
                  <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          )}

          {isMobile ? (
            <Swiper spaceBetween={16} slidesPerView={1.2}>
              {sortedProducts.map((item) => (
                <SwiperSlide key={item.id}>{renderCard(item)}</SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Grid container spacing={3} sx={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
              {sortedProducts.map((item) => (
                <Grid key={item.id}>{renderCard(item)}</Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </motion.div>
  );

  function renderCard(item: Product) {
    return (
      <>
        <Card
          elevation={0}
          sx={{
            p: 2,
            backgroundColor: '#f7f7f7',
            borderRadius: 2,
            position: 'relative',
            overflow: 'visible',
            '&:hover .hover-icons': {
              opacity: 1,
              transform: 'translateY(0px)',
            },
          }}
        >
          <Box display="flex" gap={1} mb={1}>
            <Box sx={{ fontSize: '12px', background: '#fff', px: 1, py: 0.5, borderRadius: 0.5, fontWeight: 500 }}>
              Gold W : {item.gold}
            </Box>
            <Box sx={{ fontSize: '12px', background: '#fff', px: 1, py: 0.5, borderRadius: 0.5, fontWeight: 500 }}>
              Dia. WT : {item.diamond}
            </Box>
          </Box>

          <Box
            component="img"
            src={item.image}
            alt={item.id}
            sx={{ width: '100%', height: 240, objectFit: 'contain', mb: 2 }}
          />

          <Box
            className="hover-icons"
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              opacity: 0,
              transform: 'translateY(10px)',
              transition: 'all 0.3s ease',
            }}
          >
            <IconButton
              size="small"
              onClick={() => toggleFavorite(item.id)}
              sx={{
                background: '#fff',
                color: favorites[item.id] ? 'red' : '#000',
                borderRadius: 1,
                width: 36,
                height: 36,
              }}
            >
              {favorites[item.id] ? (
                <HeartIcon fill="red" size={16} />
              ) : (
                <Heart size={16} />
              )}
            </IconButton>

            <IconButton
              size="small"
              onClick={() => onProductClick?.(item)}
              sx={{
                background: '#445B9C',
                color: '#fff',
                borderRadius: 1,
                width: 36,
                height: 36,
                '&:hover': { background: '#334a7d' },
              }}
            >
              <Plus size={16} />
            </IconButton>
          </Box>
        </Card>

        <CardContent sx={{ px: 0, pt: 1 }}>
          <Typography variant="body1" sx={{ fontSize: 14, fontWeight: 500 }}>
            {item.id} &nbsp;–&nbsp;
            <Box component="span" sx={{ fontWeight: 700 }}>{item.price}</Box>
          </Typography>
        </CardContent>
      </>
    );
  }
}
