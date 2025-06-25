"use client";

import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import PriceDetailsCard from "@/components/PriceDetailsCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiscountDrawer from "@/components/DiscountDrawer";
import DeliveryDetailsCard from "@/components/DeliveryDetailsCard";
import NoAddressCard from "@/components/NoAddressCard";
import AddressDrawer from "@/components/AddressDrawer";
import { Address } from "@/utils/address";
import ManageAddresses from "@/components/ManageAddresses";

const priceDetailsData = {
  itemsTotal: "₹88,519",
  discount: "₹0",
  subtotal: "₹88,519",
  delivery: "Free",
  deliveryFree: true,
  totalItems: 3,
  totalAmount: "₹1,828",
  paymentMethod: "Credit Card",
  HeadingReq: "Discount",
  subHeadReq: "Price Details",
};

const deliveryDetailsData = {
  name: "Ashish Sharma",
  address: "S-4A, kabir marg, bani park, Jaipur, Rajasthan 302016, India",
  mobile: "8201475558",
};

export default function OrderSummaryPage() {
  const [appliedDiscount, setAppliedDiscount] = useState("FLAT300");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [addressDrawerOpen, setAddressDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleRemoveDiscount = () => {
    setAppliedDiscount("");
  };

  const handleSaveAddress = (newAddress: Address) => {
    console.log("Saved address:", newAddress);
    // You can update a list of addresses here
  };

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
        stepperReq={true}
      />


      <Box sx={{ background: "#E5E9F5", padding: "200px 0 80px 0" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            {/* Left Section */}
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "Manrope",
                  }}
                >
                  Delivery Details
                </Typography>
              </Box>

              <DeliveryDetailsCard
                HeadReq="Delivery Details"
                {...deliveryDetailsData}
                checkboxLabel="Make shipping address same as billing address."
                checked={isSameAddress}
                onCheck={(val) => setIsSameAddress(val)}
              />

              <Box sx={{ marginTop: "20px" }}>
                <NoAddressCard onAdd={() => setAddressDrawerOpen(true)} />
                <Box sx={{ marginTop: "20px" }}>
                  <ManageAddresses />
                  </Box>
              </Box>
            </Box>
            

            {/* Right Section */}
            <Box sx={(theme) => theme.mixins.stickySidebar}>
              <PriceDetailsCard
                {...priceDetailsData}
                appliedDiscountCode={appliedDiscount}
                onRemoveDiscount={handleRemoveDiscount}
                showPaymentInfo={false}
                showDiscountSection={true}
                subHeadReq={"Price Details"}
                secondaryButtonText="Continue"
                secondaryButtonOnClick={handleDrawerOpen}
                backToCart="back to cart"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <DiscountDrawer open={drawerOpen} onClose={handleDrawerClose} />

      <AddressDrawer
        open={addressDrawerOpen}
        onClose={() => setAddressDrawerOpen(false)}
        onSave={handleSaveAddress}
        initialData={null}
      />

      <Footer />
    </>
  );
}
