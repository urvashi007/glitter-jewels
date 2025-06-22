/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/forgot-password.tsx
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Header from "@/components/Header";
import NextLink from 'next/link';
import { Link } from '@mui/material';
import Copyright from "@/components/Copyright";

const ForgotPassword = () => {
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <Header
             logoLight=""
             logoDark="/logo.svg"
             navItems={[
               { label: "Our Expertise" },
               {
                 label: "Product",
                 submenu: ["Bracelets", "Earrings", "Necklace", "Pendant", "Rings", "View All"],
               },
               { label: "Enquiry" },
             ]}
             forceScrolled
           />

      <Box
        sx={{
          background: "#f1f2f6",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: {md:"center", xs:'flex-start;'},
          paddingTop:{xs:'80px',  md:'0'},
          p: 2,
        }}
      >
        <Box
          sx={{
            background: "#fff",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: "600px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", color: "#222222" }}
          >
            Forgot Password
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#404040", marginBottom: "20px", fontFamily:'jost', fontWeight:'400' }}
          >
            Please provide your account email address and we will send you an
            email to reset your password.
          </Typography>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            })}
            onSubmit={async (values, { resetForm }) => {
              setLoading(true);
              setErrorMessage("");
              setSuccessMessage("");
              try {
                const res = await fetch("/api/auth/forgot-password", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                });

                const data = await res.json();

                if (res.ok) {
                  setSuccessMessage("Reset email sent successfully!");
                  resetForm();
                } else {
                  setErrorMessage(data.error || "Something went wrong");
                }
              } catch (err) {
                setErrorMessage("Server error. Please try again later.");
              } finally {
                setLoading(false);
              }
            }}
          >
            {({ values, handleChange, handleBlur, touched, errors }) => (
              <Form>
          <Typography variant="body2" sx={{fontWeight:'500', fontFamily:'jost', color:'#404040', textTransform:'uppercase' }}>
                  Email
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  margin="normal"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  placeholder="Enter your email"
                  variant="outlined"
                  sx={{marginTop:'8px'}}
                />

                {successMessage && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    {successMessage}
                  </Alert>
                )}
                {errorMessage && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {errorMessage}
                  </Alert>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, background: "#445B9C", height: "48px" }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Send Reset Link"}
                </Button>
                <Box><NextLink href="/login" passHref legacyBehavior>
                <Link underline="hover" sx={{ color: "#445B9C", fontWeight: 500, textAlign:'center', display:'block', textTransform:'uppercase', fontFamily:'jost', marginTop:'20px' }}>
                Back to Login                </Link>
</NextLink></Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
      <Copyright />
    </>
  );
};

export default ForgotPassword;
