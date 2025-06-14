"use client";

import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";

export default function UploadImage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleClick = () => {
    if (!imagePreview) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent triggering the file input
    setImagePreview(null);
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontFamily: "Manrope",
          marginBottom: "20px",
          fontSize: "28px",
        }}
      >
        Reference Image
      </Typography>

      <Box
        onClick={handleClick}
        sx={{
          cursor: imagePreview ? "default" : "pointer",
          flexShrink: 0,
          width: 526,
          height: 526,
          border: "1px dashed #e2e2e2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#222",
          fontSize: "14px",
          mx: "auto",
          overflow: "hidden",
          position: "relative",
          "@media (max-width:768px)": {
            width: "100%",
            height: "300px",
          },
        }}
      >
        {imagePreview ? (
          <>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <IconButton
              onClick={handleRemoveImage}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#eee",
                },
              }}
              size="small"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        ) : (
          "Upload Image"
        )}

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </Box>
    </Box>
  );
}
