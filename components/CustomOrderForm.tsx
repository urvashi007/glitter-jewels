"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomOrderForm() {
  const radioOptions = [1, 2, 3, 4];
  const metalTypes = ["10 KT", "14 KT", "18 KT", "PALLADIUM"];
  const metalColors = ["#f5f5f5", "#e0e0e0", "#ffd700", "#a9a9a9"];
  const certifications = ["IGI", "GIA", "NAME", "NAME"];
  const hallmarks = ["BIS", "NAME", "NAME", "NAME"];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Upload section */}
        <Box
          sx={{
            flexShrink: 0,
            width: 526,
            height: 526,
            border: "1px dashed #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#999",
            fontSize: "14px",
            mx: "auto",
          }}
        >
          Upload Image
        </Box>

        {/* Form Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Make Custom Order
          </Typography>

          {/* Accordion: Metal Type */}
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>METAL TYPE</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {metalTypes.map((type) => (
                  <Button key={type} variant="outlined">
                    {type}
                  </Button>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Accordion: Metal Color */}
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>METAL COLOR</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
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
            </AccordionDetails>
          </Accordion>

          {/* Accordion: Diamond Quality */}
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>DIAMOND QUALITY</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                {radioOptions.map((val) => (
                  <Button key={val} variant={val === 1 ? "outlined" : "text"}>
                    {val}
                  </Button>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Accordion: Item Size */}
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>ITEM SIZE</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                {radioOptions.map((val) => (
                  <Button key={val} variant={val === 1 ? "outlined" : "text"}>
                    {val}
                  </Button>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Accordion: Lock Type */}
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>LOCK TYPE</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                {radioOptions.map((val) => (
                  <Button key={val} variant={val === 1 ? "outlined" : "text"}>
                    {val}
                  </Button>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Accordion: Certification */}
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>CERTIFICATION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                {certifications.map((cert) => (
                  <Button
                    key={cert}
                    variant={cert === "IGI" ? "outlined" : "text"}
                  >
                    {cert}
                  </Button>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Accordion: Hallmarking */}
          <Accordion
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>HALLMARKING</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                {hallmarks.map((mark) => (
                  <Button
                    key={mark}
                    variant={mark === "BIS" ? "outlined" : "text"}
                  >
                    {mark}
                  </Button>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Quantity */}
          <Select fullWidth displayEmpty sx={{ my: 2 }}>
            <MenuItem value="">Quantity</MenuItem>
            {[1, 2, 3, 4, 5].map((q) => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </Select>

          {/* Item No & Comments */}
          <Stack spacing={2} mb={4}>
            <TextField fullWidth placeholder="Item No." variant="outlined" />
            <TextField
              fullWidth
              placeholder="Comments"
              variant="outlined"
              multiline
              rows={4}
            />
          </Stack>

          <Button fullWidth variant="contained" sx={{ bgcolor: "#2f4eb6" }}>
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
