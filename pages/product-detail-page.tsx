"use client";

import CustomOrderForm from "@/components/CustomOrderForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

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
      <Box
        sx={{
          px: { xs: 2, md: 8, padding: "100px 0 80px 0" },
          backgroundColor: "#f5f7fb",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Box sx={{ minWidth: "640px" }}>
              <ProductGallery />
            </Box>
            <Box
              sx={{
                background: "#fff",
                padding: " 20px 20px 20px 20px",
                marginTop: "30px",

                position: "sticky",
                top: "100px"
              }}
            >
              <CustomOrderForm
                showAccordion={true}
                wishlistHead={true}
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
        </Container>
      </Box>
      <Footer />
    </>
  );
}
