"use client";

import React, { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ChevronDown } from "lucide-react";
import { Address } from "@/utils/address";
import ConfirmationDialog from "./ConfirmationDialog";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (data: Address) => void;
  initialData: Address | null;
};

const defaultFormData: Address = {
  id: 0,
  label: "Home",
  name: "",
  address: "",
  phone: "",
  pincode: "",
  country: "",
  state: "",
  city: "",
  landmark: "",
};

export default function AddressDrawer({
  open,
  onClose,
  onSave,
  initialData,
}: Props) {
  const [formData, setFormData] = useState<Address>(defaultFormData);
  const [addressType, setAddressType] = useState("Home");
  const [isDefault, setIsDefault] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({ ...defaultFormData, ...initialData });
      setAddressType(initialData.label || "Home");
    } else {
      setFormData(defaultFormData);
      setAddressType("Home");
    }
  }, [initialData]);

  const handleChange = (field: keyof Address, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleConfirmSave = () => {
    const updated = { ...formData, label: addressType };
    onSave(updated);
    setShowConfirm(false);
    onClose();
  };

  const selectSx = {
    "& .MuiSelect-icon": {
      top: "calc(50% - 12px)",
      right: 12,
    },
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 550 },
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 3,
          }}
        >
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h3" fontWeight={600}>
              {initialData ? "Edit Address" : "Add New Address"}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Form Fields */}
          <Box sx={{ flex: 1, overflowY: "auto", mt: 3 }}>
            {/* Full Name */}
            <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">
              FULL NAME
            </Typography>
            <TextField
              placeholder="Enter"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              sx={{ mb: 2 }}
            />

            {/* Mobile Number */}
            <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">
              MOBILE NUMBER
            </Typography>
            <Stack direction="row" spacing={2} mb={2}>
              <FormControl sx={{ minWidth: 90 }}>
                <Select
                  value="+91"
                  IconComponent={ChevronDown}
                  sx={selectSx}                  
                >
                  <MenuItem value="+91">+91</MenuItem>
                </Select>
              </FormControl>
              <TextField
                placeholder="Enter Mobile Number"
                variant="outlined"
                fullWidth
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </Stack>

            {/* Country + Pincode */}
            <Stack direction="row" spacing={2} mb={2}>
              <Box flex={1}>
                <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">
                  COUNTRY
                </Typography>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    renderValue={(selected) => selected || "Select Country"}
                    IconComponent={ChevronDown}
                    sx={selectSx}
                  >
                    <MenuItem value="" disabled>Select Country</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box flex={1}>
                <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">
                  PINCODE
                </Typography>
                <TextField
                  placeholder="Enter"
                  fullWidth
                  value={formData.pincode}
                  onChange={(e) => handleChange("pincode", e.target.value)}
                />
              </Box>
            </Stack>

            {/* City + State */}
            <Stack direction="row" spacing={2} mb={2}>
              <Box flex={1}>
                <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">
                  CITY
                </Typography>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    renderValue={(selected) => selected || "Select City"}
                    IconComponent={ChevronDown}
                    sx={selectSx}
                  >
                    <MenuItem value="" disabled>Select City</MenuItem>
                    <MenuItem value="Jaipur">Jaipur</MenuItem>
                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box flex={1}>
                <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">
                  STATE
                </Typography>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    value={formData.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    renderValue={(selected) => selected || "Select State"}
                    IconComponent={ChevronDown}
                    sx={selectSx}
                  >
                    <MenuItem value="" disabled>Select State</MenuItem>
                    <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>

            {/* Landmark */}
            <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">
              APT / SUITE / LANDMARK / OTHER (OPTIONAL)
            </Typography>
            <TextField
              placeholder="Enter"
              multiline
              minRows={3}
              fullWidth
              value={formData.landmark}
              onChange={(e) => handleChange("landmark", e.target.value)}
            />

            {/* Address Type */}
            <Box sx={{ display: "flex", alignItems: "center" }} mt={2} mb={1}>
              <Typography fontSize={14} fontWeight={500} fontFamily="Jost" sx={{ mr: 2 }}>
                Address Type:
              </Typography>
              <RadioGroup row value={addressType} onChange={(e) => setAddressType(e.target.value)}>
                {["Home", "Office", "Other"].map((type) => (
                  <FormControlLabel
                    key={type}
                    value={type}
                    control={<Radio />}
                    label={type}
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontFamily: "Jost",
                        fontSize: "14px",
                        fontWeight: 400,
                      },
                    }}
                  />
                ))}
              </RadioGroup>
            </Box>

            {/* Default Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                  sx={{
                    marginLeft:'10px',
                    "& .MuiSvgIcon-root": {
                      fill: "#445B9C",
                    },
                  }}
                />
              }
              label="Mark this as my default address"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Jost",
                  fontSize: "14px",
                  fontWeight: 400,
                },
              }}
            />
          </Box>

          {/* Footer Buttons */}
          <Stack direction="row" spacing={2} mt={3}>
            <Button
              variant="outlined"
              sx={{ flex: 1, borderColor: "#2F4AB2", color: "#2F4AB2" }}
              onClick={onClose}
            >
              CANCEL
            </Button>
            <Button
              variant="contained"
              sx={{ flex: 1 }}
              onClick={() => setShowConfirm(true)}
            >
              SAVE
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* Confirmation */}
      <ConfirmationDialog
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirmSave}
        title="Confirmation"
        message="Are you sure you want to save this address?"
      />
    </>
  );
}
