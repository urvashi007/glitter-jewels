"use client";

import { forwardRef } from "react";
import { Paper, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type LoginPopupProps = {
  onLoginClick: () => void;
  onCreateAccountClick?: () => void;
};

const LoginPopup = forwardRef<HTMLDivElement, LoginPopupProps>(
  ({ onLoginClick, onCreateAccountClick }, ref) => {
    const theme = useTheme();

    return (
      <Paper
        ref={ref}
        elevation={4}
        sx={{
          position: "absolute",
          right: 0,
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
        <Button
          variant="contained"
          fullWidth
          onClick={onLoginClick}
          sx={theme.mixins.buttonPrimary}
        >
          LOGIN
        </Button>
        <Button
          variant="outlined"
          fullWidth
          onClick={onCreateAccountClick}
          sx={theme.mixins.buttonOutlined}
        >
          CREATE ACCOUNT
        </Button>
      </Paper>
    );
  }
);

LoginPopup.displayName = "LoginPopup";

export default LoginPopup;
