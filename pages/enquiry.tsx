"use client";

import EnquiryDetails from "@/components/EnquiryDetails";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";

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
        title="Enquiry"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Enquiry" },
        ]}
      />

<Box
  sx={(theme) => ({
    ...theme.mixins.sectionLayout,
    paddingTop: { xs: '50px',},
  })}
>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: "column-reverse", md: "row" }}
            gap={8}
          >
            <Box flex={1}>
              <EnquiryDetails />
            </Box>
            <Box flex={{ md: "0 0 55%", xs: "1 1 auto" }}>
              <EnquiryForm />
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
