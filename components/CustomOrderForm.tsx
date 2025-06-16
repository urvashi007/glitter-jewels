"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductCardWithWishlist from "./ProductCardWithWishlist";

// Props interface
interface CustomOrderFormProps {
  heading?: string;
  showAccordion?: boolean;
  accordionTitle?: string;
  accordionContent?: ReactNode;
  wishlistHead?:boolean;
}

export default function CustomOrderForm({
  showAccordion = false,
  wishlistHead = false,
  accordionContent,
}: CustomOrderFormProps) {
  const radioOptions = [1, 2, 3, 4];
  const metalTypes = ["10 KT", "14 KT", "18 KT", "PALLADIUM"];
  const metalColors = ["#f5f5f5", "#e0e0e0", "#ffd700", "#a9a9a9"];
  const certifications = ["IGI", "GIA", "NAME", "NAME"];
  const hallmarks = ["BIS", "NAME", "NAME", "NAME"];

  // State variables
  const [metalType, setMetalType] = useState("");
  const [diamondQuality, setDiamondQuality] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [lockType, setLockType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [hallmark, setHallmark] = useState("");
  const [certification, setCertification] = useState("");
  const [comments, setComments] = useState("");

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
    console.log("Submitted Custom Order:", formData);
  };

  return (
    <Box sx={{ flex: 1, }}>
     
       
       {/* whishlist Head */}
       {wishlistHead && (
       <ProductCardWithWishlist />
      )}

       {/* whishlist Head */}




      {/* accordian */}
      {showAccordion && (
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
            "&.css-1lj39kh-MuiAccordionDetails-root": {
              padding: "0 0 16px",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              SPECIFICATION AND DESCRIPTION
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0 0 20px 0" }}>
            <Box
              sx={{ color: "#222", fontSize: "14px", fontFamily: "Manrope" }}
            >
              {accordionContent}
            </Box>
          </AccordionDetails>
        </Accordion>
      )}
  {/* accordian */}


      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {/* METAL TYPE */}
        <Box sx={{ flex: "1 1 45%" }}>
          <Typography
            fontWeight={500}
            mb={1}
            sx={{ fontFamily: "Manrope", fontSize: "14px", color: "#222" }}
          >
            METAL TYPE
          </Typography>
          <Select
            value={metalType}
            onChange={(e) => setMetalType(e.target.value)}
            fullWidth
            displayEmpty
            IconComponent={ChevronDown}
            renderValue={(selected) => selected || "Select Metal Type"}
            sx={{ "&.MuiOutlinedInput-root": { borderRadius: 0 } }}
          >
            <MenuItem value="" disabled>
              Select Metal Type
            </MenuItem>
            {metalTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* METAL COLOR */}
        <Box sx={{ flex: "1 1 45%" }}>
          <Typography
            fontWeight={500}
            mb={1}
            sx={{ fontFamily: "Manrope", fontSize: "14px", color: "#222" }}
          >
            METAL COLOR
          </Typography>
          <Stack direction="row" spacing={2}>
            {metalColors.map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: color,
                  border: "1px solid #ccc",
                  cursor: "pointer",
                  padding:'5px'
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* DIAMOND QUALITY */}
        <Box sx={{ flex: "1 1 45%" }}>
          <Typography
            fontWeight={500}
            mb={1}
            sx={{ fontFamily: "Manrope", fontSize: "14px", color: "#222" }}
          >
            DIAMOND QUALITY
          </Typography>
          <Select
            value={diamondQuality}
            onChange={(e) => setDiamondQuality(e.target.value)}
            fullWidth
            displayEmpty
            IconComponent={ChevronDown}
            renderValue={(selected) => selected || "Select Diamond Quality"}
          >
            <MenuItem value="" disabled>
              Select Diamond Quality
            </MenuItem>
            {radioOptions.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* ITEM SIZE */}
        <Box sx={{ flex: "1 1 45%" }}>
          <Typography
            fontWeight={500}
            mb={1}
            sx={{ fontFamily: "Manrope", fontSize: "14px", color: "#222" }}
          >
            ITEM SIZE
          </Typography>
          <Select
            value={itemSize}
            onChange={(e) => setItemSize(e.target.value)}
            fullWidth
            displayEmpty
            IconComponent={ChevronDown}
            renderValue={(selected) => selected || "Select Item Size"}
          >
            <MenuItem value="" disabled>
              Select Item Size
            </MenuItem>
            {radioOptions.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* LOCK TYPE */}
        <Box sx={{ flex: "1 1 45%" }}>
          <Typography
            fontWeight={500}
            mb={1}
            sx={{ fontFamily: "Manrope", fontSize: "14px", color: "#222" }}
          >
            LOCK TYPE
          </Typography>
          <Select
            value={lockType}
            onChange={(e) => setLockType(e.target.value)}
            fullWidth
            displayEmpty
            IconComponent={ChevronDown}
            renderValue={(selected) => selected || "Select Lock Type"}
          >
            <MenuItem value="" disabled>
              Select Lock Type
            </MenuItem>
            {radioOptions.map((val) => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* QUANTITY */}
        <Box sx={{ flex: "1 1 45%" }}>
          <Typography
            fontWeight={500}
            mb={1}
            sx={{ fontFamily: "Manrope", fontSize: "14px", color: "#222" }}
          >
            QUANTITY
          </Typography>
          <Select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
            displayEmpty
            IconComponent={ChevronDown}
            renderValue={(selected) => selected || "Select Quantity"}
          >
            <MenuItem value="" disabled>
              Select Quantity
            </MenuItem>
            {[1, 2, 3, 4, 5].map((q) => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* HALLMARKING */}
        <Box sx={{ flex: "1 1 45%" }}>
          <Typography
            fontWeight={500}
            mb={1}
            sx={{ fontFamily: "Manrope", fontSize: "14px", color: "#222" }}
          >
            HALLMARKING
          </Typography>
          <Select
            value={hallmark}
            onChange={(e) => setHallmark(e.target.value)}
            fullWidth
            displayEmpty
            IconComponent={ChevronDown}
            renderValue={(selected) => selected || "Select Hallmark"}
          >
            <MenuItem value="" disabled>
              Select Hallmark
            </MenuItem>
            {hallmarks.map((mark) => (
              <MenuItem key={mark} value={mark}>
                {mark}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* CERTIFICATION */}
        <Box sx={{ flex: "1 1 45%" }}>
          <Typography
            fontWeight={500}
            mb={1}
            sx={{ fontFamily: "Manrope", fontSize: "14px", color: "#222" }}
          >
            CERTIFICATION
          </Typography>
          <Select
            value={certification}
            onChange={(e) => setCertification(e.target.value)}
            fullWidth
            displayEmpty
            IconComponent={ChevronDown}
            renderValue={(selected) => selected || "Select Certification"}
          >
            <MenuItem value="" disabled>
              Select Certification
            </MenuItem>
            {certifications.map((cert) => (
              <MenuItem key={cert} value={cert}>
                {cert}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* COMMENTS */}
        <Box sx={{ flex: "1 1 100%" }}>
          <Typography
            fontWeight={500}
            mb={1}
            sx={{ fontFamily: "Manrope", fontSize: "14px", color: "#222" }}
          >
            COMMENTS
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Comments"
            variant="outlined"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </Box>

        {/* SUBMIT BUTTON */}
        <Box sx={{ flex: "1 1 100%" }}>
          <Button fullWidth variant="contained" onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
