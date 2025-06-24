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
import { customVars } from "@/utils/theme";


function capitalizeWords(str: string) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}

interface CustomOrderFormProps {
  heading?: string;
  showAccordion?: boolean;
  accordionTitle?: string;
  accordionContent?: ReactNode;
  wishlistHead?: boolean;
}

export default function CustomOrderForm({
  showAccordion = false,
  wishlistHead = false,
  accordionContent,
}: CustomOrderFormProps) {
  const radioOptions = [1, 2, 3, 4];
  const metalTypes = ["10 KT", "14 KT", "18 KT", "PALLADIUM"];
  const metalColors = ["#E4BE99", "#fff", "#F3D951"];
  const certifications = ["IGI", "GIA", "NAME", "NAME"];
  const hallmarks = ["BIS", "NAME", "NAME", "NAME"];

  const [metalType, setMetalType] = useState("");
  const [diamondQuality, setDiamondQuality] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [lockType, setLockType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [hallmark, setHallmark] = useState("");
  const [certification, setCertification] = useState("");
  const [comments, setComments] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
    <Box sx={{ flex: 1 }}>
      {wishlistHead && <ProductCardWithWishlist />}

      {showAccordion && (
        <Accordion
          sx={{
            mb: 3,
            px: 0,
            py: 0,
            minHeight: "unset",
            boxShadow: "none",
            borderTop: `1px solid ${customVars.colors.gray}`,
            borderBottom: `1px solid ${customVars.colors.gray}`,
            "& .MuiButtonBase-root": {
              margin: 0,
              padding: 0,
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: customVars.fontSizes.sm,
                fontFamily: customVars.fontFamily.secondary,
                color: customVars.colors.dark,
              }}
            >
              SPECIFICATION AND DESCRIPTION
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0 0 20px 0" }}>
            <Box
              sx={{
                color: customVars.colors.dark,
                fontSize: customVars.fontSizes.sm,
                fontFamily: customVars.fontFamily.primary,
              }}
            >
              {accordionContent}
            </Box>
          </AccordionDetails>
        </Accordion>
      )}

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {/* SELECT FIELDS */}
        {[
          { label: "METAL TYPE", state: metalType, setState: setMetalType, options: metalTypes },
          { label: "DIAMOND QUALITY", state: diamondQuality, setState: setDiamondQuality, options: radioOptions },
          { label: "ITEM SIZE", state: itemSize, setState: setItemSize, options: radioOptions },
          { label: "LOCK TYPE", state: lockType, setState: setLockType, options: radioOptions },
          { label: "QUANTITY", state: quantity, setState: setQuantity, options: [1, 2, 3, 4, 5] },
          { label: "HALLMARKING", state: hallmark, setState: setHallmark, options: hallmarks },
          { label: "CERTIFICATION", state: certification, setState: setCertification, options: certifications },
        ].map(({ label, state, setState, options }) => (
          <Box key={label} sx={{ flex: "1 1 45%" }}>
            <Typography
              variant="formLabel" // Optional if theme variant is added
              sx={{
                fontFamily: customVars.fontFamily.secondary,
                fontSize: customVars.fontSizes.sm,
                fontWeight: 400,
                mb: 1,
                color: customVars.colors.dark,
              }}
            >
              {label}
            </Typography>
            <Select
              value={state}
              onChange={(e) => setState(e.target.value)}
              fullWidth
              displayEmpty
              IconComponent={ChevronDown}
              renderValue={(selected) =>
                selected ? capitalizeWords(String(selected)) : "Select"
              }
            >
              <MenuItem value="" disabled>Select</MenuItem>
              {options.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {capitalizeWords(String(opt))}
                </MenuItem>
              ))}
            </Select>
          </Box>
        ))}

        {/* METAL COLOR */}
        <Box sx={{ flex: "1 1 45%" }}>
          <Typography
            sx={{
              fontFamily: customVars.fontFamily.secondary,
              fontSize: customVars.fontSizes.sm,
              fontWeight: 400,
              mb: 1,
              color: customVars.colors.dark,
            }}
          >
            METAL COLOR
          </Typography>
          <Stack direction="row" spacing={2}>
            {metalColors.map((color, index) => (
              <Box
                key={index}
                onClick={() => setSelectedIndex(index)}
                sx={{
                  width: 48,
                  height: 48,
                  padding: "5px",
                  border: selectedIndex === index
                    ? `1px solid ${customVars.colors.accent}`
                    : `1px solid ${customVars.colors.colore2e2e2}`,
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: color,
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Box>

        {/* COMMENTS */}
        <Box sx={{ flex: "1 1 100%" }}>
          <Typography
            sx={{
              fontFamily: customVars.fontFamily.secondary,
              fontSize: customVars.fontSizes.sm,
              fontWeight: 400,
              mb: 1,
              color: customVars.colors.dark,
              textTransform: "uppercase",
            }}
          >
            Comments
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

        {/* SUBMIT */}
        <Box sx={{ flex: "1 1 100%" }}>
          <Button fullWidth variant="contained" onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
