
"use client";

import BlogGrid from "@/components/BlogGrid";
import BreadcrumbsBar from "@/components/BreadcrumbsBar";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { navItems } from "@/utils/navItems";

import { Box, Container, } from "@mui/material";



export default function AboutPage() {
  return (
      <>
      <Header
      logoLight=""
      logoDark="/logo.svg"
      navItems={navItems}
      forceScrolled={true}
        />
   <Box
  sx={{
    pt: { xs: "50px", md: "120px" },
    pb: "80px",
  }}
>    <Container maxWidth="lg">
             <Box mb={5}>
                     <BreadcrumbsBar />
                     </Box>
        <BlogGrid />
        </Container>
      </Box>
      <Footer />
      </>
  );
}
