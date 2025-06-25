"use client";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import { customVars } from "@/utils/theme";

export default function ChangePasswordForm() {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const handlePasswordChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const rules = [
    {
      label: "Having at least 8 Characters",
      valid: form.newPassword.length >= 8,
    },
    {
      label: "Includes at least one digit (0-9)",
      valid: /\d/.test(form.newPassword),
    },
    {
      label: "Includes at least one lowercase letter (a-z)",
      valid: /[a-z]/.test(form.newPassword),
    },
    {
      label: "Includes at least one special character (e.g. !,@,#,$,%,&*)",
      valid: /[!@#$%^&*]/.test(form.newPassword),
    },
    {
      label: "Includes at least one uppercase letter (A-Z)",
      valid: /[A-Z]/.test(form.newPassword),
    },
    {
      label: "Match your re-entered Password",
      valid:
        form.newPassword.length > 0 &&
        form.confirmPassword.length > 0 &&
        form.newPassword === form.confirmPassword,
    },
  ];

  const inputStyle = {
    flex: 1,
    mt: 1,
    "& .MuiOutlinedInput-root": { borderRadius: 0 },
    "& input::placeholder": {
      opacity: 1,
      color: customVars.colors.color5e5e5e,
    },
  };

  return (
    <Box>
      <Box
        sx={{
          background: customVars.background.whitebg,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            fontSize: customVars.fontSizes.md,
            padding: "12px 20px",
            borderBottom: `1px solid ${customVars.border.borderd5d5d5}`,
            "@media (max-width:540px)": {
              display: "none",
            },
          }}
        >
          Change Password
        </Typography>

        <Box sx={{ padding: "20px" }}>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
              },
              gap: "20px",
              textTransform: "uppercase",
              fontWeight: "400",
            }}
          >
            {/* Old Password */}
            <Box>
            <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">Old Password</Typography>
              <TextField
                placeholder="Enter old password"
                type={showPassword.old ? "text" : "password"}
                value={form.oldPassword}
                onChange={(e) =>
                  handlePasswordChange("oldPassword", e.target.value)
                }
                InputLabelProps={{ shrink: false }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowPassword((prev) => ({
                            ...prev,
                            old: !prev.old,
                          }))
                        }
                      >
                        {showPassword.old ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                sx={inputStyle}
              />
            </Box>

            {/* New Password */}
            <Box>
            <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">New Password</Typography>
              <TextField
                placeholder="Enter new password"
                type={showPassword.new ? "text" : "password"}
                value={form.newPassword}
                onChange={(e) =>
                  handlePasswordChange("newPassword", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowPassword((prev) => ({
                            ...prev,
                            new: !prev.new,
                          }))
                        }
                      >
                        {showPassword.new ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                sx={inputStyle}
              />
            </Box>
          </Box>

          {/* Confirm Password */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
              },
              gap: "20px",
              mt: 2,
            }}
          >
            <Box>
              <Typography fontSize={12} mb={0.5} fontWeight={500} fontFamily="Jost" textTransform="uppercase">
              Old Password
                              </Typography>
              <TextField
                placeholder="Confirm new password"
                type={showPassword.confirm ? "text" : "password"}
                value={form.confirmPassword}
                onChange={(e) =>
                  handlePasswordChange("confirmPassword", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowPassword((prev) => ({
                            ...prev,
                            confirm: !prev.confirm,
                          }))
                        }
                      >
                        {showPassword.confirm ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                sx={inputStyle}
              />
            </Box>
          </Box>

          {/* Rules */}
          <Typography mt={4} fontWeight={600}>
            Your new password must follow these rules
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            mt={2}
            gap={1}
          >
            {rules.map((rule, i) => (
              <Box
                key={i}
                display="flex"
                alignItems="center"
                width={{ xs: "100%", sm: "48%" }}
                gap={1}
              >
                <CheckCircle
                  fontSize="small"
                  sx={{ color: rule.valid ? "#4caf50" : "#ccc" }}
                />
                <Typography
                  variant="body2"
                  color={rule.valid ? customVars.colors.dark : customVars.colors.dark}
                  sx={{
                    fontFamily: customVars.fontFamily.secondary,
                    fontSize: customVars.fontSizes.base,
                  }}
                >
                  {rule.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Submit */}
          <Box display="flex" justifyContent="flex-end" mt={4}>
            <Button
              variant="contained"
            >
              Change Password
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
