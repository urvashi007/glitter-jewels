"use client";

import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
  Container,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import React, { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { customVars } from "@/utils/theme";
import Header from "@/components/Header";
import Copyright from "@/components/Copyright";
import { navItems } from "@/utils/navItems";

export default function RegisterForm() {
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
      <Header
        logoLight=""
        logoDark="/logo.svg"
        navItems={navItems}
        forceScrolled={true}
      />

      <Box sx={(theme) => theme.mixins.sectionLayout}>
        <Container maxWidth="lg">
          <Box
            sx={{
              background: customVars.background.whitebg,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              padding: "20px",
            }}
          >
            <Typography variant="h5" mb={1}>Create an Account </Typography>
            <Typography variant="subtitle2" fontWeight={400} mb={4} sx={{fontFamily:customVars.fontFamily.secondary}}>Save time during checkout, view your shopping bag and saved items from any device and access your order history.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(12, 1fr)",
                },
                gap: 2,
                fontFamily: "Jost",
              }}
            >
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" },
                }}
              >
                {renderLabel("First Name")}
                <TextField fullWidth placeholder="Enter Your First Name" />
              </Box>
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" },
                }}
              >
                {renderLabel("Last Name")}
                <TextField fullWidth placeholder="Enter Your Last Name" />
              </Box>

              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" },
                }}
              >
                {renderLabel("Name of Entity")}
                <TextField fullWidth placeholder="Enter Entity Name" />
              </Box>
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" },
                }}
              >
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

              {/* Mobile + Email */}
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" },
                }}
              >
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
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" },
                }}
              >
                {renderLabel("Email")}
                <TextField fullWidth placeholder="Enter Your Email" />
              </Box>

              {/* Country, State, City, Post Code in one row */}
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" },
                }}
              >
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
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" },
                }}
              >
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
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" },
                }}
              >
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
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" },
                }}
              >
                {renderLabel("Post Code")}
                <TextField fullWidth placeholder="Enter Post Code" />
              </Box>

              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" },
                }}
              >
                {renderLabel("PAN No.")}
                <TextField fullWidth placeholder="Enter PAN Number" />
              </Box>
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" },
                }}
              >
                {renderLabel("GST No.")}
                <TextField fullWidth placeholder="Enter GST Number" />
              </Box>
              <Box
                sx={{
                  gridColumn: { xs: "span 12", sm: "span 12", md: "span 4" },
                }}
              >
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
                        <IconButton onClick={handleFileRemove}>
                          <CloseIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box sx={{ gridColumn: "span 12" }}>
                {renderLabel("Address")}
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  placeholder="Enter Your Address"
                />
              </Box>

              {/* Submit Button */}
              <Box
                sx={{
                  gridColumn: "span 12",
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 3,
                }}
              >
                <Button variant="contained" color="primary">
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Copyright />
    </Box>
  );
}
