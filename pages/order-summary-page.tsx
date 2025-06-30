"use client";

import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import DeliveryDetailsCard from "../components/DeliveryDetailsCard";
import PriceDetailsCard from "@/components/PriceDetailsCard";
import SingleOrderCard, { OrderCardProps } from "@/components/SingleOrderCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { navItems } from "@/utils/navItems";

const initialCardData: OrderCardProps[] = [
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
    styleCode: "JDSRNG00771",
    arrowReq: false,
    checked: false,
    quantity: 1,
    onCheck: () => {},
    onQuantityChange: () => {},
    onEditHref: "/edit/NK00381",
    showCheckbox: false,
    showEdit: false,
    showSelect: false,
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
  HeadingReq: "Price Details",
};

const deliveryDetailsData = {
  name: "Ashish Sharma",
  address: "S-4A, kabir marg, bani park, Jaipur, Rajasthan 302016, India",
  mobile: "8201475558",
};

export default function OrderSummaryPage() {
  const [orders, setOrders] = useState(initialCardData);
  const [appliedDiscount, setAppliedDiscount] = useState("FLAT300");

  const handleCheck = (index: number, checked: boolean) => {
    const updated = [...orders];
    updated[index].checked = checked;
    setOrders(updated);
  };

  const handleQuantityChange = (index: number, qty: number) => {
    const updated = [...orders];
    updated[index].quantity = qty;
    setOrders(updated);
  };

  const handleRemoveDiscount = () => {
    setAppliedDiscount("");
  };

  return (
    <>
      <Header
        logoLight=""
        logoDark="/logo.svg"
        navItems={navItems}
        forceScrolled={true}
      />

          <Box sx={(theme) => theme.mixins.sectionLayout}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ fontSize: "30px", fontWeight: "700", marginBottom: "24px" }}
          >
            Order Details
          </Typography>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
            <Box sx={{ flex: 1 }}>
              {orders.map((order, index) => (
                <SingleOrderCard
                  key={order.id + order.styleCode}
                  {...order}
                  onCheck={(checked) => handleCheck(index, checked)}
                  onQuantityChange={(qty) => handleQuantityChange(index, qty)}
                />
              ))}

              <Box mt={2}>
                <DeliveryDetailsCard HeadReq={"Delivery Details"} {...deliveryDetailsData} />
              </Box>
            </Box>

            <Box sx={{ width: { xs: "100%", md: 416 } }}>
              <PriceDetailsCard
                {...priceDetailsData}
                appliedDiscountCode={appliedDiscount}
                onRemoveDiscount={handleRemoveDiscount}
                showPaymentInfo={true}
                showDiscountSection={false}
                primaryButtonText="BACK TO MY ACCOUNT"
                primaryButtonVariant="customBtn"
                // secondaryButtonText="CONTINUE SHOPPING"
                // secondaryButtonVariant="contained"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
