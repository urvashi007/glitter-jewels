"use client";

import { Box, Container, Typography } from "@mui/material";
import DeliveryDetailsCard from "../components/DeliveryDetailsCard";
import PriceDetailsCard from "@/components/PriceDetailsCard";
import SingleOrderCard, { OrderCardProps } from "@/components/SingleOrderCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const priceDetailsData = {
  itemsTotal: "₹88,519",
  discount: "₹0",
  subtotal: "₹88,519",
  delivery: "Free",
  deliveryFree: true,
  totalItems: 3,
  totalAmount: "₹1,828",
  paymentMethod: "Credit Card",
};

const singleCardDta: OrderCardProps[] = [
  {
    id: "NK00381",
    image: "/Categories/img1.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "White",
    diaQuality: "FL",
    status: "InProduction",
    statusColor: "#B06900",
    price: "₹ 27,774",
    styleCode: "JDSRNG00771",
    arrowReq: false,
  },
];
const deliveryDetailsData = {
  name: "Ashish Sharma",
  address: "S-4A, kabir marg, bani park, Jaipur, Rajasthan 302016, India",
  mobile: "8201475558",
};

export default function OrderSummaryPage() {
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

      <Box sx={{ background: "#E5E9F5", padding: "100px 0 80px 0" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ fontSize: "30px", fontWeight: "700", marginBottom: "24px" }}
          >
            Order Details
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}
          > 
            <Box sx={{ flex: 1 }}>
              {singleCardDta.map((order) => (
                <SingleOrderCard key={order.id + order.styleCode} {...order} />
              ))}
              <Box mt={2}>
              <DeliveryDetailsCard {...deliveryDetailsData} />
              </Box>
            </Box>

            <Box sx={{ width: { xs: "100%", md: 416 } }}>
              <PriceDetailsCard {...priceDetailsData} />
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
