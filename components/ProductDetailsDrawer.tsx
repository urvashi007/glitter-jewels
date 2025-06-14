/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { X } from "lucide-react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomOrderForm from "./CustomOrderForm";
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
  const [selectedTab, setSelectedTab] = useState(0);
  const tabLabels = ["BGL230", "BGL229", "BGL228", "BGL227"];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{ width: 500, p: 4, fontFamily: "Manrope", position: "relative" }}
      >
        {/* Header */}
        <Box>
          <Typography
            variant="h5"
            sx={{ fontSize: "24px", fontWeight: "700", color: "#222" }}
          >
            Add Product Details
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 16, top: 16 }}
          >
            <X />
          </IconButton>
        </Box>

        {product && (
          <>
            {/* Tabs */}
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="standard"
              sx={{ mb: 2, mt: 4 }}
            >
              {tabLabels.map((label, index) => (
                <Tab key={label} label={label} value={index} />
              ))}
            </Tabs>

            {/* Image */}
            <Box sx={{ mb: 3 }}>
              <img
                src={product.image}
                alt={product.id}
                style={{
                  height: "300px",
                  margin: "0 auto",
                  objectFit: "cover",
                  textAlign: "center",
                  display: "block",
                }}
              />
            </Box>

            {/* Accordion for description only */}
            <Accordion
              sx={{
                mb: 3,
                px: "0",
                py: "0",
                minHeight: "unset",
                "& .MuiButtonBase-root": {
                  margin: 0,
                  padding: "0",
                },
                "&.css-1lj39kh-MuiAccordionDetails-root":
                  "    padding: 0 0 16px;",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                  SPECIFICATION AND DESCRIPTION
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 0 20px 0" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#222", fontSize: "14px" }}
                >
                  This is a placeholder description of the product. You can
                  update this section to show more detailed specs, material
                  info, or design notes.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        )}

        {/* Form stays outside */}
        <CustomOrderForm heading="" />
      </Box>
    </Drawer>
  );
}
