"use client";

import { customVars } from "@/utils/theme";
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
  LinkReq?: string;
  onCheck?: (checked: boolean) => void;
}

export default function DeliveryDetailsCard({
  name,
  address,
  mobile,
  HeadReq,
  checkboxLabel,
  checked,
  LinkReq,
  onCheck,
}: DeliveryDetailsProps) {
  return (
    <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
      <CardContent sx={{ padding: 0 }}>
        {/* Header Section */}
        {HeadReq && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              borderBottom: `1px solid ${customVars.colors.colore2e2e2}`,
              padding: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: customVars.fontSizes.md,
                fontWeight: 700,
                mb: 0,
              }}
            >
              {HeadReq}
            </Typography>

            {LinkReq && (
              <Link
                href="#"
                fontSize={customVars.fontSizes.sm}
                fontWeight={500}
                sx={{
                  textTransform: "uppercase",
                  color: customVars.colors.accent,
                  textDecoration: "none",
                  fontFamily: customVars.fontFamily.secondary,
                  fontSize:customVars.fontSizes.sm,
                }}
              >
                {LinkReq}
              </Link>
            )}

            {checkboxLabel && (
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={checked}
                    onChange={(e) => onCheck?.(e.target.checked)}
                    sx={{
                      color: customVars.border.Bordera6a6a6,
                      borderRadius: 0,
                      "&.Mui-checked": {
                        color: customVars.colors.accent,
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    fontSize={customVars.fontSizes.base}
                    fontWeight={400}
                    fontFamily={customVars.fontFamily.secondary}
                    color={customVars.colors.dark}
                  >
                    {checkboxLabel}
                  </Typography>
                }
                sx={{ m: 0 }}
              />
            )}
          </Box>
        )}

        {/* Address Section */}
        <Box sx={{ padding: "20px 20px 0" }}>
          <Typography fontWeight="bold" sx={{ mb: "8px" }}>
            {name}
          </Typography>

          <Typography
            sx={{
              fontFamily: customVars.fontFamily.secondary,
              color: customVars.colors.color404040,
              fontWeight: 400,
              mb: "6px",
            }}
          >
            {address}
          </Typography>

          <Typography
            sx={{
              fontFamily: customVars.fontFamily.secondary,
              color: customVars.colors.color404040,
              fontWeight: 400,
            }}
          >
            Mobile Number:{" "}
            <Box component="span" sx={{ fontWeight: 500 }}>
              {mobile}
            </Box>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
