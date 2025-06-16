"use client";

import { Card, CardContent, Typography } from "@mui/material";

export interface DeliveryDetailsProps {
  name: string;
  address: string;
  mobile: string;
}

export default function DeliveryDetailsCard({ name, address, mobile }: DeliveryDetailsProps) {
  return (
    <Card sx={{ boxShadow: "none", borderRadius: "0",}}>
      <CardContent sx={{padding:'0'}}>
        <Typography variant="h6" gutterBottom style={{fontSize:"18px", fontWeight:'700', borderBottom:'1px solid #ebebeb', padding:'20px 14px'}}>
          Delivery Details
        </Typography>
        <Typography sx={{padding:'12px 20px 0 20px'}}>
        <Typography fontWeight="bold" sx={{marginBottom:'8px'}}>{name}</Typography>
        <Typography sx={{fontFamily:'Jost', color:'#404040', fontWeight:'400'}}>{address}</Typography>
        <Typography sx={{fontFamily:'Jost', color:'#404040', fontWeight:'400'}}>Mobile Number: {mobile}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
