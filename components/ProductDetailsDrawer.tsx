"use client";

import {
  Box,
  Drawer,
  Typography,
  Select,
  MenuItem,
  TextField,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

type Product = {
  id: string;
  price: string;
  gold: string;
  diamond: string;
  image: string;
};

type ProductDetailsDrawerProps = {
  open: boolean;
  onClose: () => void;
  product: Product | null;
};

export default function ProductDetailsDrawer({
  open,
  onClose,
  product,
}: ProductDetailsDrawerProps) {
  const [metalType, setMetalType] = useState("");
  const [diamondQuality, setDiamondQuality] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [lockType, setLockType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [hallmark, setHallmark] = useState("");
  const [certification, setCertification] = useState("");
  const [comments, setComments] = useState("");

  const metalTypes = ["10 KT", "14 KT", "18 KT", "PALLADIUM"];
  const metalColors = ["#f5f5f5", "#e0e0e0", "#ffd700"];
  const dummyOptions = [1, 2, 3, 4];
  const hallmarks = ["BIS", "SGL", "XYZ"];
  const certifications = ["IGI", "GIA", "HRD"];

  const handleSubmit = () => {
    const formData = {
      metalType,
      diamondQuality,
      itemSize,
      lockType,
      quantity,
      hallmark,
      certification,
      comments,
    };
    console.log("Submitted Product Details:", formData);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 500, p: 4, fontFamily: "Manrope", position: "relative" }}>
        {/* Header */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 16, top: 16 }}
        >
          <X />
        </IconButton>

        {product && (
          <>
            {/* Image and Tabs */}
            <Box sx={{ mb: 3, mt: 2 }}>
              <img
                src={product.image}
                alt={product.id}
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Box>

            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: "20px", mb: 2 }}
            >
              Add Product Details
            </Typography>

            {/* Section Title */}
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "14px",
                mb: 2,
                borderBottom: "1px solid #ccc",
                pb: 1,
              }}
            >
              SPECIFICATION AND DESCRIPTION
            </Typography>

            {/* Form */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              <Box sx={{ flex: "1 1 45%" }}>
                <Typography mb={1} fontSize="14px" fontWeight={500}>
                  METAL TYPE
                </Typography>
                <Select
                  value={metalType}
                  onChange={(e) => setMetalType(e.target.value)}
                  fullWidth
                  displayEmpty
                  IconComponent={ChevronDown}
                  renderValue={(selected) => selected || "Select"}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  {metalTypes.map((type) => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ flex: "1 1 45%" }}>
                <Typography mb={1} fontSize="14px" fontWeight={500}>
                  METAL COLOR
                </Typography>
                <Stack direction="row" spacing={2}>
                  {metalColors.map((color, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "4px",
                        backgroundColor: color,
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              <Box sx={{ flex: "1 1 45%" }}>
                <Typography mb={1} fontSize="14px" fontWeight={500}>
                  DIAMOND QUALITY
                </Typography>
                <Select
                  value={diamondQuality}
                  onChange={(e) => setDiamondQuality(e.target.value)}
                  fullWidth
                  displayEmpty
                  IconComponent={ChevronDown}
                  renderValue={(selected) => selected || "Select"}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  {dummyOptions.map((val) => (
                    <MenuItem key={val} value={val}>{val}</MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ flex: "1 1 45%" }}>
                <Typography mb={1} fontSize="14px" fontWeight={500}>
                  ITEM SIZE
                </Typography>
                <Select
                  value={itemSize}
                  onChange={(e) => setItemSize(e.target.value)}
                  fullWidth
                  displayEmpty
                  IconComponent={ChevronDown}
                  renderValue={(selected) => selected || "Select"}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  {dummyOptions.map((val) => (
                    <MenuItem key={val} value={val}>{val}</MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ flex: "1 1 45%" }}>
                <Typography mb={1} fontSize="14px" fontWeight={500}>
                  LOCK TYPE
                </Typography>
                <Select
                  value={lockType}
                  onChange={(e) => setLockType(e.target.value)}
                  fullWidth
                  displayEmpty
                  IconComponent={ChevronDown}
                  renderValue={(selected) => selected || "Select"}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  {dummyOptions.map((val) => (
                    <MenuItem key={val} value={val}>{val}</MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ flex: "1 1 45%" }}>
                <Typography mb={1} fontSize="14px" fontWeight={500}>
                  QUANTITY
                </Typography>
                <Select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  fullWidth
                  displayEmpty
                  IconComponent={ChevronDown}
                  renderValue={(selected) => selected || "Select"}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  {[1, 2, 3, 4, 5].map((q) => (
                    <MenuItem key={q} value={q}>{q}</MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ flex: "1 1 45%" }}>
                <Typography mb={1} fontSize="14px" fontWeight={500}>
                  HALLMARKING
                </Typography>
                <Select
                  value={hallmark}
                  onChange={(e) => setHallmark(e.target.value)}
                  fullWidth
                  displayEmpty
                  IconComponent={ChevronDown}
                  renderValue={(selected) => selected || "Select"}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  {hallmarks.map((val) => (
                    <MenuItem key={val} value={val}>{val}</MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ flex: "1 1 45%" }}>
                <Typography mb={1} fontSize="14px" fontWeight={500}>
                  CERTIFICATION
                </Typography>
                <Select
                  value={certification}
                  onChange={(e) => setCertification(e.target.value)}
                  fullWidth
                  displayEmpty
                  IconComponent={ChevronDown}
                  renderValue={(selected) => selected || "Select"}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  {certifications.map((val) => (
                    <MenuItem key={val} value={val}>{val}</MenuItem>
                  ))}
                </Select>
              </Box>

              <Box sx={{ flex: "1 1 100%" }}>
                <Typography mb={1} fontSize="14px" fontWeight={500}>
                  COMMENTS
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </Box>

              <Box sx={{ flex: "1 1 100%", mt: 2 }}>
                <Button variant="contained" fullWidth onClick={handleSubmit}>
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
}
