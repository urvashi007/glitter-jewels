"use client";

import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { customVars } from "@/utils/theme";

export default function Footer() {
  const theme = useTheme();

  const linkStyle = {
    fontSize: customVars.fontSizes.sm,
    fontFamily: customVars.fontFamily.secondary,
    fontWeight: 400,
    color: customVars.colors.color404040,
    textDecoration: "none",
  };

  return (
    <Box sx={{ backgroundColor: customVars.background.bgdfdfdf, pt: 6, pb: 2 }}>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            [theme.breakpoints.down("sm")]: {
              gridTemplateColumns: "1fr",
              gap: "30px",
            },
          }}
        >
          {/* Categories */}
          <Grid>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              mb={2}
              sx={{
                fontSize: customVars.fontSizes.md,
                color: customVars.colors.dark,
              }}
            >
              Categories
            </Typography>
            <Stack spacing={1}>
              {[
                "Engagement Rings",
                "Wedding Bands",
                "Engagement Sets",
                "Eternity Bands",
                "Band Sets",
                "Fancy Rings",
                "Pendants",
              ].map((item) => (
                <Link key={item} href="#" sx={linkStyle}>
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              mb={2}
              sx={{
                fontSize: customVars.fontSizes.md,
                color: customVars.colors.dark,
              }}
            >
              Services
            </Typography>
            <Stack spacing={1}>
              {[
                "Casting Services",
                "Finished Jewelry",
                "New Model-CAD-Customization",
                "Precious Metal Options",
                "Setting and Finishing",
                "Customization Service",
                "My Virtual Webstore",
              ].map((item) => (
                <Link key={item} href="#" sx={linkStyle}>
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Important Links */}
          <Grid>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              mb={2}
              sx={{
                fontSize: customVars.fontSizes.md,
                color: customVars.colors.dark,
              }}
            >
              Important Links
            </Typography>
            <Stack spacing={1}>
              {["About Us", "Product", "Diamond", "Contact Us"].map((item) => (
                <Link key={item} href="#" sx={linkStyle}>
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Get in Touch */}
          <Grid>
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
              mb={2}
              sx={{
                fontSize: customVars.fontSizes.md,
                color: customVars.colors.dark,
              }}
            >
              Get In Touch
            </Typography>
            <Stack spacing={1}>
              <Link href="#" sx={{ ...linkStyle, display: "flex", alignItems: "center" }}>
                <FacebookIcon sx={{ mr: 1 }} /> Facebook
              </Link>
              <Link href="#" sx={{ ...linkStyle, display: "flex", alignItems: "center" }}>
                <InstagramIcon sx={{ mr: 1 }} /> Instagram
              </Link>
              <Link href="#" sx={{ ...linkStyle, display: "flex", alignItems: "center" }}>
                <WhatsAppIcon sx={{ mr: 1 }} /> WhatsApp (+91 9869548525)
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: `1px solid ${customVars.colors.color404040}`,
            mt: 4,
            pt: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" fontSize={16} sx={linkStyle}>
            Copyright © 2025 Glitter Jewels. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3} mt={{ xs: 2, sm: 0 }}>
            <Link href="#" sx={linkStyle}>
              Privacy Policy
            </Link>
            <Link href="#" sx={linkStyle}>
              Terms & Conditions
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
