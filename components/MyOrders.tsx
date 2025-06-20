"use client";

import { Box, Typography, Stack } from "@mui/material";
import SingleOrderCard, { OrderCardProps } from "@/components/SingleOrderCard";

const orders: OrderCardProps[] = [
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
    arrowReq: true,
  },
  {
    id: "NK00382",
    image: "/Categories/img2.png",
    goldWt: "0.58",
    diaWt: "0.92",
    metalType: "18KT",
    metalColor: "Yellow",
    diaQuality: "VVS",
    status: "InProduction",
    statusColor: "#005AA7",
    price: "₹ 31,520",
    styleCode: "JDSRNG00812",
    arrowReq: true,
  },
  {
    id: "NK00383",
    image: "/Categories/img1.png",
    goldWt: "0.49",
    diaWt: "0.78",
    metalType: "14KT",
    metalColor: "White",
    diaQuality: "VS",
    status: "InProduction",
    statusColor: "#0F743B",
    price: "₹ 26,140",
    styleCode: "JDSRNG00699",
    arrowReq: true,
  },
];

const MyOrders = () => {
  return (
    <Box>
    <Box flex={1} sx={{ background: "#fff" }}>
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{
          fontSize: "18px",
          marginBottom: 0,
          padding: "12px 20px",
         
          "@media (max-width:540px)": {
            display: "none",
          },
        }}
      >
        My Orders
      </Typography>

      <Stack spacing={2}>
        {orders.map((order) => (
          <SingleOrderCard key={order.id + order.styleCode} {...order} />
        ))}
      </Stack>
    </Box>
    </Box>
  );
};

export default MyOrders;
