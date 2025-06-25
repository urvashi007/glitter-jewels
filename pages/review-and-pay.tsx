"use client";

import { Box, Container, Typography } from "@mui/material";
import DeliveryDetailsCard from "@/components/DeliveryDetailsCard";
import PriceDetailsCard from "@/components/PriceDetailsCard";
import CartSummary from "@/components/CartSummary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import PaymentTabs from "@/components/PaymentTabs";

export default function ReviewAndPayPage() {
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
      <Box sx={{ background: "#E5E9F5", padding: "180px 0 80px 0" }}>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={3}
            alignItems="flex-start"
          >
            <Box flex={2} display="flex" flexDirection="column" gap={3}>
              <Typography
                variant="h5"
                sx={{
                  "@media (max-width:540px)": {
                    marginTop: "30px",
                  },
                }}
              >
                Review & Pay
              </Typography>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={3}
              >
                <Box
                  flex={1}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    minHeight: "300px",
                    backgroundColor: "#fff",
                  }}
                >
                  <DeliveryDetailsCard
                    name="Ashish Sharma"
                    address="S-4A, kabir marg, bani park, Jaipur, Rajasthan 302016, India"
                    mobile="8201478885"
                    HeadReq="Review & Pay"
                    LinkReq="Change"
                  />
                </Box>
                <Box flex={1}>
                  <PriceDetailsCard
                    HeadingReq={"Price Details"}
                    itemsTotal={"₹88,519"}
                    discount={"₹0"}
                    subtotal={"₹88,519"}
                    delivery={"Free"}
                    deliveryFree={false}
                    totalItems={0}
                    totalAmount={"₹88,519"}
                    paymentMethod={""}
                    showPaymentInfo={false}
                  />
                </Box>
              </Box>

              <Box>
                <PaymentTabs />
              </Box>
            </Box>

            <Box
              flex={{ xs: "unset", md: 1 }}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "auto",
                },
              }}
            >
              <CartSummary />
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
