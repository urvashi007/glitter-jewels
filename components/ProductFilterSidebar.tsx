'use client';

import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove'; // minus icon
import AddIcon from '@mui/icons-material/Add'; // plus icon
import { useState } from 'react';

type Filter = {
  label: string;
  options: string[];
};

interface SidebarProps {
  filters: Filter[];
}

export default function ProductFilterSidebar({ filters }: SidebarProps) {
  const [expanded, setExpanded] = useState<string | null>('Price');

  const handleToggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label));

  return (
    <>
      {filters.map((filter) => (
        <Box
          key={filter.label}
          borderBottom="1px solid #ddd"
          sx={{
            padding: '12px 0',
            '&:first-of-type': {
              borderTop: '1px solid #ddd',
            },
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => handleToggle(filter.label)}
            sx={{ cursor: 'pointer' }}
          >
            <Typography>{filter.label}</Typography>
            <IconButton size="small">
              {expanded === filter.label ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Stack>

          <Collapse in={expanded === filter.label} timeout="auto">
            <FormGroup>
              {filter.options.map((opt) => (
                <FormControlLabel
                  key={opt}
                  control={<Checkbox />}
                  label={
                    <Typography sx={{ fontSize: '14px' }}>
                      {opt}
                    </Typography>
                  }
                />
              ))}
            </FormGroup>
          </Collapse>
        </Box>
      ))}
    </>
  );
}
