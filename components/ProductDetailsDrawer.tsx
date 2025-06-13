"use client";

import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Divider,
  TextField,
  MenuItem,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const products = ["BGL230", "BGL229", "BGL228", "BGL227"];
const colors = ["#d1a17b", "#f5f5dc", "#fff44f"];

export default function ProductDetailsDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [metalColor, setMetalColor] = useState(colors[0]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 450, p: 3, maxHeight: "100vh", overflow: "auto" }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Add Product Details</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Tabs */}
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mt: 2 }}
        >
          {products.map((code) => (
            <Tab key={code} label={code} />
          ))}
        </Tabs>

        {/* Product Image */}
        <Box
          mt={2}
          mb={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="/bgl-product.jpg" // Replace with actual image path
            alt="Product"
            style={{ maxWidth: "100%", maxHeight: 200 }}
          />
        </Box>

        <Divider />

        {/* Title */}
        <Typography variant="subtitle1" mt={2} mb={1}>
          Specification and Description
        </Typography>

        {/* Form Fields with Flex */}
        <Box display="flex" flexWrap="wrap" gap={2}>
          <Box flex="1 1 45%">
            <TextField select label="Metal Type" fullWidth>
              <MenuItem value="Gold">Gold</MenuItem>
              <MenuItem value="Platinum">Platinum</MenuItem>
            </TextField>
          </Box>

          <Box flex="1 1 45%">
            <Typography variant="body2" gutterBottom>
              Metal Color
            </Typography>
            <ToggleButtonGroup
              value={metalColor}
              exclusive
              onChange={(e, val) => val && setMetalColor(val)}
              size="small"
            >
              {colors.map((color) => (
                <ToggleButton
                  key={color}
                  value={color}
                  sx={{
                    width: 30,
                    height: 30,
                    p: 0,
                    borderRadius: "50%",
                    border: "1px solid #ccc",
                    backgroundColor: color,
                  }}
                />
              ))}
            </ToggleButtonGroup>
          </Box>

          <Box flex="1 1 45%">
            <TextField select label="Diamond Quality" fullWidth>
              <MenuItem value="SI">SI</MenuItem>
              <MenuItem value="VS">VS</MenuItem>
            </TextField>
          </Box>

          <Box flex="1 1 45%">
            <TextField select label="Item Size" fullWidth>
              <MenuItem value="S">Small</MenuItem>
              <MenuItem value="M">Medium</MenuItem>
              <MenuItem value="L">Large</MenuItem>
            </TextField>
          </Box>

          <Box flex="1 1 45%">
            <TextField select label="Lock Type" fullWidth>
              <MenuItem value="Screw">Screw</MenuItem>
              <MenuItem value="Push">Push</MenuItem>
            </TextField>
          </Box>

          <Box flex="1 1 45%">
            <TextField select label="Quantity" fullWidth>
              {[...Array(10)].map((_, i) => (
                <MenuItem key={i} value={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box flex="1 1 45%">
            <TextField select label="Hallmarking" fullWidth>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </Box>

          <Box flex="1 1 45%">
            <TextField select label="Certification" fullWidth>
              <MenuItem value="IGI">IGI</MenuItem>
              <MenuItem value="GIA">GIA</MenuItem>
            </TextField>
          </Box>

          <Box flex="1 1 100%">
            <TextField label="Comments" multiline rows={3} fullWidth />
          </Box>
        </Box>

        {/* Submit Button */}
        <Box mt={3}>
          <Button variant="contained" color="primary" fullWidth>
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
