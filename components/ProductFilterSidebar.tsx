/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Filter } from "@/utils/type";

interface SidebarProps {
  filters: Filter[];
}

export default function ProductFilterSidebar({ filters }: SidebarProps) {
  const [expanded, setExpanded] = useState<string | null>("Price");

  const handleToggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label));

  return (
    <Box>
      {filters.map((filter) => (
        <Box key={filter.label} borderBottom="1px solid #ddd" sx={{ py: 2 }}>
          {/* Filter Header */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => handleToggle(filter.label)}
            sx={{ cursor: "pointer" }}
          >
            <Typography fontWeight={600} fontSize="16px">
              {filter.label}
            </Typography>
            <IconButton size="small">
              {expanded === filter.label ? (
                <RemoveIcon sx={{ color: "#222" }} />
              ) : (
                <AddIcon sx={{ color: "#222" }} />
              )}
            </IconButton>
          </Stack>

          {/* Filter Options */}
          <Collapse in={expanded === filter.label} timeout="auto" unmountOnExit>
            <FormGroup sx={{ mt: 2 }}>
              {filter.options.map((opt) => (
                <FormControlLabel
                  key={opt.value}
                  control={
                    <Checkbox
                      sx={{
                        width: 20,
                        height: 20,
                        p: 0,
                        mr: 1.5,
                        color: "#A6A6A6",
                        "&.Mui-checked": {
                          color: "#222",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                        },
                      }}
                    />
                  }
                  label={
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <Typography
                        fontSize="14px"
                        sx={{ fontFamily: "Jost", fontWeight: 400 }}
                      >
                        {opt.value}
                      </Typography>
                      <Typography fontSize="14px" sx={{ color: "#222" }}>
                        ({opt.count})
                      </Typography>
                    </Box>
                  }
                  sx={{
                    m: 0,
                    mb: 1.5,
                    alignItems: "flex-start",
                    ".MuiFormControlLabel-label": {
                      width: "100%",
                    },
                  }}
                />
              ))}
            </FormGroup>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
