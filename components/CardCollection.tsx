"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Link,
  Grid,
  Stack,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import { ArrowRight, Heart, HeartIcon, Plus, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { customVars } from "@/utils/theme";

const StyledChevronDown = ({ open }: { open: boolean }) => (
  <ChevronDown
    style={{
      color: customVars.colors.dark,
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
      position: "absolute",
      right: "8px",
      fontWeight: "400",
      width: "18px",
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
  viewAllText?: string;
  products: Product[];
  columns?: number;
  showProductCountAndSort?: boolean;
  onProductClick?: (product: Product) => void;
};

export default function CardCollection({
  title,
  viewAllLink,
  products,
  columns = 4,
  showProductCountAndSort = true,
  onProductClick,
}: LatestCollectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [sortBy, setSortBy] = useState("priceLowHigh");
  const [sortOpen, setSortOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, ""), 10) || 0;
      const priceB = parseInt(b.price.replace(/[^\d]/g, ""), 10) || 0;
      switch (sortBy) {
        case "priceLowHigh":
          return priceA - priceB;
        case "priceHighLow":
          return priceB - priceA;
        default:
          return 0;
      }
    });
  }, [products, sortBy]);

  const hoverIconsSx = {
    position: "absolute" as const,
    bottom: 16,
    right: 16,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    opacity: 0,
    transform: "translateY(10px)",
    transition: "all 0.3s ease",
  };

  return (
    <Box>
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
                        VIEW ALL <ArrowRight size={20} style={{ marginLeft: 6 }} />
                      </Link>
                    )}
                  </Box>
                )}

        {showProductCountAndSort && (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h6" fontWeight={600}>
              {products.length} Products
            </Typography>
            <FormControl size="small" variant="outlined" sx={{ minWidth: 160 }}>
              <Select
                value={sortBy}
                displayEmpty
                onChange={(e: SelectChangeEvent) => setSortBy(e.target.value)}
                onOpen={() => setSortOpen(true)}
                onClose={() => setSortOpen(false)}
                IconComponent={() => <StyledChevronDown open={sortOpen} />}
                sx={{
                  fontSize: customVars.fontSizes.sm,
                  fontWeight: 600,
                  fontFamily: customVars.fontFamily.secondary,
                  ".MuiOutlinedInput-notchedOutline": {
                    border: `1px solid ${customVars.colors.dark}`,
                  },
                }}
              >
                <MenuItem disabled value="">
                  Sort by
                </MenuItem>
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
          <Grid
            container
            spacing={3}
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
          >
            {sortedProducts.map((item) => (
              <Grid key={item.id}>{renderCard(item)}</Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );

  function renderCard(item: Product) {
    return (
      <>
        <Card
          elevation={0}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          sx={{
            p: 2,
            backgroundColor: customVars.background.bgf7f7f7,
            borderRadius: 0,
            position: "relative",
            overflow: "visible",
          }}
        >
          <Box display="flex" gap={1} mb={1}>
            <Box
              sx={{
                fontSize: customVars.fontSizes.xs,
                background: customVars.background.whitebg,
                fontFamily: customVars.fontFamily.primary,
                px: 1,
                py: 0.5,
                borderRadius: 0.5,
                fontWeight: 600,
              }}
            >
              Gold W : {item.gold}
            </Box>
            <Box
              sx={{
                fontSize: customVars.fontSizes.xs,
                background: customVars.background.whitebg,
                fontFamily: customVars.fontFamily.primary,
                px: 1,
                py: 0.5,
                borderRadius: 0.5,
                fontWeight: 600,
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
              width: "100%",
              height: 240,
              objectFit: "contain",
              mb: 2,
            }}
          />

          <Box
            sx={{
              ...hoverIconsSx,
              ...(hoveredId === item.id && {
                opacity: 1,
                transform: "translateY(0)",
              }),
            }}
          >
            <IconButton
              size="small"
              onClick={() => toggleFavorite(item.id)}
              sx={{
                background: customVars.background.whitebg,
                color: favorites[item.id] ? "red" : customVars.colors.dark,
                width: 36,
                height: 36,
                borderRadius: 0,
                "&:hover": {
                  background: customVars.background.whitebg,
                },
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
                background: customVars.background.bgaccent,
                color: customVars.colors.white,
                width: 36,
                height: 36,
                borderRadius: 0,
                "&:hover": {
                  background: customVars.background.bgaccent,
                },
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
              fontSize: customVars.fontSizes.md,
              fontWeight: 500,
              color: customVars.colors.dark,
            }}
          >
            {item.id} &nbsp;–&nbsp;
            <Box component="span" sx={{ fontWeight: 700 }}>
              {item.price}
            </Box>
          </Typography>
        </CardContent>
      </>
    );
  }
}
