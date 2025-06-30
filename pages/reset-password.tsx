import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Visibility, VisibilityOff, CheckCircle } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/components/Header";
import Copyright from "@/components/Copyright";
import { navItems } from "@/utils/navItems";

// Validation functions
const passwordRules = [
  {
    label: "Having at least 8 Characters",
    test: (val: string) => val.length >= 8,
  },
  {
    label: "Includes at least one digit (0-9)",
    test: (val: string) => /\d/.test(val),
  },
  {
    label: "Includes at least one lowercase letter (a-z)",
    test: (val: string) => /[a-z]/.test(val),
  },
  {
    label: "Includes at least one uppercase letter (A-Z)",
    test: (val: string) => /[A-Z]/.test(val),
  },
  {
    label: "Includes at least one special character (e.g. !,@,#,$,%,&*)",
    test: (val: string) => /[!@#$%^&*]/.test(val),
  },
];

const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Please enter a password"),
      confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      alert("Password successfully reset");
    },
  });

  const isRulePassed = (testFn: (val: string) => boolean) => {
    return testFn(formik.values.password);
  };

  const allRulesPassed =
    passwordRules.every((rule) => isRulePassed(rule.test)) &&
    formik.values.password === formik.values.confirmPassword;

  return (
    <>
      <Header
        logoLight=""
        logoDark="/logo.svg"
        navItems={navItems}
        forceScrolled={true}
      />

      <Box
        sx={{
          background: "#f1f2f6",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            background: "#fff",
            p: { xs: 3, sm: 4 },
            borderRadius: 2,
            boxShadow: 3,
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#222",
              fontFamily: "Manrope",
              marginBottom:'12px',
              fontSize: {
                xs: "22px",
                sm: "20px",
                md: "30px",
              },
            }}
          >
            Reset Password
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#404040", fontFamily: "jost", fontWeight: "400", marginBottom:'32px' }}
          >
            Enter a new password to reset your password
          </Typography>

          {/* New Password */}
          <Box sx={{ marginBottom:'24px' }}>
              <Typography variant="body2" sx={{ mb: 0.5,fontWeight:'500', fontFamily:'jost', color:'#404040', textTransform:'uppercase'}}>
              New Password
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Confirm Password */}
          <Box sx={{ mb: 3 }}>
             <Typography variant="body2" sx={{ mb: 0.5,fontWeight:'500', fontFamily:'jost', color:'#404040', textTransform:'uppercase'}}>
              Confirm New Password
            </Typography>
            <TextField
              fullWidth
              type={showConfirm ? "text" : "password"}
              placeholder="Enter confirm new password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirm(!showConfirm)}
                      edge="end"
                    >
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  fontWeight: 500,
                  "& input::placeholder": {
                    fontWeight: 400,
                    color: "#5E5E5E",
                  },
                },
              }}
            />
          </Box>

          {/* Password Rules */}
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, mb: 1, color: "#333" }}
          >
            Your new password must follow these rules
          </Typography>
          <List dense sx={{ mb: 3 }}>
            {passwordRules.map((rule, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{ alignItems: "flex-start" }}
              >
                <ListItemIcon sx={{ minWidth: 28, mt: "3px" }}>
                  <CheckCircle
                    sx={{
                      color: isRulePassed(rule.test) ? "#4caf50" : "#9E9E9E",
                      fontSize: 18,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "14px",
                    color: "#5e5e5e",
                  }}
                  primary={rule.label}
                />
              </ListItem>
            ))}
            <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
              <ListItemIcon sx={{ minWidth: 28, mt: "3px" }}>
                <CheckCircle
                  sx={{
                    color:
                      formik.values.password &&
                      formik.values.password === formik.values.confirmPassword
                        ? "#4caf50"
                        : "#9E9E9E",
                    fontSize: 18,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Match your re-entered Password"
                primaryTypographyProps={{ fontSize: "14px", color: "#5e5e5e" }}
              />
            </ListItem>
          </List>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={!allRulesPassed}
            sx={{
              background: "#445B9C",
              height: "48px",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            CREATE NEW PASSWORD
          </Button>
        </Box>
      </Box>

      <Copyright />
    </>
  );
};

export default ResetPasswordPage;
