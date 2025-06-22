"use client";

import { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import PriceDetailsCard from "@/components/PriceDetailsCard";
import SingleOrderCard, { OrderCardProps } from "@/components/SingleOrderCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiscountDrawer from "@/components/DiscountDrawer";

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
  HeadingReq: "Discount",
  subHeadReq: "Price Details",
};

export default function OrderSummaryPage() {
  const [orders, setOrders] = useState(initialCardData);
  const [appliedDiscount, setAppliedDiscount] = useState("FLAT300");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

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

      <Box sx={{ background: "#E5E9F5", padding: "160px 0 80px 0" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
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
                  Cart ({orders.length})
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      fontFamily: "Jost",
                      cursor: "pointer",
                    }}
                  >
                    Move to wishlist
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      fontFamily: "Jost",
                      cursor: "pointer",
                      position: "relative",
                      paddingLeft: "16px",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: "16px",
                        borderLeft: "1px solid #A6A6A6",
                      },
                    }}
                  >
                    Remove
                  </Typography>
                </Stack>
              </Box>

              {orders.map((order, index) => (
                <SingleOrderCard
                  key={order.id + order.styleCode}
                  {...order}
                  onCheck={(checked) => handleCheck(index, checked)}
                  onQuantityChange={(qty) => handleQuantityChange(index, qty)}
                  showCheckbox={true}
                  showEdit={true}
                  showSelect={true}
                  
                />
              ))}
            </Box>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: 416,
                },
                position: {
                  md: "sticky",
                },
                top: {
                  md: "150px",
                },
                alignSelf: "flex-start",
              }}
            >
              <PriceDetailsCard
                {...priceDetailsData}
                appliedDiscountCode={appliedDiscount}
                onRemoveDiscount={handleRemoveDiscount}
                showPaymentInfo={false}
                showDiscountSection={true}
                subHeadReq={"Price Details"}
                secondaryButtonText="Continue"
                secondaryButtonOnClick={handleDrawerOpen}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <DiscountDrawer open={drawerOpen} onClose={handleDrawerClose} />

      <Footer />
    </>
  );
}
