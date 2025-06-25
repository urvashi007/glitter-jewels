"use client";

import {
  Box,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Link,
} from "@mui/material";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { styles, chevronIconStyle } from "./CardCollection.styles";
import ProductCard from "./ProductCard";

const StyledChevronDown = ({ open }: { open: boolean }) => (
  <ChevronDown style={chevronIconStyle(open)} />
);

export type Product = {
  id: string;
  price: string;
  gold: string;
  diamond: string;
  image: string;
};

type CardCollectionProps = {
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
  columns = 3,
  showProductCountAndSort = true,
  onProductClick,
}: CardCollectionProps) {
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [sortBy, setSortBy] = useState("priceLowHigh");
  const [sortOpen, setSortOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, ""), 10) || 0;
      const priceB = parseInt(b.price.replace(/[^\d]/g, ""), 10) || 0;
      return sortBy === "priceLowHigh" ? priceA - priceB : priceB - priceA;
    });
  }, [products, sortBy]);

  return (
    <Box sx={styles.wrapper}>
        {(title || viewAllLink) && (
          <Box sx={styles.headerBox}>
            {title && (
              <Typography variant="h2" sx={styles.title}>
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
                onChange={(e: SelectChangeEvent) =>
                  setSortBy(e.target.value)
                }
                onOpen={() => setSortOpen(true)}
                onClose={() => setSortOpen(false)}
                IconComponent={() => <StyledChevronDown open={sortOpen} />}
                sx={styles.sortSelect}
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
        <Box
          sx={{
            display: "grid",
            rowGap: "25px",
             columnGap: "24px",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: `repeat(${columns}, 1fr)`,
            },
          }}
        >
          {sortedProducts.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Box>
            <ProductCard
              key={item.id}
              product={item}
              isFavorite={favorites[item.id]}
              onToggleFavorite={toggleFavorite}
              onClickDetails={onProductClick || (() => {})}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
            />
            </Box>
          ))}
        </Box>

    </Box>
  );
}
