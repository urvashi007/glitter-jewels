import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  Paper,
  Container,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/components/Header";
import loginContent from "./content/loginContent.json";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Please enter your email"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Please enter your Password"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Login failed");

        alert("Login successful");
      } catch (error: any) {
        setErrors({ password: error.message });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { leftSection, rightSection } = loginContent;

  return (
    <>
      <Header
        logoLight=""
        logoDark="/logo.svg"
        navItems={["HOME", "PRODUCTS", "COLLECTIONS", "DIAMONDS"]}
        forceScrolled={true}
      />

      <Box
        sx={{
          background: "#EDEFF6",
          minHeight: "100vh",
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              overflow: "hidden",
              boxShadow: "0px 4px 12px rgba(27, 36, 44, 0.08)",
              borderRadius: "6px",
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                flex: 1,
                background: "#fff",
                padding: "40px 60px 40px 40px",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "1px",
                  height: "80%",
                  background: "#E2E2E2",
                  right: "0px",
                  top: "45px",
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#222",
                  fontFamily: "Manrope",
                }}
              >
                {leftSection.title}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#404040" }}
              >
                {leftSection.description}
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  mt: 4,
                  height: "48px",
                  borderColor: "#445B9C",
                  color: "#445B9C",
                  background: "none",
                  fontWeight: "500",
                }}
              >
                {leftSection.buttonText}
              </Button>
            </Box>

            {/* Right Section */}
            <Box sx={{ flex: 1, padding: "40px 40px 40px 60px" }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#222",
                  fontFamily: "Manrope",
                }}
              >
                {rightSection.title}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#404040" }}
              >
                {rightSection.description}
              </Typography>

              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{ marginTop: "32px" }}
              >
                {/* Email Field */}
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ mb: 0.5, color: "#333" }}
                  >
                    {rightSection.emailLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.email && Boolean(formik.errors.email)
                    }
                    helperText={
                      formik.touched.email && formik.errors.email
                    }
                    placeholder="Enter Your Email"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontWeight: 700,
                        fontFamily: "Manrope",
                        "& input::placeholder": {
                          fontWeight: '400',
                          color: "#5E5E5E",
                          fontSize:'16px',
                        },
                        "& fieldset": {
                          borderWidth: "1px",
                        },
                        "&.Mui-focused fieldset": {
                          borderWidth: "1px",
                          borderColor: "#445B9C",
                        },
                        "&.Mui-error fieldset": {
                          borderWidth: "1px",
                          borderColor: "#f44336",
                        },
                      },
                    }}
                  />
                </Box>

                {/* Password Field */}
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{mb: 0.5, color: "#404040" }}
                  >
                    {rightSection.passwordLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password &&
                      Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    placeholder="Enter your password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleTogglePassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontWeight: 700,
                        fontFamily: "Manrope",
                        "& input::placeholder": {
                          fontWeight: "normal",
                          color: "#5E5E5E",
                        },
                        "& fieldset": {
                          borderWidth: "1px",
                        },
                        "&.Mui-focused fieldset": {
                          borderWidth: "1px",
                          borderColor: "#445B9C",
                        },
                        "&.Mui-error fieldset": {
                          borderWidth: "1px",
                          borderColor: "#f44336",
                        },
                      },
                    }}
                  />
                </Box>

                {/* Forgot Password Link */}
                <Box textAlign="right" sx={{ mt: 1 }}>
                  <Link
                    href="/forgot-password"
                    underline="hover"
                    sx={{ color: "#445B9C" }}
                  >
                    {rightSection.forgotPassword}
                  </Link>
                </Box>

                {/* Submit Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={formik.isSubmitting}
                  sx={{
                    mt: 3,
                    background: "#445B9C",
                    height: "48px",
                    fontWeight: 600,
                  }}
                >
                  {rightSection.loginButton}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default LoginPage;
