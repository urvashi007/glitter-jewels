"use client";
import Image from 'next/image';
import React from "react";
import {
  Dialog,
  Box,
  Typography,
  Stack,
  Button,

} from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
};

export default function ConfirmationDialog({
  open,
  onClose,
  onConfirm,
  title = "Confirmation",
  message = "Are you sure, you want to continue?",
}: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box p={4} textAlign="center" maxWidth={400}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom:'16px'
            }}
          >
           <Image src="/delete.png" alt="Delete Icon" width={64} height={64} />
          </Box>
        </Box>
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Typography mb={3} sx={{fontFamily:'Jost', fontWeight:400}}>
          {message}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            sx={{ borderRadius:'0',fontFamily:'Jost'}}
            onClick={onConfirm}
          >
            YES, I AM SURE
          </Button>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ color: "#445B9C", borderRadius:'0', borderColor:'#445B9C', fontFamily:'Jost'}}
          >
            NO, I AM NOT SURE
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
}
