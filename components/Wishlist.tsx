
"use client";

import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import CardCollection, { Product } from "@/components/CardCollection";
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
  ];
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box
         sx={{
           background: "#fff",
           boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
         }}
       >
     <Typography
             variant="h6"
             fontWeight={700}
             sx={{
               fontSize: "18px",
               padding: "12px 20px",
               borderBottom: "1px solid #ebebeb",
               "@media (max-width:540px)": {
                 display: "none",
               },
             }}
           >
        My Wishlist
      </Typography>

       <Box sx={{ padding: "20px" }}>

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
          <CardCollection
          products={productsItem}
          showProductCountAndSort={false}
          onProductClick={handleProductClick}
          columns={3}
        />
        )}
        {tabIndex === 2 && (
          <CardCollection
          products={productsItem}
          showProductCountAndSort={false}
          onProductClick={handleProductClick}
          columns={3}
        />
        )}
        {tabIndex === 3 && (
         <CardCollection
         products={productsItem}
         showProductCountAndSort={false}
         onProductClick={handleProductClick}
         columns={3}
       />
        )}
      </Box>
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
