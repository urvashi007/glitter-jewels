// components/CustomSnackbar.tsx
import { Snackbar, SnackbarProps } from "@mui/material";
import React from "react";

export interface CustomSnackbarProps extends SnackbarProps {
  message: string;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  onClose,
  message,
  autoHideDuration = 3000,
  anchorOrigin = { vertical: "bottom", horizontal: "center" },
  ...rest
}) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      message={message}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      {...rest}
    />
  );
};

export default CustomSnackbar;
