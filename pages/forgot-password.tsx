// pages/forgot-password.tsx
import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Header from "@/components/Header";

const ForgotPassword = () => {
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

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
          background: "#f1f2f6",
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            sx={{ color: "#404040", marginBottom: "20px" }}
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
                <Typography variant="body2" sx={{ mb: 0.5, color: "#333" }}>
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
                  placeholder="Enter Your Email"
                  variant="outlined"
                  sx={{
                    marginTop: "0",
                    "& .MuiOutlinedInput-root": {
                      fontWeight: 700,
                      fontFamily: "Manrope",
                      "& input::placeholder": {
                        fontWeight: "400",
                        color: "#5E5E5E",
                        fontSize: "16px",
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
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default ForgotPassword;
