"use client";

import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Select,
  InputLabel,
  FormControl,
  OutlinedInput,
  IconButton,
  FormHelperText,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff, CloudUpload } from "@mui/icons-material";
import { useState } from "react";

// const initialState = {
//   firstName: '',
//   lastName: '',
//   entityName: '',
//   entityType: '',
//   mobile: '',
//   email: '',
//   postcode: '',
//   country: '',
//   state: '',
//   city: '',
//   pan: '',
//   password: '',
//   confirmPassword: '',
//   address: '',
// };

export default function RegistrationForm() {
  // const [form, setForm] = useState(initialState);
  // const [errors, setErrors] = useState<Record<string, string>>({});
  // const [showPassword, setShowPassword] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  //   setErrors({ ...errors, [e.target.name]: '' });
  // };

  // const handleSubmit = () => {
  //   const newErrors: Record<string, string> = {};
  //   const requiredFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];

  //   requiredFields.forEach((field) => {
  //     if (!form[field]) newErrors[field] = 'This field is required';
  //   });

  //   if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
  //     newErrors.email = 'Enter a valid email';
  //   }

  //   if (form.password !== form.confirmPassword) {
  //     newErrors.confirmPassword = 'Passwords do not match';
  //   }

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     console.log('Form submitted:', form);
  //   }
  // };

  return (
    <Box sx={{ p: 4, maxWidth: 1100, mx: "auto" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Create an Account
      </Typography>
      <Typography variant="body2" gutterBottom>
        Save time during checkout, view your shopping bag and saved items from
        any device and access your order history.
      </Typography>

      <Grid item spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 0.5, color: "#333" }}>
            First Name
          </Typography>

          <TextField
            fullWidth
            name="email"
            margin="normal"
            // onChange={handleChange}
            // error={!!errors.firstName}
            // helperText={errors.firstName}
            placeholder="Enter Your Email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 0.5, color: "#333" }}>
            Last Name
          </Typography>
          <TextField
            fullWidth
            name="lastName"
            // onChange={handleChange}
            // error={!!errors.lastName}
            // helperText={errors.lastName}
            placeholder="Enter Your Email"
          />
        </Grid>

        {/* <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Name of Entity"
            name="entityName"
            value={form.entityName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Entity</InputLabel>
            <Select
              value={form.entityType}
              onChange={(e) => setForm({ ...form, entityType: e.target.value })}
              input={<OutlinedInput label="Entity" />}
            >
              <MenuItem value="Retailer">Retailer</MenuItem>
              <MenuItem value="Wholesaler">Wholesaler</MenuItem>
              <MenuItem value="Distributor">Distributor</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="Post Code" name="postcode" value={form.postcode} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel>Select Country</InputLabel>
            <Select
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              input={<OutlinedInput label="Select Country" />}
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
              <MenuItem value="Germany">Germany</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel>Select State</InputLabel>
            <Select
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              input={<OutlinedInput label="Select State" />}
            >
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel>Select City</InputLabel>
            <Select
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              input={<OutlinedInput label="Select City" />}
            >
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="PAN No." name="pan" value={form.pan} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<CloudUpload />}
            sx={{ height: '56px', borderStyle: 'dashed', color: '#888' }}
          >
            Upload Any Of Above Documents
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={!!errors.password}>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              name="password"
              onChange={handleChange}
              endAdornment={
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
              label="Password"
            />
            {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            multiline
            rows={2}
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
          <Typography>
            Already on glitter jewels?{' '}
            <Typography component="a" href="/login" color="primary" fontWeight="bold" sx={{ cursor: 'pointer' }}>
              Sign In
            </Typography>
          </Typography>
          <Box>
            <Button variant="outlined" sx={{ mr: 2 }}>
              Back
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Create My Account
            </Button>
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}
