
"use client";

import BreadcrumbsBar from "@/components/BreadcrumbsBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { navItems } from "@/utils/navItems";
import { customVars } from "@/utils/theme";
import { Box, Container, Typography, } from "@mui/material";
import Image from "next/image";


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
  sx={(theme) => ({
    ...theme.mixins.sectionLayout,
    paddingTop: { xs: '50px',},
  })}
>
        <Container maxWidth="lg">
          <Box mb={5}>
          <BreadcrumbsBar />
          </Box>
          <Box mb={4}>
          <Typography variant="h2" fontWeight={700} gutterBottom sx={{marginBottom:'15px'}}>
            About AVD Glitter Jewels
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" mb={1} sx={{color:'#5E5E5E', fontWeight:'500'}}>
          Published On : June 16, 2025 &nbsp;&nbsp; | &nbsp;&nbsp; Author Name : Abhijeet Sharma  &nbsp;&nbsp; | &nbsp;&nbsp; Ring
                </Typography>
                </Box>
           
           <Box sx={{color:customVars.colors.color5e5e5e,}}>
          <Typography mb={2} sx={{fontFamily:customVars.fontFamily.secondary}}>
            It is a long established fact that a reader will be distracted by the readable content of a page
            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Typography>
          <Typography mb={2} sx={{fontFamily:customVars.fontFamily.secondary}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
            of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
            Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
          </Typography>
        
          </Box>

          <Box mt={4} sx={{ borderRadius: 1, overflow: "hidden" }}>
            <Image
              src="/about-us.jpg"
              alt="About AVD Glitter Jewels"
              width={1200}
              height={700}
              style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </Box>
        </Container>
      </Box>
      <Footer />
      </>
  );
}
