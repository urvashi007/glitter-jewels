"use client";

import HeroBanner from "@/components/Banner";
import CardCollection, { Product } from "@/components/CardCollection";
import CategoriesSection from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCardBanner from "@/components/InfoCardBanner";
import ProductDetailsDrawer from "@/components/ProductDetailsDrawer";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function HomePage() {
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

  const productsItem2 = [...productsItem];

  const infoCards = [
    {
      image: "./info1.jpg",
      title: "Custom Design",
      description:
        "Our Unique Settings staff is highly dedicated and trained in delivering exceptional quality and service.",
    },
    {
      image: "./info2.jpg",
      title: "Services",
      description:
        "We offer exquisite jewelry services including custom designs, repairs, and personalized styling to elevate your elegance.",
    },
  ];

  return (
    <>
      {/* Header */}
      <Header
        logoLight="/white-logo.svg"
        logoDark="/logo.svg"
        searchEnabled={true}
        navItems={[
          { label: "Our Expertise" },
          {
            label: "Product",
            submenu: [
              "Bracelets",
              "Earrings",
              "Necklace",
              "Pendant",
              "Rings",
              "View All",
            ],
          },
          { label: "Enquiry" },
        ]}
      />
      {/* Banner */}
      <HeroBanner
        backgroundImage="./hero-banner.png"
        title="Polychroma High Jewellery Collection"
        subtitle="A celebration of Bvlgari’s mastery in reinventing forms and colours, Polychroma embodies a distinctive High Jewellery vision."
        buttonText="Discover the collection"
      />
      {/* CategoriesSection */}
      <CategoriesSection />

      {/* card collection */}
      <Box maxWidth="lg" sx={{ margin: "0 auto" }}>
        <Box sx={{ padding: "80px 0" }}>
          <CardCollection
            products={productsItem}
            title="Our Latest Collection"
            viewAllLink="/products"
            showProductCountAndSort={false}
            onProductClick={handleProductClick}
          />
        </Box>
      </Box>

      <InfoCardBanner
        image="./info-banner.png"
        title="Introducing Our New High  Jewellery Collection"
        description="Sea of Wonder is a mesmerizing tribute to the beauty and rhythm of the ocean. The new high jewelry expression reinterprets archival Jean Schlumberger creations in breathtaking new designs."
        buttonText="Know More"
        layout="full"
        descriptionWidth="640px"
        sx={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)),
            linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))
          `,
          zIndex: 1,
          "& p": { width: "640px" },
        }}
      />
      <Box maxWidth="lg" sx={{ margin: "0 auto" }}>
        <Box sx={{ padding: "80px 0" }}>
          <CardCollection
            products={productsItem2}
            title="Our Bestsellers"
            showProductCountAndSort={false}
            viewAllLink="/products"
            onProductClick={handleProductClick}
          />
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ padding: "0" }}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "60px",
            padding: "80px 0",
            "@media (max-width:540px)": {
              gridTemplateColumns: "repeat(1, 1fr)",
              padding: "0 0 80px 0",
            },
          }}
        >
          {infoCards.map((card, index) => (
            <Box key={index}>
              <InfoCardBanner
                image={card.image}
                title={card.title}
                description={card.description}
                buttonText="Know More"
                enableZoom
                sx={{
                  alignItems: "inherit",
                  padding: "48px",
                  height: "620px",
                  "@media (max-width:540px)": {
                    height: "400px",
                    padding: "30px 0px",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>

      <Footer />
      <ProductDetailsDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
