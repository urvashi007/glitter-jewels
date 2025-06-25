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
import { customVars } from "@/utils/theme";

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
    <Box sx={{ p: 3, background: customVars.background.whitebg }}>
      <Typography fontWeight={700} mb={2} fontSize={customVars.fontSizes.md}>
        Choose a Payment Mode
      </Typography>

      <RadioGroup
        row
        value={paymentType}
        onChange={(e) => setPaymentType(e.target.value)}
        sx={{ mb: 3 }}
      >
        {[
          { value: "full", label: "Full Payment" },
          { value: "partial", label: "Partial Payment - 10%" },
        ].map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={
              <Typography
                fontWeight={paymentType === option.value ? 700 : 500}
                fontSize={customVars.fontSizes.base}
              >
                {option.label}
              </Typography>
            }
          />
        ))}
      </RadioGroup>

      <Box
        sx={{
          display: "flex",
          border: `1px solid ${customVars.colors.gray}`,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Tabs */}
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
                  py: isMobile ? 1 : 2,
                  cursor: "pointer",
                  backgroundColor: isActive
                    ? customVars.background.bluex
                    : "transparent",
                  borderLeft: !isMobile
                    ? `2px solid ${
                        isActive ? customVars.colors.accent : "transparent"
                      }`
                    : "none",
                  borderBottom: isMobile
                    ? `2px solid ${
                        isActive ? customVars.colors.accent : "transparent"
                      }`
                    : "none",
                  transition: "all 0.3s ease",
                  ":hover": {
                    backgroundColor: "#f0f0f0",
                  },
                  color: isActive
                    ? customVars.colors.accent
                    : customVars.colors.dark,
                }}
              >
                <Icon
                  size={18}
                  style={{ marginRight: 8 }}
                  color={
                    isActive
                      ? customVars.colors.accent
                      : customVars.colors.color404040
                  }
                />
                <Typography
                  fontSize={customVars.fontSizes.base}
                  fontWeight={isActive ? 700 : 500}
                >
                  {tab.label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, borderLeft: `1px solid ${customVars.colors.gray}` }}>
          {activeTab === "card" && (
            <Stack spacing={2} sx={{ p: 3 }}>
              <Box>
                <Typography variant="formLabel">Card Number</Typography>
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
                  }}
                />
              </Box>

              <Box>
                <Typography variant="formLabel">Name on Card</Typography>
                <TextField fullWidth placeholder="Enter name" variant="outlined" />
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Box flex={1}>
                  <Typography variant="formLabel">Valid Thru (MM/YY)</Typography>
                  <TextField fullWidth placeholder="MM/YY" variant="outlined" />
                </Box>
                <Box flex={1}>
                  <Typography variant="formLabel">CVV</Typography>
                  <TextField fullWidth placeholder="Enter CVV" variant="outlined" />
                </Box>
              </Stack>
            </Stack>
          )}

          {activeTab === "netbanking" && (
            <>
              <RadioGroup
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                sx={{ flexDirection: "column" }}
              >
                {banks.map((bank) => (
                  <FormControlLabel
                    key={bank.name}
                    value={bank.name}
                    control={<Radio />}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Image src={bank.logo} alt={bank.name} width={50} height={50} />
                        <Typography fontWeight={500}>{bank.name}</Typography>
                      </Box>
                    }
                    sx={{
                      px: 2,
                      py: 2,
                      borderBottom: `1px solid ${customVars.colors.gray}`,
                    }}
                  />
                ))}
              </RadioGroup>

              <Box sx={{ p: 3 }}>
                <Typography variant="formLabel">Other Bank</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    displayEmpty
                    value={otherBank}
                    onChange={(e) => setOtherBank(e.target.value)}
                    input={
                      <InputBase
                        sx={{
                          border: `1px solid ${customVars.colors.gray}`,
                          px: 2,
                          height: 48,
                          fontSize: customVars.fontSizes.base,
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

      <Box mt={3} textAlign="right">
        <Button
          variant="contained"
          sx={{
            ...theme.mixins.buttonPrimary,
            minWidth: 220,
            py: 1.5,
          }}
        >
          PAY NOW
        </Button>
      </Box>
    </Box>
  );
}
