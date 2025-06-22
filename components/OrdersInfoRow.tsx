"use client";

import { Box, Typography } from "@mui/material";

type OrderInfoRowProps = {
  orderId: string;
  paymentType: "Full" | "Partial";
  orderDate: string;
  orderStatus: string;
  statusBgColor?: string;
  statusTextColor?: string;
};

export default function OrderInfoRow({
  orderId,
  paymentType,
  orderDate,
  orderStatus,
  statusBgColor = "#F6EEE3",
  statusTextColor = "#AD5B00",
}: OrderInfoRowProps) {
  return (
    <Box
      sx={{
        overflowX: "auto",
        width: "100%",
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Chrome/Safari
        },
      }}
    >
      <Box
        display="inline-flex"
        alignItems="center"
        gap={1}
        sx={{
          whiteSpace: "nowrap",
          minWidth: "max-content",
        }}
      >
        {/* Order ID */}
        <Typography
          sx={{
            color: "#5E5E5E",
            fontFamily: "Jost",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          Oder ID:{" "}
          <b style={{ color: "#222", fontWeight: 500, fontSize: "14px" }}>
            #{orderId}
          </b>
        </Typography>

        <Dot />

        {/* Payment Type */}
        <Typography
          sx={{
            color: "#5E5E5E",
            fontFamily: "Jost",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          Payment Type:{" "}
          <b style={{ color: "#222", fontWeight: 500, fontSize: "14px" }}>
            {paymentType}
          </b>
        </Typography>

        <Dot />

        {/* Order Date */}
        <Typography
          sx={{
            color: "#5E5E5E",
            fontFamily: "Jost",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          Order Date:{" "}
          <b style={{ color: "#222", fontWeight: 500, fontSize: "14px" }}>
            {orderDate}
          </b>
        </Typography>

        <Dot />

        {/* Order Status */}
        <Typography
          sx={{
            color: "#5E5E5E",
            fontFamily: "Jost",
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          Order Status:{" "}
          <Box
            component="span"
            sx={{
              backgroundColor: statusBgColor,
              color: statusTextColor,
              fontWeight: 500,
              px: 1,
              py: 0.2,
              fontFamily: "Jost",
              fontSize: "14px",
              borderRadius: "2px",
            }}
          >
            {orderStatus}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

// Dot separator
const Dot = () => (
  <Box
    component="span"
    sx={{
      width: 4,
      height: 4,
      backgroundColor: "#A0A0A0",
      borderRadius: "50%",
      mx: 1,
      display: "inline-block",
    }}
  />
);
