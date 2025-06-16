// TabSection.tsx
"use client";

import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import CardCollection, { Product } from "@/components/CardCollection"; // ✅ Replace path as needed
import ProductDetailsDrawer from "@/components/ProductDetailsDrawer";

const Wishlist = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };
  const productsItem = [
    {
      id: "Ring-001",
      price: "₹25,000",
      gold: "2.5g",
      diamond: "0.25ct",
      image: "./Categories/img1.png",
    },
    {
      id: "Ring-002",
      price: "₹32,500",
      gold: "3g",
      diamond: "0.35ct",
      image: "./Categories/img2.png",
    },
    {
      id: "Pendant-003",
      price: "₹18,000",
      gold: "2g",
      diamond: "0.15ct",
      image: "./Categories/img3.png",
    },
    {
      id: "Bracelet-004",
      price: "₹45,000",
      gold: "5g",
      diamond: "0.5ct",
      image: "./Categories/img1.png",
    },
  ];
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: "100%", px: 2, py: 4 }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        My Wishlist
      </Typography>

      <Tabs
        value={tabIndex}
        onChange={handleChange}
        // variant="scrollable"
        // scrollButtons
        // allowScrollButtonsMobile
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 3 }}
      >
        <Tab label="All Products" />
        <Tab label="Wedding Gift" />
        <Tab label="My Collection 01" />
        <Tab label="Birthday Gift" />
      </Tabs>

      <Box>
        {tabIndex === 0 && (
          <CardCollection
            products={productsItem}
            showProductCountAndSort={false}
            onProductClick={handleProductClick}
            columns={3}
          />
        )}
        {tabIndex === 1 && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Wedding Gift content goes here...
          </Typography>
        )}
        {tabIndex === 2 && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            My Collection 01 content goes here...
          </Typography>
        )}
        {tabIndex === 3 && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            Birthday Gift content goes here...
          </Typography>
        )}
      </Box>
      <ProductDetailsDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />
    </Box>
  );
};

export default Wishlist;
