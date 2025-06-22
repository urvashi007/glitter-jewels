import Image from "next/image";
import { Box, Typography, Divider, Link } from "@mui/material";

const cartItems = [
  {
    name: "BGL230",
    price: "₹27,774",
    quantity: 1,
    image: "/stone.png",
  },
  {
    name: "BGL230",
    price: "₹28,520",
    quantity: 1,
    image: "/necklace.png",
  },
  {
    name: "BGL230",
    price: "₹32,225",
    quantity: 1,
    image: "/stone.png",
  },
  {
    name: "BGL230",
    price: "₹32,225",
    quantity: 1,
    image: "/necklace.png",
  },
];

export default function CartSummary() {
  return (
    <Box
    sx={{
      background: "#fff",
      height: {
        xs: "auto", 
        md: "100vh",
      },
    }}
  >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "20px", borderBottom: "1px solid #ebebeb" }}
      >
        <Typography
          fontWeight={600}
          sx={{ fontSize: "20px", fontWeight: "700"}}
        >
          Cart ({cartItems.length})
        </Typography>
        <Link
          href="#"
          fontSize={14}
          fontWeight={500}
          sx={{
            textTransform: "uppercase",
            color: "#445B9C",
            textDecoration: "none",
            fontFamily: "jost",
          }}
        >
          Change
        </Link>
      </Box>
      <Box sx={{ padding: "0 20px 20px 20px" }}>
        {cartItems.map((item, i) => (
          <Box key={i} mt={2}>
            <Box
              display="flex"
              gap={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  background: "#f7f7f7",
                  width: "100px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                />
              </Box>
              <Box flex={1}>
                <Box display="flex" justifyContent="space-between">
                  <Typography fontWeight={600} sx={{ fontSize: "18px" }}>
                    {item.name}
                  </Typography>
                  <Typography fontWeight={600} sx={{ fontSize: "18px" }}>
                    {item.price}
                  </Typography>
                </Box>
                <Typography
                  fontSize={14}
                  color="text.secondary"
                  sx={{ color: "#5E5E5E", fontWeight: "500" }}
                >
                  Quantity:{" "}
                  <Box component="span" sx={{ fontWeight: 600, color: "#222" }}>
                    {item.quantity}
                  </Box>
                </Typography>
              </Box>
            </Box>
            {i !== cartItems.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
