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
  Link,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import React, { useRef, useState } from "react";

export default function CreateAccountForm() {
  const [countryCode, setCountryCode] = useState("+91");
  const [entity, setEntity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [fileName, setFileName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    <Box
      sx={{
        background: "#fff",
        padding: "32px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Typography variant="h2" mb={1}>
        Create an Account
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={400}
        mb={4}
        fontSize={16}
        sx={{ color: "#404040" }}
      >
        Save time during checkout, view your shopping bag and saved items from
        any device and access your order history.
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
        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" } }}>
          {renderLabel("First Name")}
          <TextField fullWidth placeholder="Enter your first name" />
        </Box>

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" } }}>
          {renderLabel("Last Name")}
          <TextField fullWidth placeholder="Enter your last name" />
        </Box>

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" } }}>
          {renderLabel("Name of Entity")}
          <TextField fullWidth placeholder="Enter your company/entity name" />
        </Box>

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" } }}>
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

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" } }}>
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
            <TextField fullWidth placeholder="Enter your mobile number" />
          </Box>
        </Box>

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" } }}>
          {renderLabel("Email")}
          <TextField fullWidth placeholder="Enter your email address" />
        </Box>

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" } }}>
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

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" } }}>
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

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" } }}>
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

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" } }}>
          {renderLabel("Post Code")}
          <TextField fullWidth placeholder="Enter your postal code" />
        </Box>

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" } }}>
          {renderLabel("PAN No.")}
          <TextField fullWidth placeholder="Enter PAN Number" />
        </Box>

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" } }}>
          {renderLabel("GST No.")}
          <TextField fullWidth placeholder="Enter GST Number" />
        </Box>

        <Box
          sx={{ gridColumn: { xs: "span 12", sm: "span 12", md: "span 4" } }}
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

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" } }}>
          {renderLabel("Password")}
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </IconButton>
              ),
            }}
          />
        </Box>

        <Box sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 6" } }}>
          {renderLabel("Confirm Password")}
          <TextField
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </IconButton>
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
            placeholder="Enter your complete address"
          />
        </Box>

        <Box
          sx={{
            gridColumn: "span 12",
            display: {
              xs: "block",
              sm: "flex",
            },
            justifyContent: "flex-end",
            mt: 3,
          }}
        >
          <Typography
            variant="body2"
            fontWeight={400}
            mb={4}
            fontSize={16}
            sx={{ color: "#404040", marginRight: "auto" }}
          >
            Already have AVD account?{" "}
            <Link href="/auth/login" underline="hover" color="primary">
              Sign In
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#445B9C",
                color: "#445B9C",
                fontWeight: 500,
                height: "48px",
                fontSize: "16px",
                borderRadius: "0",
                fontFamily: "Jost",
                marginRight: "20px",
              }}
            >
              Back
            </Button>
            <Button variant="contained" color="primary">
              CREATE MY ACCOUNT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
