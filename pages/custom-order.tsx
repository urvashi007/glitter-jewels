"use client";

import CustomOrderForm from "@/components/CustomOrderForm";
import Footer from "@/components/Footer";

import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import UploadImage from "@/components/UploadImage";
import {Box, Container } from "@mui/material";


export default function ProductListPage() {
  return (
    <>
      <Header
        logoLight="/white-logo.svg"
        logoDark="/logo.svg"
        searchEnabled={true}
        navItems={[
          { label: "Our Expertise" },
          { label: "Product", submenu: ["Bracelets", "Earrings", "Necklace", "Pendant","Rings",'View All'] },
          { label: "Enquiry" },
        ]}
      />
      <InnerBanner
        title="Make Custom Order"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Custom Order" },
        ]}
      />

      <Container maxWidth="lg" sx={{ padding:'80px 0', "@media (max-width:540px)": {
        paddingTop:'50px',
        },  }}>
          <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: '30px',
              fontFamily:'Manrope'
                }}
              >
       <UploadImage />
       <CustomOrderForm />
       </Box>
      </Container>
      <Footer />
    </>
  );
}
