"use client";

import { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import PriceDetailsCard from "@/components/PriceDetailsCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiscountDrawer from "@/components/DiscountDrawer";
import DeliveryDetailsCard from "@/components/DeliveryDetailsCard";
import AddressDrawer from "@/components/AddressDrawer";
import { Address } from "@/utils/address";
import SingleOrderCard, { OrderCardProps } from "@/components/SingleOrderCard";
import OrderInfoRow from "@/components/OrdersInfoRow";

const orders: OrderCardProps[] = [
  {
    id: "NK00381",
    image: "/Categories/img1.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "White",
    diaQuality: "FL",
    status: "",
    statusColor: "#B06900",
    price: "27,774",
    styleCode: "",
    arrowReq: false,
  },
  {
    id: "NK00381",
    image: "/Categories/img1.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "White",
    diaQuality: "FL",
    status: "",
    statusColor: "#B06900",
    price: "27,774",
    styleCode: "",
    arrowReq: false,
  },
  {
    id: "NK00381",
    image: "/Categories/img1.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "White",
    diaQuality: "FL",
    status: "",
    statusColor: "#B06900",
    price: "27,774",
    styleCode: "",
    arrowReq: false,
  },
  {
    id: "NK00381",
    image: "/Categories/img1.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "White",
    diaQuality: "FL",
    status: "",
    statusColor: "#B06900",
    price: "27,774",
    styleCode: "",
    arrowReq: false,
  },
  {
    id: "NK00381",
    image: "/Categories/img1.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "White",
    diaQuality: "FL",
    status: "",
    statusColor: "#B06900",
    price: "27,774",
    styleCode: "",
    arrowReq: false,
  },
];
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [addressDrawerOpen, setAddressDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleSaveAddress = (newAddress: Address) => {
    console.log("Saved address:", newAddress);
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
      />

      <Box sx={(theme) => theme.mixins.sectionLayout}>
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
                  variant="h6"
                >
                  Order Details
                </Typography>
              </Box>

              <DeliveryDetailsCard
                HeadReq="Delivery Details"
                {...deliveryDetailsData}
              />
              <Box sx={{ marginTop: "24px" }}>
                <Stack
                  spacing={2}
                  sx={{
                    "& > :not(style) ~ :not(style)": {
                      marginTop: 0,
                    },
                  }}
                >
                  <Box p={2} sx={{ background: "#fff" }}>
                    <OrderInfoRow
                      orderId="22201"
                      paymentType="Full"
                      orderDate="10 June 2025"
                      orderStatus="Order Process"
                      statusBgColor="#F6EEE3"
                      statusTextColor="#AD5B00"
                    />
                  </Box>
                  {orders.map((order) => (
                    <SingleOrderCard
                      key={order.id + order.styleCode}
                      {...order}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>

            {/* Right Section */}
            <Box sx={(theme) => theme.mixins.stickySidebar}>
              <PriceDetailsCard
                {...priceDetailsData}
                showPaymentInfo={true}
                showDiscountSection={false}
                subHeadReq={"Price Details"}
                secondaryButtonOnClick={handleDrawerOpen}
                HeadingReq={""}
                primaryButtonVariant="customBtn"
                primaryButtonText="BACK TO MY ACCOUNT"
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
