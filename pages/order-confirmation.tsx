"use client";

import { Box, Typography, Stack, Button, useMediaQuery } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // MUI filled icon
import { useTheme } from "@mui/material/styles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SingleOrderCard, { OrderCardProps } from "@/components/SingleOrderCard";
import { useState } from "react";
import DeliveryDetailsCard from "@/components/DeliveryDetailsCard";

const initialCardData: OrderCardProps[] = [
  {
    id: "NK00381",
    image: "/Categories/img1.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "Rose",
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
export default function OrderConfirmation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [orders, setOrders] = useState(initialCardData);

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

      <Box sx={{ background: "#EDEFF6", padding:'180px 0px 80px 0' }}>
        <Box
          maxWidth={856}
          mx="auto"
          p={{ xs: 3, md: 4 }}
          bgcolor="#fff"
          boxShadow="0 4px 12px rgba(0,0,0,0.06)"
        >
          <Box textAlign="center" mb={4}>
            <CheckCircleIcon sx={{ fontSize: 56, color: "#0F743B" }} />
            <Typography
              fontSize="24px"
              fontWeight={700}
              color="#0F743B"
              mt={1}
              mb={1}
            >
              Order Confirmed
            </Typography>
            <Typography
              fontSize="14px"
              color="#222"
              sx={{ fontFamily: "jost", fontWeight: "400" }}
            >
              Your order is confirmed. You will receive an order confirmation
              email/SMS shortly <br /> with the expected delivery date for your
              items.
            </Typography>
          </Box>
           <Box sx={{'.MuiBox-root.css-21076y':{padding:'20px 0px'}}}>
          {orders.map((order, index) => (
            <SingleOrderCard
              key={order.id + order.styleCode}
              {...order}
              onCheck={(checked) => handleCheck(index, checked)}
              onQuantityChange={(qty) => handleQuantityChange(index, qty)}
            />
          ))}
          </Box>

          <Box sx={{ border: "1px solid #f2f2f2" }}>
            <DeliveryDetailsCard
              name={
                <>
                  <span style={{ fontWeight: "400", display:'block', fontSize:'16px', color:'#5e5e5e', fontFamily:'jost', marginBottom:'6px' }}>Delivery to:</span>{" "}
                  Ashish Sharma
                </>
              }
              address={
                "S-4A, kabir marg, bani park, Jaipur, Rajasthan 302016, India"
              }
              mobile={"+91-8201478885"}
              HeadReq={""}
            />
          </Box>


          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            justifyContent="flex-end"
            mt={4}
          >
            <Button
              variant="customBtn"
            >
              Continue Shopping
            </Button>
            <Button
              variant="contained"
            >
              View Order
            </Button>
          </Stack>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
