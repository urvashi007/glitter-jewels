/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputBase,
  useMediaQuery,
  TextField,
  Stack,
  InputAdornment,
  Button,
} from "@mui/material";
import { CreditCard, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const banks = [
  { name: "Axis Bank", logo: "/bankLogo/axis.svg" },
  { name: "HDFC Bank", logo: "/bankLogo/hdfc.svg" },
  { name: "ICICI Bank", logo: "/bankLogo/icici.svg" },
  { name: "Kotak Bank", logo: "/bankLogo/kotak.svg" },
  { name: "SBI Bank", logo: "/bankLogo/sbi.svg" },
];

type TabOption = {
  label: string;
  icon: React.ElementType;
  value: string;
};

const tabs: TabOption[] = [
  { label: "Credit/Debit Card", icon: CreditCard, value: "card" },
  { label: "Net Banking", icon: User, value: "netbanking" },
];

export default function PaymentTabs() {
  const [activeTab, setActiveTab] = useState("card");
  const [selectedBank, setSelectedBank] = useState("");
  const [otherBank, setOtherBank] = useState("");
  const [paymentType, setPaymentType] = useState("full");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ padding:'20px', background: "#fff" }}>
      <Typography fontWeight={700} mb={2} sx={{ fontSize: "20px" }}>
        Choose a Payment Mode
      </Typography>
      <Box sx={{ mb: 2 }}>
        <RadioGroup
          row
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value)}
        >
          <FormControlLabel
            value="full"
            control={<Radio />}
            label="Full Payment"
          />
          <FormControlLabel
            value="partial"
            control={<Radio />}
            label="Partial Payment - 10%"
          />
        </RadioGroup>
      </Box>

      <Box
        sx={{
          display: "flex",
          border: "1px solid #ddd",
          overflow: "hidden",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Sidebar Tabs */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            minWidth: isMobile ? "100%" : 220,
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;
            const Icon = tab.icon;

            return (
              <Box
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  py: isMobile ? 1 : "16px",
                  cursor: "pointer",
                  backgroundColor: isActive ? "#E5E9F5" : "transparent",
                  borderLeft: !isMobile
                    ? isActive
                      ? "2px solid #445B9C"
                      : "2px solid transparent"
                    : "none",
                  borderBottom: isMobile
                    ? isActive
                      ? "2px solid #445B9C"
                      : "2px solid transparent"
                    : "none",
                  transition: "all 0.3s ease",
                  ":hover": {
                    backgroundColor: "#f0f0f0",
                  },
                  color: isActive ? "#445B9C" : "#222",
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                <Icon
                  size={18}
                  style={{ marginRight: 8 }}
                  color={isActive ? "#445B9C" : "#333"}
                />
                <Typography sx={{ fontSize: "16px" }}>{tab.label}</Typography>
              </Box>
            );
          })}
        </Box>

        {/* Tab Content */}
        <Box sx={{ flex: 1, borderLeft: "1px solid #ccc" }}>
          {/* Credit/Debit Card */}
          {activeTab === "card" && (
            <Stack spacing={2} sx={{ padding: "20px" }}>
              <Box>
                <Typography
                  fontWeight={500}
                  mb={0.5}
                  sx={{
                    fontSize: "14px",
                    fontFamily: "jost",
                    color: "#404040",
                  }}
                >
                  CARD NUMBER
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter card number"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CreditCard size={18} />
                      </InputAdornment>
                    ),
                    sx: {
                      borderRadius: 0,
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Box>

              <Box>
                <Typography
                  fontWeight={500}
                  mb={0.5}
                  sx={{
                    fontSize: "14px",
                    fontFamily: "jost",
                    color: "#404040",
                  }}
                >
                  NAME ON CARD
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter name"
                  variant="outlined"
                  InputProps={{
                    sx: {
                      borderRadius: 0,
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Box flex={1}>
                  <Typography
                    fontWeight={600}
                    mb={0.5}
                    sx={{
                      fontSize: "14px",
                      fontFamily: "jost",
                      color: "#404040",
                    }}
                  >
                    VALID THRU (MM/YY)
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter valid month & year"
                    variant="outlined"
                    InputProps={{
                      sx: {
                        borderRadius: 0,
                        backgroundColor: "#fff",
                      },
                    }}
                  />
                </Box>

                <Box flex={1}>
                  <Typography
                    fontWeight={600}
                    mb={0.5}
                    sx={{
                      fontSize: "14px",
                      fontFamily: "jost",
                      color: "#404040",
                    }}
                  >
                    CVV
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter cvv"
                    variant="outlined"
                    InputProps={{
                      sx: {
                        borderRadius: 0,
                        backgroundColor: "#fff",
                      },
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
          )}

          {/* Net Banking */}
          {activeTab === "netbanking" && (
            <>
              <RadioGroup
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {banks.map((bank, index) => (
                  <FormControlLabel
                    key={bank.name}
                    value={bank.name}
                    control={<Radio />}
                    sx={{
                      m: 0,
                      px: 1,
                      py: 2,
                      borderBottom: "1px solid #ccc",
                    }}
                    label={
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Image
                          src={bank.logo}
                          alt={bank.name}
                          width={50}
                          height={50}
                        />
                        <Typography fontWeight={500}>{bank.name}</Typography>
                      </Box>
                    }
                  />
                ))}
              </RadioGroup>

              <Box mt={4} sx={{ padding: "0 20px 20px 20px" }}>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ letterSpacing: "1px", marginBottom: "8px" }}
                >
                  OTHER BANK
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    displayEmpty
                    value={otherBank}
                    onChange={(e) => setOtherBank(e.target.value)}
                    input={
                      <InputBase
                        sx={{
                          border: "1px solid #ccc",
                          px: 1.5,
                          py: 0.5,
                          height: "48px",
                          fontSize: "16px",
                        }}
                      />
                    }
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value="Yes Bank">Yes Bank</MenuItem>
                    <MenuItem value="IndusInd Bank">IndusInd Bank</MenuItem>
                    <MenuItem value="Union Bank">Union Bank</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box mt={3} sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#445B9C",
            textTransform: "uppercase",
            fontWeight: 600,
            minWidth: "220px",
            py: 1.5,
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "#374a84",
            },
          }}
        >
          PAY NOW
        </Button>
      </Box>
    </Box>
  );
}
