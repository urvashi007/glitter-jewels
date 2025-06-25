"use client";

import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  wrapperBoxStyle,
  removeButtonStyle,
  headingStyle,
} from "./UploadImage.style";

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
    e.stopPropagation();
    setImagePreview(null);
  };

  return (
    <Box>
      <Typography variant="h6" mb={2} sx={headingStyle}>
        Reference Image
      </Typography>

      <Box
        onClick={handleClick}
        sx={{
          ...wrapperBoxStyle,
          cursor: imagePreview ? "default" : "pointer",
        }}
      >
        {imagePreview ? (
          <>
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              style={{ objectFit: "cover" }}
            />
            <IconButton
              onClick={handleRemoveImage}
              sx={removeButtonStyle}
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
