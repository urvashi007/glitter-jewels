"use client";

import {
  Box,
  Typography,
  Stack,
  Divider,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import Image from "next/image";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CloseIcon from "@mui/icons-material/Close";

export interface PriceDetailsProps {
  itemsTotal: string;
  discount: string;
  subtotal: string;
  delivery: string;
  deliveryFree: boolean;
  totalItems: number;
  totalAmount: string;
  paymentMethod: string;
  appliedDiscountCode?: string;
  onRemoveDiscount?: () => void;
  showDiscountSection?: boolean;
  showPaymentInfo?: boolean;
  backToCart?: string;
  HeadingReq?: string;
  subHeadReq?: string;
  primaryButtonText?: string;
  primaryButtonVariant?: "contained" | "outlined" | "text";
  secondaryButtonText?: string;
  secondaryButtonVariant?: "contained" | "outlined" | "text";
  secondaryButtonOnClick?: () => void;
}

export default function PriceDetailsCard({
  itemsTotal,
  discount,
  subtotal,
  delivery,
  deliveryFree,
  totalItems,
  totalAmount,
  paymentMethod,
  appliedDiscountCode,
  onRemoveDiscount,
  HeadingReq,
  showDiscountSection = true,
  showPaymentInfo = true,
  primaryButtonText,
  primaryButtonVariant = "outlined",
  subHeadReq,
  secondaryButtonText,
  secondaryButtonVariant = "contained",
  backToCart,
  secondaryButtonOnClick,
}: PriceDetailsProps) {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Card sx={{ boxShadow: "none", borderRadius: 0, }}>
      {HeadingReq && (
            <Typography
              variant="h6"
              sx={{ fontSize: "20px", fontWeight: 700, borderBottom:'1px solid #ebebeb', padding:'12px 20px'}}
            >
              {HeadingReq}
            </Typography>
          )}
        <CardContent sx={{padding:"20px"}}>
         

          {showDiscountSection &&
            (appliedDiscountCode ? (
              <Box
                sx={{
                  border: "1px dashed #999",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  background: "#f7f7f7",
                  mb: 3,
                  height: "56px",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocalOfferIcon sx={{ color: "#222" }} />
                  <Typography fontSize={16} fontWeight={600}>
                    {appliedDiscountCode}
                  </Typography>
                </Stack>
                <IconButton size="small" onClick={onRemoveDiscount}>
                  <CloseIcon />
                </IconButton>
              </Box>
            ) : (
              <Box
                sx={{
                  border: "1px dashed #999",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 12px",
                  mb: 3,
                  background: "#f7f7f7",
                  height: "56px",
                }}
              >
                <LocalOfferIcon sx={{ color: "#222", mr: 1 }} />
                <Typography fontSize={16} fontWeight={600}>
                  Apply Discount Code
                </Typography>
              </Box>
            ))}
          {subHeadReq && (
            <Typography
              variant="h6"
              sx={{ fontSize: "18px", fontWeight: 700, mb: 2 }}
            >
              {subHeadReq}
            </Typography>
          )}

          <Stack direction="row" justifyContent="space-between">
            <Typography
              fontSize={16}
              sx={{ fontFamily: "Jost", fontWeight: 400, mb: 2 }}
            >
              Item(s) total
            </Typography>
            <Typography
              fontSize={16}
              sx={{ fontFamily: "Jost", fontWeight: 500 }}
            >
              {itemsTotal}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography
              fontSize={16}
              sx={{
                fontFamily: "Jost",
                fontWeight: 400,
                mb: 2,
                color: "#0F743B",
              }}
            >
              Discount
            </Typography>
            <Typography
              fontSize={16}
              sx={{ fontFamily: "Jost", fontWeight: 500 }}
              color="success.main"
            >
              {discount}
            </Typography>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          <Stack direction="row" justifyContent="space-between">
            <Typography
              fontSize={16}
              sx={{ fontFamily: "Jost", fontWeight: 400, mb: 2 }}
            >
              Subtotal
            </Typography>
            <Typography
              fontSize={16}
              sx={{ fontFamily: "Jost", fontWeight: 500 }}
            >
              {subtotal}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography
              fontSize={16}
              sx={{ fontFamily: "Jost", fontWeight: 400, color: "#0F743B" }}
            >
              Delivery
            </Typography>
            <Typography
              fontSize={14}
              sx={{ fontFamily: "Jost" }}
              color={deliveryFree ? "success.main" : "text.primary"}
            >
              {delivery}
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight={700}>
              Total ({totalItems} items)
            </Typography>
            <Typography variant="subtitle1" fontWeight={700}>
              {totalAmount}
            </Typography>
          </Stack>

          {showPaymentInfo && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                background: "#F7F7F7",
                padding: "12px",
              }}
            >
              <Image
                src="/paid-icon.svg"
                alt="paid-icon"
                width={20}
                height={20}
              />
              <Typography sx={{ marginLeft: "12px" }}>
                Paid by {paymentMethod}
              </Typography>
            </Box>
          )}
          {primaryButtonText && (
            <Box sx={{ mt: 2 }}>
              <Button
                fullWidth
                variant={primaryButtonVariant}
                sx={{
                  borderRadius: 0,
                  height: "48px",
                  ...(primaryButtonVariant === "outlined" && {
                    borderColor: "#3f51b5",
                    color: "#3f51b5",
                    fontWeight:'600'
                  }),
                }}
              >
                {primaryButtonText}
              </Button>
            </Box>
          )}

          {secondaryButtonText && (
            <Box sx={{ mt: 2 }}>
              <Button
                fullWidth
                variant={secondaryButtonVariant}
                onClick={secondaryButtonOnClick}
                sx={{
                  borderRadius: 0,
                  height: "48px", 
                  ...(secondaryButtonVariant === "contained" && {
                    color: "#fff",
                  }),
                }}
              >
                {secondaryButtonText}
              </Button>
            </Box>
          )}
           {backToCart && (
          <Button
            fullWidth
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "jost",
              color: "#222",
              marginTop: "20px",
            }}
          >
           {backToCart}
          </Button>
           )}
        </CardContent>
      </Card>
    </Box>
  );
}
