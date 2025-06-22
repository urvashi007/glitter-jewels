"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";


export interface DeliveryDetailsProps {
  name: string | React.ReactNode;
  address: string;
  mobile: string;
  HeadReq: string;
  checkboxLabel?: string;
  checked?: boolean;
  LinkReq?:string;
  onCheck?: (checked: boolean) => void;
}

export default function DeliveryDetailsCard({
  name,
  address,
  mobile,
  HeadReq,
  checkboxLabel,
  LinkReq,
  checked,
  onCheck,
}: DeliveryDetailsProps) {
  return (
    <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
      <CardContent sx={{ padding: 0 }}>
        {HeadReq && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              borderBottom: "1px solid #ebebeb",
              padding: "20px",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                 marginBottom:'0'
              }}
            >
              {HeadReq}
            </Typography>

            {LinkReq && (
            <Link href="#" fontSize={14} fontWeight={500} sx={{textTransform:'uppercase', color:'#445B9C', textDecoration:'none', fontFamily:'jost'}}>{LinkReq}</Link>)}


            {checkboxLabel && (
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={checked}
                    onChange={(e) => onCheck?.(e.target.checked)}
                    sx={{
                      color: "#A6A6A6",
                      borderRadius: "0",
                      "&.Mui-checked": {
                        color: "#445B9C",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    fontSize={16}
                    fontWeight={400}
                    fontFamily="Jost, sans-serif"
                    color="#1A1A1A"
                  >
                    {checkboxLabel}
                  </Typography>
                }
                sx={{ m: 0 }}
              />
            )}
          </Box>
        )}

        <Box sx={{ padding: "20px 20px 0 20px" }}>
          
          <Typography fontWeight="bold" sx={{ marginBottom: "8px" }}>
            {name}
          </Typography>
          <Typography
            sx={{ fontFamily: "Jost", color: "#404040", fontWeight: 400, marginBottom:'6px' }}
          >
            {address}
          </Typography>
          <Typography
            sx={{ fontFamily: "Jost", color: "#404040", fontWeight: 400 }}
          >
            Mobile Number: <Box component="span" sx={{ fontWeight: 500, }}>
    {mobile}
  </Box>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
