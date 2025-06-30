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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/components/Header";
import loginContent from "./content/loginContent.json";
import Copyright from "@/components/Copyright";
import { navItems } from "@/utils/navItems";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Please enter your email"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Please enter your Password"),
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
       navItems={navItems}
        forceScrolled
      />

      <Box
        sx={{
          background: "#EDEFF6",
          minHeight: {md:'100vh', sm:'inherit'},
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 6,
        
        }}
      >
        <Container>
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              overflow: "hidden",
              boxShadow: "0px 4px 12px rgba(27, 36, 44, 0.08)",
              borderRadius: "6px",
              marginTop: {xs:'40px', md:'0'}
              
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                background: "#fff",
                px: { xs: 3, md: 5 },
                py: { xs: 4, md: 5 },
                position: "relative",
                borderBottom: { xs: "1px solid #E2E2E2", md: "none" },
                order: { xs: 2, md: 1 },
                
                "&::before": {
                  content: { xs: "none", md: '""' },
                  position: "absolute",
                  width: "1px",
                  height: "80%",
                  background: "#E2E2E2",
                  right: 0,
                  top: "45px",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
               
                  fontWeight: 700,
                  color: "#222",
                  fontFamily: "Manrope",
                  marginBottom:'14px',
                  fontSize: {
                    xs: "22px", 
                    sm: "20px",
                    md: "30px",
                  },
                
                  
                }}
              >
                {leftSection.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#404040", fontFamily:'jost', fontWeight:'400' }}>
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
                  fontWeight: 500,
                  fontFamily:'jost',
                }}
              >
                {leftSection.buttonText}
              </Button>
            </Box>

            {/* Right Section */}
            <Box
              sx={{
                px: { xs: 3, md: 5 },
                py: { xs: 4, md: 5 },
                background: "#fff",
                order: { xs: 1, md: 2 },
               paddingBottom:{xs:'40px'},
               borderBottom:{xs:'1px solid #ddd', md:'none'}
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#222",
                  fontFamily: "Manrope",
                  mb: 2,
                  fontSize: {
                    xs: "22px", 
                    sm: "20px",
                    md: "30px",
                  },
                }}
              >
                {rightSection.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#404040", fontFamily:'jost', fontWeight:'400' }}>
                {rightSection.description}
              </Typography>

              <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 4 }}>
                {/* Email */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ mb: 0.5,fontWeight:'500', fontFamily:'jost', color:'#404040', textTransform:'uppercase'}}>
                    {rightSection.emailLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    placeholder="Enter your email"
                    variant="outlined"
                   
                  />
                </Box>

                {/* Password */}
                <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 0.5,fontWeight:'500', fontFamily:'jost', color:'#404040', textTransform:'uppercase'}}>
                    {rightSection.passwordLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    placeholder="Enter your password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                   
                  />
                </Box>

                {/* Forgot Password */}
                <Box textAlign="right" sx={{ mt: 1 }}>
                  <Link href="/forgot-password" underline="hover" sx={{ color: "#445B9C", fontFamily:'jost', fontWeight:'500' }}>
                    {rightSection.forgotPassword}
                  </Link>
                </Box>

                {/* Login Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={formik.isSubmitting}
                  sx={{
                    mt: 3,
                    background: "#445B9C",
                    height: "48px",
                    fontWeight: 500,
                    fontFamily:'jost'
                  }}
                >
                  {rightSection.loginButton}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Copyright />
    </>
  );
};

export default LoginPage;
