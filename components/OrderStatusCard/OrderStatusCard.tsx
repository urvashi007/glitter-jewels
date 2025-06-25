"use client";

import { Box, Typography, IconButton, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { amountText, cardContainer, iconButton, orderText, statusBadge, textHighlight } from "./OrderStatusCard.style";

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
  const { bg, color } = statusStyles[status];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={cardContainer}
      onClick={onClick}
    >
      {/* Left Section */}
      <Box flex={1}>
        <Box sx={statusBadge(bg, color)}>{status}</Box>

        <Typography variant="body2" fontWeight={400} sx={orderText}>
          Oder ID: <Box component="span" sx={textHighlight}>#{orderId}</Box>
          &nbsp;•&nbsp; Payment Type:{" "}
          <Box component="span" sx={textHighlight}>{paymentType}</Box>
          &nbsp;•&nbsp; Order Date:{" "}
          <Box component="span" sx={textHighlight}>{orderDate}</Box>
        </Typography>

        <Typography variant="h6" sx={amountText}>
          ₹ {amount}
        </Typography>
      </Box>

      <Link href="/order-summary-page">
        <IconButton sx={iconButton}>
          <ChevronRightIcon />
        </IconButton>
      </Link>
    </Box>
  );
}
