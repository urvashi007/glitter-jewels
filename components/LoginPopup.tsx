"use client";

import { forwardRef } from "react";
import { Paper, Box } from "@mui/material";

type LoginPopupProps = {
  onLoginClick: () => void;
  onCreateAccountClick?: () => void;
};

const LoginPopup = forwardRef<HTMLDivElement, LoginPopupProps>(
  ({ onLoginClick, onCreateAccountClick }, ref) => {
    return (
      <Paper
        ref={ref}
        elevation={4}
        sx={{
          position: "absolute",
          right:0,
          top: 0,
          width: 260,
          borderRadius: 0,
          p: 2,
          zIndex: 1100,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "#445B9C",
            color: "#fff",
            padding: "10px 0",
            textAlign: "center",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: "14px",
          }}
          onClick={onLoginClick}
        >
          LOGIN
        </Box>
        <Box
          sx={{
            border: "1px solid #445B9C",
            color: "#445B9C",
            padding: "10px 0",
            textAlign: "center",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: "14px",
          }}
          onClick={onCreateAccountClick}
        >
          CREATE ACCOUNT
        </Box>
      </Paper>
    );
  }
);

LoginPopup.displayName = "LoginPopup"; // to avoid React warning

export default LoginPopup;
