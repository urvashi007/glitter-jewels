"use client";

import { customVars } from "@/utils/theme";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { ChevronDown, Paperclip, X } from "lucide-react";
import { useRef, useState } from "react";

export default function EnquiryForm() {
  const [countryCode, setCountryCode] = useState("+91");
  const [productCategory, setProductCategory] = useState("");
  const [fileName, setFileName] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleFileRemove = () => {
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const renderLabel = (text: string) => (
    <Typography
      variant="body2"
      fontWeight={500}
      mb={0.5}
      sx={{ fontFamily: "jost", color: "#404040" }}
    >
      {text}
    </Typography>
  );

  return (
    <Box>
      <Typography variant="h6" fontWeight={600} mb={3} sx={{fontSize:customVars.fontSizes.font28, fontWeight:'700'}}>
        Make an Enquiry
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: 2,
          fontFamily: "Jost",
        }}
      >
        <Box sx={{ gridColumn: "span 2" }}>
          {renderLabel("Name")}
          <TextField fullWidth placeholder="Enter Name" />
        </Box>

        <Box sx={{ gridColumn: "span 2" }}>
          {renderLabel("Email")}
          <TextField fullWidth placeholder="Enter Email Address" />
        </Box>

        <Box sx={{ gridColumn: "span 2" }}>
          {renderLabel("Mobile Number")}
          <Box display="flex" gap={1}>
            <FormControl sx={{ width: "30%" }}>
              <Select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                IconComponent={ChevronDown}
              >
                <MenuItem value="+91">+91</MenuItem>
                <MenuItem value="+1">+1</MenuItem>
                <MenuItem value="+44">+44</MenuItem>
              </Select>
            </FormControl>
            <TextField fullWidth placeholder="Enter Mobile Number" />
          </Box>
        </Box>

        <Box sx={{ gridColumn: "span 2" }}>
          {renderLabel("Company Name")}
          <TextField fullWidth placeholder="Enter Company Name" />
        </Box>

        <Box sx={{ gridColumn: "span 2" }}>
          {renderLabel("Product Category")}
          <FormControl fullWidth>
            <Select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              displayEmpty
              IconComponent={ChevronDown}
              renderValue={(selected) => selected || "Select Product Category"}
            >
              <MenuItem value="" disabled>
                Select Product Category
              </MenuItem>
              <MenuItem value="Rings">Rings</MenuItem>
              <MenuItem value="Necklace">Necklace</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ gridColumn: "span 2" }}>
          {renderLabel("Upload Reference Image")}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <TextField
            fullWidth
            placeholder="Upload Reference File"
            value={fileName}
            onClick={() => {
              if (!fileName) fileInputRef.current?.click();
            }}
            InputProps={{
              readOnly: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Paperclip size={16} />
                </InputAdornment>
              ),
              endAdornment: fileName && (
                <InputAdornment position="end">
                  <IconButton onClick={handleFileRemove}>
                    <X size={16} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ gridColumn: "span 2" }}>
          {renderLabel("Description")}
          <TextField
            fullWidth
            multiline
            minRows={3}
            placeholder="Enter Product Details or Requirements"
          />
        </Box>

        <Box sx={{ gridColumn: "span 2", display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" color="primary" sx={{width:'100%'}}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
