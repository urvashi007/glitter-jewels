"use client";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

interface Product {
  id: string;
  image: string;
  goldWeight: number;
  diamondWeight: number;
  price: string;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [sortBy, setSortBy] = useState("");

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h6" fontWeight={600}>
          {products.length} Products
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sortBy}
            label="Sort by"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
            <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id}>
            <Box border="1px solid #eee" borderRadius={2} p={1}>
              <Box
                sx={{
                  position: "relative",
                  height: 200,
                  backgroundColor: "#f8f8f8",
                  borderRadius: 1,
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.id}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                <Stack
                  direction="row"
                  spacing={1}
                  position="absolute"
                  top={8}
                  left={8}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      px: 1,
                      fontSize: "12px",
                      borderRadius: 1,
                      border: "1px solid #ccc",
                    }}
                  >
                    Gold W : {product.goldWeight}
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      px: 1,
                      fontSize: "12px",
                      borderRadius: 1,
                      border: "1px solid #ccc",
                    }}
                  >
                    Dia. WT : {product.diamondWeight}
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  position="absolute"
                  bottom={8}
                  right={8}
                >
                  <IconButton size="small">
                    <FavoriteBorder />
                  </IconButton>
                  <IconButton size="small" sx={{ backgroundColor: "#eee" }}>
                    <AddIcon />
                  </IconButton>
                </Stack>
              </Box>
              <Typography mt={1} fontWeight={500}>
                {product.id} - <strong>{product.price}</strong>
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
