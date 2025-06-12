"use client";
import Grid from '@mui/material/Grid';
import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Collapse,
  Stack,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";


const filters = [
  {
    label: "Price",
    options: [
      "₹5,000 to ₹10,000",
      "₹10,000 to ₹25,000",
      "₹25,000 to ₹50,000",
      "₹50,000 to ₹100,000",
      "₹100,000 and above",
    ],
  },
  {
    label: "Diamond carat",
    options: ["0.1", "0.25", "0.5", "1.0"],
  },
  {
    label: "Gold Weight",
    options: ["2g", "5g", "10g"],
  },
  {
    label: "Diamond Shape",
    options: ["Round", "Princess", "Emerald"],
  },
];

const products = [
  {
    id: "BRC0016O",
    image: "/path/to/image.jpg",
    goldWeight: 0.51,
    diamondWeight: 0.81,
    price: "₹27,774",
  },
  {
    id: "NK00381",
    image: "/path/to/image.jpg",
    goldWeight: 0.51,
    diamondWeight: 0.81,
    price: "₹29,475",
  },
  // Add more products as needed
];

export default function ProductListPage() {
  const [expanded, setExpanded] = useState<string | null>("Price");
  const [sortBy, setSortBy] = useState("");

  const handleToggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label));

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        {/* Sidebar Filters */}
        <Grid item xs={12} md={3}>
          {filters.map((filter) => (
            <Box key={filter.label} mb={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                onClick={() => handleToggle(filter.label)}
                sx={{ cursor: "pointer", pb: 1 }}
              >
                <Typography fontWeight={600}>{filter.label}</Typography>
                <IconButton size="small">
                  {expanded === filter.label ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </IconButton>
              </Stack>
              <Collapse in={expanded === filter.label} timeout="auto">
                <FormGroup>
                  {filter.options.map((opt) => (
                    <FormControlLabel
                      key={opt}
                      control={<Checkbox />}
                      label={opt}
                    />
                  ))}
                </FormGroup>
              </Collapse>
            </Box>
          ))}
        </Grid>

        {/* Product Section */}
        <Grid item xs={12} md={9}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h6" fontWeight={600}>
              110 Products
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
              <Grid item xs={6} sm={4} key={product.id}>
                <Box border="1px solid #eee" borderRadius={2} p={1}>
                  <Box
                    sx={{
                      position: "relative",
                      height: 200,
                      backgroundColor: "#f8f8f8",
                      borderRadius: 1,
                    }}
                  >
                    {/* Product Image Placeholder */}
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
                    {/* Weight Tags */}
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
                    {/* Action Icons */}
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
        </Grid>
      </Grid>
    </Container>
  );
}
