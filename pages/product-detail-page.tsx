"use client";

import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import BreadcrumbsBar from "@/components/BreadcrumbsBar";
import CustomOrderForm from "@/components/CustomOrderForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery/ProductGallery";
import { customVars } from "@/utils/theme";
import { navItems } from "@/utils/navItems";

export default function ProductDetail() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const deviceType = isMobile ? "mobile" : "desktop";

  return (
    <>
      <Header
        logoLight=""
        logoDark="/logo.svg"
       navItems={navItems}
        forceScrolled
      />

       <Box sx={(theme) => theme.mixins.sectionLayout}>
        <Container maxWidth="lg">
          {deviceType === "desktop" && <BreadcrumbsBar />}

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "flex-start",
            }}
          >
            {/* Gallery */}
            <Box
              sx={{
                minWidth: { md: "640px", lg: "640px" },
                width: { xs: "100%", md: "auto" },
                "@media (max-width:1024px)": {
                  minWidth: "460px",
                },
                "@media (max-width:768px)": {
                  minWidth: "100%",
                },
              }}
            >
              <ProductGallery />
            </Box>

            {/* Order Form */}
            <Box sx={(theme) => theme.mixins.stickySidebar}>
              <Box sx={{background:customVars.background.whitebg, padding:'20px' }}>
              <CustomOrderForm
                showAccordion
                wishlistHead
                accordionTitle="Specification and Description"
                accordionContent={
                  <>
                    <Typography
                      variant="body2"
                      sx={{ color: "#333", fontSize: "14px", mb: 2 }}
                    >
                      *All item(s) weights and prices are approximate. Items
                      displayed weight and price are based on the item&apos;s
                      stock finger size. Any and all items which are ordered in
                      specific finger size will incur an increase or decrease in
                      metal weight which is NOT reflected in the estimate price.
                    </Typography>

                    <Table sx={{ border: "1px solid #e0e0e0", mt: 2 }}>
                      <TableBody>
                        {[
                          ["Metal Type", "14KT WHITE GOLD"],
                          ["Est. Metal weight", "15.00"],
                          ["Recommended diamond shapes", "15.00"],
                          ["Sidestones Total Weight (Ct)", "15.00"],
                          ["Sidestone Color and Quality", "15.00"],
                          ["Number of Sidestones", "15.00"],
                          ["Pendant Height", "15.00"],
                          ["Pendant Width", "15.00"],
                          ["Pendant Length", "15.00"],
                          ["Pendant Diameter", "15.00"],
                          ["Supplied Sidestones", "15.00"],
                          ["Additional Stones (Not Supplied)", "15.00"],
                        ].map(([label, value], index) => (
                          <TableRow key={index}>
                            <TableCell sx={{ fontSize: "14px", color: "#444" }}>
                              {label}
                            </TableCell>
                            <TableCell
                              sx={{ fontSize: "14px", fontWeight: 500 }}
                            >
                              {value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </>
                }
              />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
