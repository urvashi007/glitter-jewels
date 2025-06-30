"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import ProductFilterSidebar from "@/components/ProductFilterSidebar";
import CardCollection from "@/components/CardCollection/CardCollection";
import ProductDetailsDrawer from "@/components/ProductDetailsDrawer";
import { Filter } from "@/utils/type";
import { navItems } from "@/utils/navItems";

type Product = {
  id: string;
  price: string;
  gold: string;
  diamond: string;
  image: string;
};

const filters: Filter[] = [
  {
    label: "Price",
    options: [
      { value: "₹5,000 to ₹10,000", count: 3 },
      { value: "₹10,000 to ₹25,000", count: 12 },
      { value: "₹25,000 to ₹50,000", count: 88 },
      { value: "₹50,000 to ₹100,000", count: 20 },
      { value: "₹100,000 and above", count: 11 },
    ],
  },
  {
    label: "Diamond carat",
    options: [
      { value: "0.25 to 0.5 ct", count: 9 },
      { value: "0.5 to 1 ct", count: 7 },
    ],
  },
  {
    label: "Gold Weight",
    options: [
      { value: "2g", count: 5 },
      { value: "5g", count: 8 },
    ],
  },
  {
    label: "Diamond Shape",
    options: [
      { value: "Round", count: 13 },
      { value: "Princess", count: 6 },
      { value: "Emerald", count: 4 },
    ],
  },
];

const productsItem: Product[] = [
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
    id: "Pendant-003-1",
    price: "₹18,000",
    gold: "2g",
    diamond: "0.15ct",
    image: "./Categories/img3.png",
  },
  {
    id: "Bracelet-004-1",
    price: "₹45,000",
    gold: "5g",
    diamond: "0.5ct",
    image: "./Categories/img1.png",
  },
];

export default function ProductListPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  return (
    <>
      <Header
        logoLight="/white-logo.svg"
        logoDark="/logo.svg"
        searchEnabled
        navItems={navItems}
      />

      <InnerBanner
        title="Our Latest Collection"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Latest Collection" },
        ]}
      />

      <Box sx={{ py: { xs: "40px", md: "80px" } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Box
              sx={{
                flexBasis: { xs: "100%", md: "25%" },
                maxWidth: { xs: "100%", md: "25%" },
                order: {
                  
                  sm: 1,
                  xs: 2,
                },
                paddingBottom: {
                  xs: "20px",
                  sm: 0,
                },
              }}
            >
              <ProductFilterSidebar filters={filters} />
            </Box>

            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: "100%", md: "75%" },
                order: {
                  
                  sm: 2,
                  xs: 1,
                },
              }}
            >
              <CardCollection
                products={productsItem}
                columns={3}
                showProductCountAndSort
                onProductClick={handleProductClick}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />

      <ProductDetailsDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
