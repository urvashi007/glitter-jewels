"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ChevronDown } from "lucide-react"; // Lucide arrow
import Dot from "./Dot";

export type OrderCardProps = {
  id: string;
  image: string;
  goldWt: string;
  diaWt: string;
  metalType: string;
  metalColor: "White" | "Yellow" | "Rose";
  diaQuality: string;
  status: string;
  statusColor: string;
  price: string;
  styleCode: string;
  arrowReq: boolean;

  quantity?: number;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  onQuantityChange?: (qty: number) => void;
  onEditHref?: string;

  showCheckbox?: boolean;
  showEdit?: boolean;
  showSelect?: boolean;
  showImage?: boolean;
};

export default function SingleOrderCard(order: OrderCardProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        backgroundColor: "#fff",
        borderTop: "1px solid #ebebeb",
        padding: {
          xs: "0",           
          md: "20px",   
        },
        "@media (max-width:540px)": {
          display: "block",
        },
      }}
    >
      {order.showImage !== false && (
        <Box position="relative">
          {order.showCheckbox && (
            <Checkbox
              checked={order.checked}
              onChange={(e) => order.onCheck?.(e.target.checked)}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                color: "#A6A6A6",
                borderRadius: "0",
                transform: "scale(1.2)",
                transformOrigin: "top left",
                "&.Mui-checked": {
                  color: "#445B9C",
                },
              }}
            />
          )}

          <Box
            width={200}
            height={140}
            flexShrink={0}
            sx={{
              position: "relative",
              background: "#f7f7f7",
              marginRight: "24px",
              "@media (max-width:540px)": {
                width: "100%",
                height: "240px",
                marginTop: "20px",
              },
            }}
          >
            <Image
              src={order.image}
              alt={order.id}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: 4,
              }}
              priority
            />
          </Box>
        </Box>
      )}

      <Box
        flex={1}
        sx={{
          "@media (max-width:540px)": {
            padding: "15px 0",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography fontWeight={600} fontSize="18px">
            {order.id}
          </Typography>

          {order.showEdit && order.onEditHref && (
            <Link
              href={order.onEditHref}
              style={{
                fontSize: "16px",
                color: "#445B9C",
                textDecoration: "none",
                fontWeight: 500,
                fontFamily: "jost",
              }}
            >
              Edit
            </Link>
          )}
        </Stack>

        {/* Specs Row 1 */}
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          spacing={1}
          mt={0.5}
        >
          <Typography variant="body2" fontWeight={400} sx={{ fontSize: "14px", color: "#5e5e5e", fontFamily: "jost" }}>
            Gold W:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ fontSize: "14px", color: "#222", fontFamily: "jost" }}>
            {order.goldWt}
          </Typography>
          <Dot />
          <Typography variant="body2" fontWeight={400} sx={{ fontSize: "14px", color: "#5e5e5e", fontFamily: "jost" }}>
            Dia. WT:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ fontSize: "14px", color: "#222", fontFamily: "jost" }}>
            {order.diaWt}
          </Typography>
          <Dot />
          <Typography variant="body2" fontWeight={400} sx={{ fontSize: "14px", color: "#5e5e5e", fontFamily: "jost" }}>
            Style Code:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ fontSize: "14px", color: "#222", fontFamily: "jost" }}>
            {order.styleCode}
          </Typography>
        </Stack>

        {/* Specs Row 2 */}
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          spacing={1}
          mt={0.5}
        >
          <Typography variant="body2" fontWeight={400} sx={{ fontSize: "14px", color: "#5e5e5e", fontFamily: "jost" }}>
            Metal Type:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ fontSize: "14px", color: "#222", fontFamily: "jost" }}>
            {order.metalType}
          </Typography>
          <Dot />
          <Typography variant="body2" fontWeight={400} sx={{ fontSize: "14px", color: "#5e5e5e", fontFamily: "jost" }}>
            Metal Color:
          </Typography>
          <Box
            component="span"
            sx={{
              width: 13,
              height: 13,
              display: "inline-block",
              backgroundColor:
                order.metalColor === "Yellow"
                  ? "#F3D951"
                  : order.metalColor === "Rose"
                  ? "#FFDDDD"
                  : "#ccc",
            }}
          />
          <Dot />
          <Typography variant="body2" fontWeight={400} sx={{ fontSize: "14px", color: "#5e5e5e", fontFamily: "jost" }}>
            Dia. Quality:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ fontSize: "14px", color: "#222", fontFamily: "jost" }}>
            {order.diaQuality}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
          <Typography variant="body2" color={order.statusColor}>
            {order.status}
          </Typography>
        </Stack>

        {/* Price and Quantity Select */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ marginTop: "10px" }}
        >
          <Typography fontWeight={600} fontSize="18px">
            ₹ {order.price}
          </Typography>

          {order.showSelect && (
            <Select
              size="small"
              value={order.quantity ?? 1}
              onChange={(e) => order.onQuantityChange?.(+e.target.value)}
              IconComponent={ChevronDown}
              sx={{
                width: 120,
                height: "40px!important",
                fontFamily: "jost",
                fontWeight: "600",
                color: "#222",
                "& .MuiSelect-icon": {
                  right: 8,
                  top: "calc(50% - 12px)",
                  color: "#222",
                },
              }}
            >
              {[1, 2, 3, 4, 5].map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          )}
        </Stack>
      </Box>

      {/* Right Arrow */}
      {order.arrowReq && (
        <Link href="/order-summary-page">
          <IconButton
            sx={{
              color: "#404040",
              "@media (max-width:540px)": { display: "none" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Link>
      )}
    </Box>
  );
}
