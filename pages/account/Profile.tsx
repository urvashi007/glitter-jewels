"use client";

import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputAdornment,
  IconButton,
  Button,
  FormControl,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import React, { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function EditProfileForm() {
  const [countryCode, setCountryCode] = useState("+91");
  const [entity, setEntity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
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
    <Typography variant="body2" fontWeight={500} mb={0.5}>
      {text}
    </Typography>
  );

  return (
     <Box sx={{height:"100vh"}}>
    <Box
      sx={{
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{
          fontSize: "18px",
          padding: "12px 20px",
          borderBottom: "1px solid #ebebeb",
          "@media (max-width:540px)": {
            display: "none",
          },
        }}
      >
        Edit Profile
      </Typography>

      <Box sx={{ padding: "20px" }}>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={2}
          sx={{ textTransform: "uppercase" }}
        >
          {/* Row 1 */}
          <Box sx={{ flex: "1 1 48%" }}>
            {renderLabel("First Name")}
            <TextField fullWidth placeholder="Enter your first name" />
          </Box>

          <Box sx={{ flex: "1 1 48%" }}>
            {renderLabel("Last Name")}
            <TextField fullWidth placeholder="Enter your last name" />
          </Box>

          {/* Row 2 */}
          <Box sx={{ flex: "1 1 48%" }}>
            {renderLabel("Name of Entity")}
            <TextField fullWidth placeholder="Enter entity name" />
          </Box>

          <Box sx={{ flex: "1 1 48%" }}>
            {renderLabel("Entity Type")}
            <FormControl fullWidth>
              <Select
                value={entity}
                onChange={(e) => setEntity(e.target.value)}
                displayEmpty
                IconComponent={ChevronDown}
                renderValue={(selected) => selected || "Select Entity"}
              >
                <MenuItem value="" disabled>
                  Select Entity
                </MenuItem>
                <MenuItem value="Retailer">Retailer</MenuItem>
                <MenuItem value="Wholesaler">Wholesaler</MenuItem>
                <MenuItem value="Manufacturer">Manufacturer</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Row 3 */}
          <Box sx={{ flex: "1 1 48%" }}>
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
              <TextField fullWidth placeholder="Enter mobile number" />
            </Box>
          </Box>

          <Box sx={{ flex: "1 1 48%" }}>
            {renderLabel("Email")}
            <TextField fullWidth placeholder="Enter your email" />
          </Box>

          {/* Row 4 */}
          <Box sx={{ flex: "1 1 23%" }}>
            {renderLabel("Country")}
            <FormControl fullWidth>
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                displayEmpty
                IconComponent={ChevronDown}
                renderValue={(selected) => selected || "Select Country"}
              >
                <MenuItem value="" disabled>
                  Select Country
                </MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: "1 1 23%" }}>
            {renderLabel("State")}
            <FormControl fullWidth>
              <Select
                value={state}
                onChange={(e) => setState(e.target.value)}
                displayEmpty
                IconComponent={ChevronDown}
                renderValue={(selected) => selected || "Select State"}
              >
                <MenuItem value="" disabled>
                  Select State
                </MenuItem>
                <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                <MenuItem value="Gujarat">Gujarat</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: "1 1 23%" }}>
            {renderLabel("City")}
            <FormControl fullWidth>
              <Select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                displayEmpty
                IconComponent={ChevronDown}
                renderValue={(selected) => selected || "Select City"}
              >
                <MenuItem value="" disabled>
                  Select City
                </MenuItem>
                <MenuItem value="Jaipur">Jaipur</MenuItem>
                <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: "1 1 23%" }}>
            {renderLabel("Post Code")}
            <TextField fullWidth placeholder="Enter post code" />
          </Box>

          {/* Row 5 */}
          <Box sx={{ flex: "1 1 31%" }}>
            {renderLabel("PAN No.")}
            <TextField fullWidth placeholder="Enter PAN number" />
          </Box>

          <Box sx={{ flex: "1 1 31%" }}>
            {renderLabel("GST No.")}
            <TextField fullWidth placeholder="Enter GST number" />
          </Box>

          <Box sx={{ flex: "1 1 31%" }}>
            {renderLabel("Upload Document")}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <TextField
              fullWidth
              placeholder="Aadhar, PAN Card"
              value={fileName}
              onClick={() => {
                if (!fileName) fileInputRef.current?.click();
              }}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachFileIcon />
                  </InputAdornment>
                ),
                endAdornment: fileName && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFileRemove();
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        {/* Address */}
        <Box mt={3}>
          {renderLabel("Address")}
          <TextField
            fullWidth
            multiline
            minRows={3}
            placeholder="Enter your address"
          />
        </Box>

        {/* Submit */}
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 0, fontFamily: "Jost", fontWeight: 500 }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}
