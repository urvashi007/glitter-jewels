"use client";

import CustomOrderForm from "@/components/CustomOrderForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import { Box, Container } from "@mui/material";

export default function ProductDetail() {
  return (
    <>
      <Header
        logoLight=""
        logoDark="/logo.svg"
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
        forceScrolled={true}
      />
      <Box sx={{ px: { xs: 2, md: 8, padding:'100px 0 80px 0' }, backgroundColor: "#f5f7fb" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start", 
              flexDirection: { xs: "column", md: "row", },
              gap: 4,
            }}
          >
             <Box sx={{minWidth:'700px'}}>
            <ProductGallery />
            </Box>
            <Box
            sx={{
              background: "#fff",
              padding: "20px",
              marginTop:'30px',
              "& .MuiTypography-root": {
                marginBottom: 0,
              },
            }}
          >            <CustomOrderForm heading={""} />
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
