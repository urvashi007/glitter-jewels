// components/LatestCollection.tsx
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
} from '@mui/material';
import { ArrowRight, Heart, HeartIcon, Plus } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export type Product = {
  id: string;
  price: string;
  gold: string;
  diamond: string;
  image: string;
};

type LatestCollectionProps = {
  title: string;
  viewAllLink?: string;
  products: Product[];
};

export default function LatestCollection({
  title,
  viewAllLink = '#',
  products,
}: LatestCollectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Box sx={{ py: 10, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
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
              sx={{ fontWeight: 600, fontFamily: 'Manrope', fontSize: '40px' }}
            >
              {title}
            </Typography>
            <Link
              href={viewAllLink}
              underline="none"
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#445B9C',
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'Jost',
              }}
            >
              VIEW ALL <ArrowRight size={18} style={{ marginLeft: 6 }} />
            </Link>
          </Box>

          <Grid
            container
            spacing={3}
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
          >
            {products.map((item) => (
              <Grid key={item.id}>
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
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Box
                      sx={{
                        fontSize: '12px',
                        background: '#fff',
                        px: 1,
                        py: 0.5,
                        borderRadius: 0.5,
                        fontWeight: 500,
                      }}
                    >
                      Gold W : {item.gold}
                    </Box>
                    <Box
                      sx={{
                        fontSize: '12px',
                        background: '#fff',
                        px: 1,
                        py: 0.5,
                        borderRadius: 0.5,
                        fontWeight: 500,
                      }}
                    >
                      Dia. WT : {item.diamond}
                    </Box>
                  </Box>

                  <Box
                    component="img"
                    src={item.image}
                    alt={item.id}
                    sx={{
                      width: '100%',
                      height: 240,
                      objectFit: 'contain',
                      mb: 2,
                    }}
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
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        fontFamily: 'Manrope',
                      }}
                    >
                      {item.id} &nbsp;–&nbsp;
                      <Box component="span" sx={{ fontWeight: 600, marginTop:'12px' }}>
                        {item.price}
                      </Box>
                    </Typography>
                  </CardContent>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}
