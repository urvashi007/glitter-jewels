/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import { X } from "lucide-react";

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
        sx={{ width: 550, fontFamily: "Manrope", position: "relative", "@media (max-width:540px)": {
         width:'100%',
        }, }}
      >
        {/* Header */}
        <Box sx={{borderBottom:'1px solid #ebebeb', padding:'22px 20px'}}>
          <Typography
            variant="h5"
            sx={{ fontSize: "24px", fontWeight: "700", color: "#222" }}
          >
            Add Product Details
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 16, top: 18 }}
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
              sx={{padding:'0px 16px 0 16px', borderBottom:'1px solid #ebebeb', marginBottom:'10px', '&.css-1f9mxli-MuiTabs-indicator' :{    height:'3px'}}}
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

          </>
        )}
<Box sx={{padding:'0px  20px 22px 20px'}}>


        {/* Form stays outside */}
          <CustomOrderForm
                  heading=""
                  showAccordion={true}
                  wishlistHead = {false}
                  accordionTitle="Product Specification"
                  accordionContent={
                    <>
                      <Typography variant="body2" fontWeight={500}>
                        Made with 18KT Gold & VVS Diamonds.
                      </Typography>
                      <ul style={{ paddingLeft: 16 }}>
                        <li>Metal: 18KT Yellow Gold</li>
                        <li>Stone: Certified VVS Diamonds</li>
                        <li>Warranty: 1 Year</li>
                      </ul>
                    </>
                  }
                />
      </Box>
      </Box>
    </Drawer>
  );
}
