// pages/reset-password.tsx
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Header from '@/components/Header';

const ResetPasswordPage = () => {
  return (
          <> 
      <Header
        logoLight=""
        logoDark="/logo.svg"
        navItems={[
          { label: "Our Expertise" },
          {
            label: "Product",
            submenu: [
              "Bracelets",
              "Earrings",
              "Necklace",
              "Pendant",
              "Rings",
              "View All",
            ],
          },
          { label: "Enquiry" },
        ]}
        forceScrolled={true}
      />
      <Box
        sx={{
          background: '#f1f2f6',
          minHeight: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
          p: 2
        }}
      >
        <Box
          sx={{
            background: '#fff',
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: '600px'
          }}
        >
          <Typography variant="h5" gutterBottom sx={{fontWeight:'700',color:'#222222'}}>
            Reset Password
          </Typography>
          <TextField
            fullWidth
            label="New Password"
            type="password"
            margin="normal" />
          <TextField
            fullWidth
            label="Confirm New Password"
            type="password"
            margin="normal" />
          <Button fullWidth variant="contained"  sx={{ mt: 3, background: '#445B9C', height: '48px' }}>
            Submit New Password
          </Button>
        </Box>
      </Box>
   </>
  );
};

export default ResetPasswordPage;
