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
import ConfirmationDialog from "./ConfirmationDialog"; // ✅ Add this

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (data: Address) => void;
  initialData: Address | null;
};

export default function AddressDrawer({
  open,
  onClose,
  onSave,
  initialData,
}: Props) {
  const [formData, setFormData] = useState<Address>({
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
  });

  const [addressType, setAddressType] = useState("Home");
  const [isDefault, setIsDefault] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); // ✅ Confirmation state

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id || 0,
        label: initialData.label || "Home",
        name: initialData.name || "",
        address: initialData.address || "",
        phone: initialData.phone || "",
        pincode: initialData.pincode || "",
        country: initialData.country || "",
        state: initialData.state || "",
        city: initialData.city || "",
        landmark: initialData.landmark || "",
      });
      setAddressType(initialData.label || "Home");
    }
  }, [initialData]);

  const handleChange = (field: keyof Address, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleConfirmSave = () => {
    const updated = { ...formData, label: addressType };
    onSave(updated);
    setShowConfirm(false); // Close confirmation
    onClose(); // Close drawer
  };

  const selectSx = {
    "& .MuiSelect-icon": {
      top: "calc(50% - 12px)",
      right: 12,
    },
  };

  return (
    <>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 550, p: 3 }}>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight={600}>
              Add New Address
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box mt={3}>
            {/* Name */}
            <Typography fontSize={12} mb={0.5} fontWeight={500}>
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

            {/* Phone */}
            <Typography fontSize={12} mb={0.5} fontWeight={500}>
              MOBILE NUMBER
            </Typography>
            <Stack direction="row" spacing={2} mb={2}>
              <FormControl sx={{ minWidth: 90 }}>
                <Select value="+91" displayEmpty IconComponent={ChevronDown} sx={selectSx}>
                  <MenuItem value="+91">+91</MenuItem>
                  <MenuItem value="+1">+1</MenuItem>
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

            {/* Country & Pincode */}
            <Stack direction="row" spacing={2} mb={2}>
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

              <TextField
                placeholder="Enter Pincode"
                fullWidth
                value={formData.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
              />
            </Stack>

            {/* City & State */}
            <Stack direction="row" spacing={2} mb={2}>
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
            </Stack>

            {/* Landmark */}
            <Typography fontSize={12} mb={0.5} fontWeight={500}>
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
            <Typography fontSize={14} fontWeight={500} mt={2} mb={1}>
              Address Type:
            </Typography>
            <RadioGroup
              row
              value={addressType}
              onChange={(e) => setAddressType(e.target.value)}
            >
              <FormControlLabel value="Home" control={<Radio />} label="Home" />
              <FormControlLabel value="Office" control={<Radio />} label="Office" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>

            {/* Default Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
  checked={isDefault}
  onChange={(e) => setIsDefault(e.target.checked)}
  sx={{
    '& .MuiSvgIcon-root': {
      fill: '#445B9C',
    },
  }}
/>
              }
              label="Mark this as my default address"
            />
          </Box>

          {/* Footer Buttons */}
          <Stack direction="row" spacing={2} mt={4}>
            <Button
              variant="outlined"
              sx={{ flex: 1, borderColor: "#2F4AB2", color: "#2F4AB2" }}
              onClick={onClose}
            >
              CANCEL
            </Button>
            <Button
              variant="contained"
              sx={{ flex: 1,}}
              onClick={() => setShowConfirm(true)}
            >
              SAVE
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* ✅ Confirmation Dialog */}
      <ConfirmationDialog
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirmSave}
        title="Confirmation"
        message="Are you sure, you want to save this address?"
      />
    </>
  );
}
