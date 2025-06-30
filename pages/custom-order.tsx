"use client";

import CustomOrderForm from "@/components/CustomOrderForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import UploadImage from "@/components/UploadImage/UploadImage";
import { navItems } from "@/utils/navItems";

import { Box, Container } from "@mui/material";

export default function ProductListPage() {
  return (
    <>
      <Header
        logoLight="/white-logo.svg"
        logoDark="/logo.svg"
        searchEnabled
        navItems={navItems}
      />

      <InnerBanner
        title="Make Custom Order"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Custom Order" },
        ]}
      />

      <Container
        maxWidth="lg"
        sx={{
          py: { xs: "50px", sm: "60px", md: "80px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "24px", md: "30px" },
            fontFamily: "Manrope, sans-serif",
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
