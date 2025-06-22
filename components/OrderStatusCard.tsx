"use client";

import { Box, Typography, IconButton, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export type OrderStatus =
  | "Order Process"
  | "In Production"
  | "Dispatch"
  | "Certification";

type Props = {
  status: OrderStatus;
  orderId: string;
  paymentType: "Full" | "Partial";
  orderDate: string;
  amount: string;
  onClick?: () => void;
};

const statusStyles: Record<OrderStatus, { bg: string; color: string }> = {
  "Order Process": { bg: "#F4E2BE", color: "#BD7B00" },
  "In Production": { bg: "#D8EBF9", color: "#1D77C4" },
  Dispatch: { bg: "#E1F2EA", color: "#2E9155" },
  Certification: { bg: "#FEE0D5", color: "#DD5A2E" },
};

export default function OrderStatusCard({
  status,
  orderId,
  paymentType,
  orderDate,
  amount,
  onClick,
}: Props) {
  const statusStyle = statusStyles[status];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid #ebebeb"
      sx={{
        backgroundColor: "#fff",
        padding: "20px",
        // cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      {/* Left Section */}
      <Box flex={1}>
        <Box
          display="inline-block"
          px={1}
          py={0.5}
          mb={1}
          fontSize={12}
          fontWeight={500}
          sx={{
            backgroundColor: statusStyle.bg,
            color: statusStyle.color,
            fontFamily: "Jost",
            padding: "2px 6px",
          }}
        >
          {status}
        </Box>

        <Typography
          variant="body2"
          fontWeight={400}
          sx={{ color: "#5e5e5e", fontFamily: "Jost",marginTop:'8px' }}
        >
          Oder ID: <Box component="span" sx={{ color: "#222", fontWeight: 500 }}>#{orderId}</Box> &nbsp;•&nbsp; Payment Type:{" "}
          <Box component="span" sx={{ color: "#222", fontWeight: 500 }}>{paymentType}</Box> &nbsp;•&nbsp; Order Date:{" "}
          <Box component="span" sx={{ color: "#222", fontWeight: 500 }}>
            {orderDate}
          </Box>
        </Typography>

        <Typography
          variant="h6"
          fontWeight={600}
          mt={1}
          sx={{color: "#222", fontSize:'20px' }}
        >
          ₹ {amount}
        </Typography>
      </Box>

      <Link href="/order-summary-page">
      {/* Right Arrow */}
      <IconButton sx={{ color: "#404040" }}>
        <ChevronRightIcon />
      </IconButton>
      </Link>
    </Box>
  );
}
