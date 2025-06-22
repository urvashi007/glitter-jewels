"use client";

import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#DFDFDF", pt: 6, pb: 2 }}>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)",  "@media (max-width:540px)": {
           gridTemplateColumns: "repeat(1, 1fr)", gap:'30px'
          },}}
        >
          <Grid>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              sx={{ fontSize: "18px", fontFamily: "Manrope" ,  "@media (max-width:540px)": {
                fontSize:'18px',
               },}}
            >
              Categories
            </Typography>
            <Stack spacing={1} sx={{fontSize:'14px'}}>
              {[
                "Engagement Rings",
                "Wedding Bands",
                "Engagement Sets",
                "Eternity Bands",
                "Band Sets",
                "Fancy Rings",
                "Pendants",
              ].map((item) => (
                <Link key={item} href="#" underline="none" color="#404040" sx={{fontSize:'14px', fontFamily:'jost',fontWeight:400}}>
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              sx={{ fontSize: "18px", fontFamily: "Manrope"}}
            >
              Services
            </Typography>
            <Stack spacing={1} sx={{fontSize:'14px',}}>
              {[
                "Casting Services",
                "Finished Jewelry",
                "New Model-CAD-Customization",
                "Precious Metal Options",
                "Setting and Finishing",
                "Customization Service",
                "My Virtual Webstore",
              ].map((item) => (
                <Link key={item} href="#" underline="none" color="#404040" sx={{fontSize:'14px', fontFamily:'jost',fontWeight:400}}>
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              sx={{ fontSize: "18px", fontFamily: "Manrope"}}
            >
              Important Links
            </Typography>
            <Stack spacing={1} sx={{fontSize:'14px'}}>
              {["About Us", "Product", "Diamond", "Contact Us"].map((item) => (
                <Link key={item} href="#" underline="none" color="#404040" sx={{fontSize:'14px', fontFamily:'jost',fontWeight:400}}>
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

       
          <Grid>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              sx={{ fontSize: "18px", fontFamily: "Manrope"}}
            >
              Get In Touch
            </Typography>
            <Stack spacing={1}>
              <Link
                href="#"
                underline="none"
                color="#404040"
                display="flex"
                alignItems="center"
                sx={{fontSize:'14px', fontFamily:'jost',fontWeight:400}}
              >
                <FacebookIcon sx={{ mr: 1 }} /> Facebook
              </Link>
              <Link
                href="#"
                underline="none"
                color="#404040"
                display="flex"
                alignItems="center"
                sx={{fontSize:'14px', fontFamily:'jost',fontWeight:400}}
              >
                <InstagramIcon sx={{ mr: 1 }} /> Instagram
              </Link>
              <Link
                href="#"
                underline="none"
                color="#404040"
                display="flex"
                alignItems="center"
                sx={{fontSize:'14px', fontFamily:'jost',fontWeight:400}}
              >
                <WhatsAppIcon sx={{ mr: 1 }} /> WhatsApp (+91 9869548525)
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #333",
            mt: 4,
            pt: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="#404040" sx={{fontSize:'14px', fontFamily:'jost',fontWeight:400}}>
            Copyright © 2025 Glitter Jewels. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3} mt={{ xs: 2, sm: 0 }}>
            <Link href="#" underline="none" color="#404040" sx={{fontSize:'14px', fontFamily:'jost',fontWeight:400}}>
              Privacy Policy
            </Link>
            <Link href="#" underline="none" color="#404040"sx={{fontSize:'14px', fontFamily:'jost',fontWeight:400}} >
              Terms & Conditions
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
