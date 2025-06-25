"use client";

import { Box, Typography } from "@mui/material";
import { customVars } from "@/utils/theme";

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
  statusBgColor = customVars.background.bgf7f7f7,
  statusTextColor = customVars.colors.accent,
}: OrderInfoRowProps) {
  return (
    <Box
      sx={{
        overflowX: "auto",
        width: "100%",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
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
            color: customVars.colors.color5e5e5e,
            fontFamily: customVars.fontFamily.secondary,
            fontWeight: 400,
            fontSize: customVars.fontSizes.sm,
          }}
        >
          Order ID:{" "}
          <Box
            component="b"
            sx={{
              color: customVars.colors.dark,
              fontWeight: 500,
              fontSize: customVars.fontSizes.sm,
            }}
          >
            #{orderId}
          </Box>
        </Typography>

        <Dot />

        {/* Payment Type */}
        <Typography
          sx={{
            color: customVars.colors.color5e5e5e,
            fontFamily: customVars.fontFamily.secondary,
            fontWeight: 400,
            fontSize: customVars.fontSizes.sm,
          }}
        >
          Payment Type:{" "}
          <Box
            component="b"
            sx={{
              color: customVars.colors.dark,
              fontWeight: 500,
              fontSize: customVars.fontSizes.sm,
            }}
          >
            {paymentType}
          </Box>
        </Typography>

        <Dot />

        {/* Order Date */}
        <Typography
          sx={{
            color: customVars.colors.color5e5e5e,
            fontFamily: customVars.fontFamily.secondary,
            fontWeight: 400,
            fontSize: customVars.fontSizes.sm,
          }}
        >
          Order Date:{" "}
          <Box
            component="b"
            sx={{
              color: customVars.colors.dark,
              fontWeight: 500,
              fontSize: customVars.fontSizes.sm,
            }}
          >
            {orderDate}
          </Box>
        </Typography>

        <Dot />

        {/* Order Status */}
        <Typography
          sx={{
            color: customVars.colors.color5e5e5e,
            fontFamily: customVars.fontFamily.secondary,
            fontWeight: 400,
            fontSize: customVars.fontSizes.sm,
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
              fontFamily: customVars.fontFamily.secondary,
              fontSize: customVars.fontSizes.sm,
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
      backgroundColor: customVars.colors.color5e5e5e,
      borderRadius: "50%",
      mx: 1,
      display: "inline-block",
    }}
  />
);
