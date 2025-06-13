"use client";

import CustomOrderForm from "@/components/CustomOrderForm";
import Footer from "@/components/Footer";

import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import {Container } from "@mui/material";


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

      <Container maxWidth="lg" sx={{ py: 8 }}>
       <CustomOrderForm />
      </Container>
      <Footer />
    </>
  );
}
