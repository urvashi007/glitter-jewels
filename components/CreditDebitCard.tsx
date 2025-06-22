

"use client";

import { Box, TextField, Typography, Stack } from "@mui/material";

export default function CreditDebitCard() {
  return (
    <Box>
      <Typography fontWeight={500} fontSize={12} mb={1}>
        CARD NUMBER
      </Typography>
      <TextField
        placeholder="Enter card number"
        fullWidth
        sx={{ mb: 2 }}
        InputProps={{ endAdornment:'' }}
      />

      <Typography fontWeight={500} fontSize={12} mb={1}>
        NAME ON CARD
      </Typography>
      <TextField placeholder="Enter name" fullWidth sx={{ mb: 2 }} />

      <Stack direction="row" spacing={2}>
        <Box flex={1}>
          <Typography fontWeight={500} fontSize={12} mb={1}>
            VALID THRU (MM/YY)
          </Typography>
          <TextField placeholder="Enter valid month & year" fullWidth />
        </Box>
        <Box flex={1}>
          <Typography fontWeight={500} fontSize={12} mb={1}>
            CVV
          </Typography>
          <TextField placeholder="Enter CVV" fullWidth />
        </Box>
      </Stack>
    </Box>
  );
}
