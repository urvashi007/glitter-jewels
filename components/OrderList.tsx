
"use client";

import {
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function OrderList() {
  const radioOptions = [1, 2, 3, 4];
  const metalTypes = ["10 KT", "14 KT", "18 KT", "PALLADIUM"];
  const metalColors = ["#D2A679", "#FFFFFF", "#F8DE7E"];
  const certifications = ["IGI", "GIA", "NAME", "NAME"];
  const hallmarks = ["BIS", "NAME", "NAME", "NAME"];

  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (panel: string) =>
    setExpanded((prev) => (prev === panel ? null : panel));

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h5" fontWeight={600} mb={4}>
        Make Custom Order
      </Typography>

      {/* Sections */}
      {[
        {
          title: "METAL TYPE",
          content: (
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {metalTypes.map((type) => (
                <Button key={type} variant="outlined">
                  {type}
                </Button>
              ))}
            </Stack>
          ),
        },
        {
          title: "METAL COLOR",
          content: (
            <Stack direction="row" spacing={2}>
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
          ),
        },
        {
          title: "DIAMOND QUALITY",
          content: (
            <Stack direction="row" spacing={2}>
              {radioOptions.map((val) => (
                <Button key={val} variant={val === 1 ? "outlined" : "text"}>
                  {val}
                </Button>
              ))}
            </Stack>
          ),
        },
        {
          title: "ITEM SIZE",
          content: (
            <Stack direction="row" spacing={2}>
              {radioOptions.map((val) => (
                <Button key={val} variant={val === 1 ? "outlined" : "text"}>
                  {val}
                </Button>
              ))}
            </Stack>
          ),
        },
        {
          title: "LOCK TYPE",
          content: (
            <Stack direction="row" spacing={2}>
              {radioOptions.map((val) => (
                <Button key={val} variant={val === 1 ? "outlined" : "text"}>
                  {val}
                </Button>
              ))}
            </Stack>
          ),
        },
        {
          title: "CERTIFICATION",
          content: (
            <Stack direction="row" spacing={2}>
              {certifications.map((cert) => (
                <Button
                  key={cert}
                  variant={cert === "IGI" ? "outlined" : "text"}
                >
                  {cert}
                </Button>
              ))}
            </Stack>
          ),
        },
        {
          title: "HALLMARKING",
          content: (
            <Stack direction="row" spacing={2}>
              {hallmarks.map((mark) => (
                <Button
                  key={mark}
                  variant={mark === "BIS" ? "outlined" : "text"}
                >
                  {mark}
                </Button>
              ))}
            </Stack>
          ),
        },
      ].map(({ title, content }) => (
        <Box key={title} sx={{ borderBottom: "1px solid #eee", mb: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => toggle(title)}
            sx={{
              cursor: "pointer",
              py: 1,
            }}
          >
            <Typography fontWeight={600}>{title}</Typography>
            <IconButton size="small">
              {expanded === title ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Stack>
          <Collapse in={expanded === title} timeout="auto" unmountOnExit>
            <Box py={1}>{content}</Box>
          </Collapse>
        </Box>
      ))}

      {/* Quantity */}
      <Select fullWidth displayEmpty sx={{ my: 2 }}>
        <MenuItem value="">Quantity</MenuItem>
        {[1, 2, 3, 4, 5].map((q) => (
          <MenuItem key={q} value={q}>
            {q}
          </MenuItem>
        ))}
      </Select>

      {/* Comments */}
      <Stack spacing={2} mb={4}>
        <TextField fullWidth placeholder="Comments" multiline rows={4} />
      </Stack>

      <Button fullWidth variant="contained" sx={{ bgcolor: "#2f4eb6" }}>
        SUBMIT
      </Button>
    </Container>
  );
}
