/* eslint-disable @next/next/no-img-element */
"use client";

import { Box } from "@mui/material";

export default function ProductGallery() {
  return (
    <Box sx={{mx: "auto", py: 4 }}>
      <Box sx={{ marginBottom:'8px', background:'#fff', }}>
        <img
          src="./Categories/img1.png"
          alt="Bracelet Top"
          style={{ width: "457px",height:'600px', objectFit: "contain", display:'block', margin:'0 auto',padding: '20px', }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap:'8px',
          marginBottom:'8px',
        }}
      >
        <Box sx={{ flex: "1 1 300px", background:'#fff', }}>
          <img
            src="./Categories/img1.png"
            alt="Bracelet Left"
            style={{ width: "228px",height:'300px', objectFit: "contain", display:'block', margin:'0 auto',padding: '20px', }}
          />
        </Box>
        <Box sx={{ flex: "1 1 300px", background:'#fff',}}>
          <img
            src="./Categories/img1.png"
            alt="Bracelet Right"
            style={{ width: "228px",height:'300px', objectFit: "contain", display:'block', margin:'0 auto',padding: '20px', }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", background:'#fff', }}>
        <img
          src="./Categories/img1.png"
          alt="Bracelet Bottom"
          style={{ width: "457px",height:'600px', objectFit: "contain", display:'block', margin:'0 auto',padding: '20px', }}
        />
      </Box>
    </Box>
  );
}
