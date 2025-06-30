"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";

import HeroBanner from "@/components/HeroBanner/Banner";
import CardCollection, { Product } from "@/components/CardCollection/CardCollection";
import CategoriesSection from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCardBanner from "@/components/InfoCardBanner";
import ProductDetailsDrawer from "@/components/ProductDetailsDrawer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { customVars } from "@/utils/theme";
import { navItems } from "@/utils/navItems";

const productsItem: Product[] = [
  {
    id: "Ring-001",
    price: "₹25,000",
    gold: "2.5g",
    diamond: "0.25ct",
    image: "/Categories/img1.png",
  },
  {
    id: "Ring-002",
    price: "₹32,500",
    gold: "3g",
    diamond: "0.35ct",
    image: "/Categories/img2.png",
  },
  {
    id: "Pendant-003",
    price: "₹18,000",
    gold: "2g",
    diamond: "0.15ct",
    image: "/Categories/img3.png",
  },
  {
    id: "Bracelet-004",
    price: "₹45,000",
    gold: "5g",
    diamond: "0.5ct",
    image: "/Categories/img1.png",
  },
];

const infoCards = [
  {
    image: "/info1.jpg",
    title: "Custom Design",
    description:
      "Our Unique Settings staff is highly dedicated and trained in delivering exceptional quality and service.",
      buttonText:'Make an Order',
  },
  {
    image: "/info2.jpg",
    title: "Services",
    description:
      "We offer exquisite jewelry services including custom designs, repairs, and personalized styling to elevate your elegance.",
      buttonText:'Check Now'
  },
];



export default function HomePage() {
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
        searchEnabled={true}
        navItems={navItems}
      />

      <HeroBanner
        backgroundImage="/hero-banner.png"
        title="Polychroma High Jewellery Collection"
        subtitle="A celebration of Bvlgari’s mastery in reinventing forms and colours, Polychroma embodies a distinctive High Jewellery vision."
        buttonText="Discover the collection"
      />

      <FadeInOnScroll>
      <Box sx={{background:customVars.background.whitebg }}>
        <CategoriesSection />
        </Box>
      </FadeInOnScroll>

      <FadeInOnScroll>
 
      <Container maxWidth="lg">
        <Box maxWidth="lg" sx={{ mx: "auto", py: 10, background:customVars.background.whitebg }}>
          <CardCollection
          
            products={productsItem}
            title="Our Latest Collection"
            viewAllLink="/products"
            showProductCountAndSort={false}
            onProductClick={handleProductClick}
            columns = {4}
          />
        </Box>
        </Container>
   
      </FadeInOnScroll>

      <FadeInOnScroll>
        <InfoCardBanner
          image="/info-banner.png"
          title="Introducing Our New High Jewellery Collection"
          description="Sea of Wonder is a mesmerizing tribute to the beauty and rhythm of the ocean. The new high jewelry expression reinterprets archival Jean Schlumberger creations in breathtaking new designs."
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

      </FadeInOnScroll>
     

      <FadeInOnScroll>
      <Container maxWidth="lg">
        <Box maxWidth="lg" sx={{ mx: "auto", py: 10 }}>
          <CardCollection
            products={productsItem}
            title="Our Bestsellers"
            showProductCountAndSort={false}
            viewAllLink="/products"
            onProductClick={handleProductClick}
            columns = {4}
          />
        </Box>
        </Container>

      </FadeInOnScroll>
     

        <FadeInOnScroll>
        <Box sx={{background:customVars.background.whitebg }}>
        <Container maxWidth="lg" sx={{ p: 0 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 6,
              py: 10,
              "@media (max-width:540px)": {
                paddingTop:'0',
              },
            }}
          >
            {infoCards.map((card, index) => (
              <FadeInOnScroll key={index} delay={0.1 * index}>
                <InfoCardBanner
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  enableZoom
                  sx={{
                    alignItems: "inherit",
                    padding: "48px",
                    height: { xs: "400px", sm: "620px" },
                  }}
                />
              </FadeInOnScroll>
            ))}
          </Box>
          </Container>
          </Box>
        </FadeInOnScroll>
     
        <FadeInOnScroll>
      <Footer />

      </FadeInOnScroll>    
      <ProductDetailsDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />
      <ScrollToTopButton />
    </>
  );
}
