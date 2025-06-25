"use client";

import { Box, Typography, } from "@mui/material";
import OrderStatusCard, { OrderStatus } from "./OrderStatusCard/OrderStatusCard";
import { customVars } from "@/utils/theme";

const orders: {
  status: OrderStatus;
  orderId: string;
  paymentType: "Full" | "Partial";
  orderDate: string;
  amount: string;
}[] = [
  {
    status: "Order Process",
    orderId: "22201",
    paymentType: "Partial",
    orderDate: "10 June 2025",
    amount: "88,519",
  },
  {
    status: "In Production",
    orderId: "22202",
    paymentType: "Full",
    orderDate: "10 June 2025",
    amount: "27,774",
  },
  {
    status: "Dispatch",
    orderId: "22203",
    paymentType: "Partial",
    orderDate: "10 June 2025",
    amount: "27,774",
  },
  {
    status: "Certification",
    orderId: "22204",
    paymentType: "Full",
    orderDate: "10 June 2025",
    amount: "27,774",
  },
];


const MyOrders = () => {
  return (
    <Box>
      <Box flex={1} sx={{ background: "#fff" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: customVars.fontSizes.md,
            marginBottom: 0,
            padding: "12px 20px",
            borderBottom:'1px solid #d5d5d5',
          }}
        >
          My Orders
        </Typography>
        <Box p={2}>
      {orders.map((order) => (
        <OrderStatusCard
          key={order.orderId}
          status={order.status}
          orderId={order.orderId}
          paymentType={order.paymentType}
          orderDate={order.orderDate}
          amount={order.amount}
          onClick={() => {
            console.log("Clicked order:", order.orderId);
          }}
        />
      ))}
    </Box>
      </Box>
    </Box>
  );
};

export default MyOrders;
