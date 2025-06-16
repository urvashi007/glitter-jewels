"use client";

import { Box, Typography, Stack, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const orders = [
  {
    id: "BRC0016O",
    image: "/images/jewellery-1.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "Yellow",
    diaQuality: "FL",
    status: "Order Process",
    statusColor: "#F2994A",
    price: "₹ 27,774",
    styleCode: "JDSRNG00771",
  },
  {
    id: "NK00381",
    image: "/images/jewellery-2.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "White",
    diaQuality: "FL",
    status: "InProduction",
    statusColor: "#2F80ED",
    price: "₹ 27,774",
    styleCode: "JDSRNG00771",
  },
  {
    id: "PS0064ER1",
    image: "/images/jewellery-3.png",
    goldWt: "0.51",
    diaWt: "0.81",
    metalType: "14KT",
    metalColor: "Rose",
    diaQuality: "FL",
    status: "Dispatch",
    statusColor: "#27AE60",
    price: "₹ 27,774",
    styleCode: "JDSRNG00771",
  },
];

const OrderListSlide = () => {
  return (
    <Box flex={1}>
      <Typography variant="h6" fontWeight={600} mb={2}>My Orders</Typography>
      <Stack spacing={2}>
        {orders.map((order) => (
          <Box key={order.id} display="flex" bgcolor="#fff" p={2} borderRadius="8px" alignItems="center">
            <Box width="80px" height="80px" flexShrink={0}>
              <img src={order.image} alt={order.id} style={{ width: "100%", height: "auto" }} />
            </Box>
            <Box flex={1} ml={2}>
              <Typography fontWeight="600">{order.id}</Typography>
              <Typography variant="body2" mt={0.5}>
                Gold W: <b>{order.goldWt}</b> • Dia. WT: <b>{order.diaWt}</b> • Style code: <b>{order.styleCode}</b>
              </Typography>
              <Typography variant="body2" mt={0.5}>
                Metal Type: {order.metalType} • Metal Color: <span style={{ color: order.metalColor === "Yellow" ? "#F2C94C" : order.metalColor === "Rose" ? "#FADADD" : "#ccc" }}>⬤</span> • Dia. Quality: {order.diaQuality}
              </Typography>
              <Typography variant="body2" mt={0.5}>
                Quantity: 1 • <span style={{ color: order.statusColor }}>{order.status}</span>
              </Typography>
              <Typography fontWeight="600" fontSize="18px" mt={1}>{order.price}</Typography>
            </Box>
            <IconButton><ChevronRightIcon /></IconButton>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default OrderListSlide;