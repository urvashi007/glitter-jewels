"use client";

import Link from "next/link";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import Dot from "@/components/dot";

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
  arrowReq:boolean;
};

const SingleOrderCard = (order: OrderCardProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        backgroundColor: "#fff",
        borderTop: "1px solid #ebebeb",
        padding: "0 20px",
        "@media (max-width:540px)": {
          display: "block",
        },
      }}
    >
      <Box
        width={200}
        height={140}
        flexShrink={0}
        position="relative"
        sx={{
          background: "#f7f7f7",
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
          fill
          style={{ objectFit: "contain", borderRadius: 4 }}
        />
      </Box>

      <Box
        flex={1}
        sx={{
          padding: "20px 24px",
          "@media (max-width:540px)": {
            padding: "15px  0",
          },
        }}
      >
        <Typography fontWeight={600}>{order.id}</Typography>

        <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={1} mt={0.5}>
          <Typography variant="body2" sx={{ color: "#5E5E5E", fontFamily: "jost" }}>Gold W:</Typography>
          <Typography variant="body2" sx={{ color: "#222", fontFamily: "jost" }}>{order.goldWt}</Typography>
          <Dot />
          <Typography variant="body2" sx={{ color: "#5E5E5E", fontFamily: "jost" }}>Dia. WT:</Typography>
          <Typography variant="body2" sx={{ color: "#222", fontFamily: "jost" }}>{order.diaWt}</Typography>
          <Dot />
          <Typography variant="body2" sx={{ color: "#5E5E5E", fontFamily: "jost" }}>Style Code:</Typography>
          <Typography variant="body2" sx={{ color: "#222", fontFamily: "jost" }}>{order.styleCode}</Typography>
        </Stack>

        <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={1} mt={0.5}>
          <Typography variant="body2" sx={{ color: "#5E5E5E", fontFamily: "jost" }}>Metal Type:</Typography>
          <Typography variant="body2" sx={{ color: "#222", fontFamily: "jost" }}>{order.metalType}</Typography>
          <Dot />
          <Typography variant="body2" sx={{ color: "#5E5E5E", fontFamily: "jost" }}>Metal Color:</Typography>
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
          <Typography variant="body2" sx={{ color: "#5E5E5E", fontFamily: "jost" }}>Dia. Quality:</Typography>
          <Typography variant="body2" sx={{ color: "#222", fontFamily: "jost" }}>{order.diaQuality}</Typography>
        </Stack>

        <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={1} mt={0.5}>
          <Typography variant="body2" sx={{ fontFamily: "jost" }}>Quantity: 1</Typography>
          <Dot />
          <Typography
            variant="body2"
            sx={{ color: order.statusColor, fontFamily: "jost" }}
          >
            {order.status}
          </Typography>
        </Stack>

        <Typography
          fontWeight={600}
          fontSize="18px"
          mt={1}
          color="#222"
          sx={{ fontFamily: "jost" }}
        >
          {order.price}
        </Typography>
      </Box>

      {order.arrowReq && (
      <Link href={'/order-summary-page'}>
        <IconButton
          sx={{
            color: "#404040",
            "@media (max-width:540px)": {
              display: "none",
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Link>
       )}
    </Box>
  );
};

export default SingleOrderCard;
