"use client";

import {
  Box,
  Typography,
  Stack,
  Divider,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export interface PriceDetailsProps {
  itemsTotal: string;
  discount: string;
  subtotal: string;
  delivery: string;
  deliveryFree: boolean;
  totalItems: number;
  totalAmount: string;
  paymentMethod: string;
}

export default function PriceDetailsCard({
  itemsTotal,
  discount,
  subtotal,
  delivery,
  deliveryFree,
  totalItems,
  totalAmount,
  paymentMethod,
}: PriceDetailsProps) {
  return (
    <Box>
      <Card sx={{ boxShadow: "none", borderRadius: "0" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{fontSize:'18px', fontWeight:'700', marginBottom:'16px'}}>
            Price Details
          </Typography>
        

<Stack direction="row" justifyContent="space-between">
  <Typography fontSize={16} sx={{ fontFamily: 'Jost', fontWeight:'400', marginBottom:'16px' }}>Item(s) total</Typography>
  <Typography fontSize={16} sx={{ fontFamily: 'Jost', fontWeight:'500' }} >{itemsTotal}</Typography>
</Stack>

<Stack direction="row" justifyContent="space-between">
  <Typography fontSize={16} sx={{ fontFamily: 'Jost', fontWeight:'400', marginBottom:'16px' }}>Discount</Typography>
  <Typography fontSize={16} sx={{ fontFamily: 'Jost',fontWeight:'500' }} color={deliveryFree ? "success.main" : "text.primary"}>{discount}</Typography>
</Stack>

<Divider sx={{marginBottom:'16px'}} />

<Stack direction="row" justifyContent="space-between">
  <Typography fontSize={16} sx={{ fontFamily: 'Jost', fontWeight:'400', marginBottom:'16px' }}>Subtotal</Typography>
  <Typography fontSize={16} sx={{ fontFamily: 'Jost', fontWeight:'500' }}>{subtotal}</Typography>
</Stack>

<Stack direction="row" justifyContent="space-between">
  <Typography fontSize={16} sx={{ fontFamily: 'Jost', fontWeight:'400'}}>Delivery</Typography>
  <Typography
    fontSize={14}
    sx={{ fontFamily: 'Jost' }}
    color={deliveryFree ? "success.main" : "text.primary"}
  >
    {delivery}
  </Typography>
</Stack>


          <Divider sx={{ my: 2 }} />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight="700">
              Total ({totalItems} items)
            </Typography>
            <Typography variant="subtitle1" fontWeight="700">
              {totalAmount}
            </Typography>
          </Stack>

          <Box sx={{ display: "flex", alignItems: "center", mt: 2 , background:'#F7F7F7', padding:'12px'}}>
            <CreditCardIcon color="error" sx={{ mr: 1 }} />
            <Typography>Paid by {paymentMethod}</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          sx={{ borderColor: "#3f51b5", color: "#3f51b5", borderRadius:'0', height:'48px' }}
        >
          BACK TO MY ACCOUNT
        </Button>
      </Box>
        </CardContent>
      </Card>

      
    </Box>
  );
}
