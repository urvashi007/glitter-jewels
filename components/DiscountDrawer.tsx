"use client";

import {
  Box,
  Drawer,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface DiscountDrawerProps {
  open: boolean;
  onClose: () => void;
}

const discounts = [
  {
    code: "FLAT300",
    savings: "₹349",
    description: "Rs. 300 off on minimum purchase of Rs. 1199.",
    expiry: "12th June 2025 | 11:59 PM",
  },
  {
    code: "SAVE35",
    savings: "₹349",
    description: "Rs. 300 off on minimum purchase of Rs. 1199.",
    expiry: "12th June 2025 | 11:59 PM",
  },
];

const DiscountDrawer = ({ open, onClose }: DiscountDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 550,
          "@media (max-width:540px)": {
            width: "100%",
          },
        },
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: "22px",
          borderBottom: "1px solid #e3e3e3",
        }}
      >
        <Typography variant="h3" fontWeight={700}>
          Apply Discount
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ padding: "0 22px 22px 22px" }}>
        {/* Input Section */}
        <Stack direction="row" spacing={1} mt={3}>
          <TextField
            fullWidth
            placeholder="Enter Discount Code"
            size="small"
            sx={{
              input: { fontSize: "14px", fontFamily: "Jost" },
            }}
          />
          <Button
            variant="outlined"
            sx={{
              height: 48,
              px: 3,
              fontWeight: 600,
              textTransform: "none",
              fontFamily: "Jost",
              borderColor: "#445B9C",
              color: "#445B9C",
            }}
          >
            APPLY
          </Button>
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* Discount List */}
        <Stack spacing={3}>
          {discounts.map((item) => (
            <Box
              key={item.code}
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{
                borderBottom: "1px solid #eee",
                pb: 2,
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "inline-block",
                    mb: 1,
                    border: "1px dashed #ccc",
                    fontWeight: 700,
                    fontSize: "16px",
                    fontFamily: "Manrope",
                    padding: "12px",
                    background: "#F7F7F7",
                    marginBottom: "10px",
                  }}
                >
                  {item.code}
                </Box>
                <Typography
                  fontSize={14}
                  color="success.main"
                  fontWeight={500}
                  sx={{ marginBottom: "10px" }}
                >
                  Save {item.savings}
                </Typography>
                <Typography fontSize={14}>{item.description}</Typography>
                <Typography fontSize={14} color="#222">
                  Expires on: {item.expiry}
                </Typography>
              </Box>
              <Button
                size="small"
                variant="text"
                sx={{
                  fontWeight: 600,
                  color: "#445B9C",
                  textTransform: "uppercase",
                  fontSize: "14px",
                }}
              >
                APPLY
              </Button>
            </Box>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
};

export default DiscountDrawer;
