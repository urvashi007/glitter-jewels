"use client";

import Link from "next/link";
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
import Image from "next/image";
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
        padding: "20px",
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
                color: "#445B9C",
                borderRadius: "0",
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
              marginRight:'24px',
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
          <Typography fontWeight={600} style={{ fontSize: "18px" }}>
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

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          spacing={1}
          mt={0.5}
        >
          <Typography variant="body2" fontWeight={400} sx={{ color: "#5e5e5e", fontFamily: "jost" }}>
            Gold W:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ color: "#222", fontFamily: "jost" }}>
            {order.goldWt}
          </Typography>
          <Dot />
          <Typography variant="body2" fontWeight={400} sx={{ color: "#5e5e5e", fontFamily: "jost" }}>
            Dia. WT:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ color: "#222", fontFamily: "jost" }}>
            {order.diaWt}
          </Typography>
          <Dot />
          <Typography variant="body2" fontWeight={400} sx={{ color: "#5e5e5e", fontFamily: "jost" }}>
            Style Code:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ color: "#222", fontFamily: "jost" }}>
            {order.styleCode}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          spacing={1}
          mt={0.5}
        >
          <Typography variant="body2" fontWeight={400} sx={{ color: "#5e5e5e", fontFamily: "jost" }}>
            Metal Type:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ color: "#222", fontFamily: "jost" }}>
            {order.metalType}
          </Typography>
          <Dot />
          <Typography variant="body2" fontWeight={400} sx={{ color: "#5e5e5e", fontFamily: "jost" }}>
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
          <Typography variant="body2" fontWeight={400} sx={{ color: "#5e5e5e", fontFamily: "jost" }}>
            Dia. Quality:
          </Typography>
          <Typography variant="body2" fontWeight={500} sx={{ color: "#222", fontFamily: "jost" }}>
            {order.diaQuality}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
          <Typography variant="body2" color={order.statusColor}>
            {order.status}
          </Typography>
        </Stack>

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
              sx={{
                width: 120,
                height: "40px!important",
                fontFamily: "jost",
                fontWeight: "600",
                color: "#222",
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
