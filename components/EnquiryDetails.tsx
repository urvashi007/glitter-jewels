"use client";

import { Box, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { customVars } from "@/utils/theme";
import { JSX } from "react";


const enquiryInfo = {
  heading: "Enquiry Details",
  companyName: "AVD JEWELS",
  description:
    "We are so glad you visited us. If you have any questions or want to know more, we are happy to help. Drop us a message below, or WhatsApp us on +91 8355985601",
  details: [
    {
      type: "phone",
      title: "Contact Number",
      value: "(+91) 8355985601",
      icon: "PhoneIcon",
    },
    {
      type: "email",
      title: "Email Address",
      value: "mail@avdjewels.com",
      icon: "EmailIcon",
    },
    {
      type: "location",
      title: "Location",
      value:
        "Tirupati Shopping Center, S.V.Road,\nSantacruz west, Mumbai-400054.",
      icon: "LocationOnIcon",
    },
  ],
};


const iconMap: Record<string, JSX.Element> = {
  PhoneIcon: <PhoneIcon sx={{ color: "#fff" }} />,
  EmailIcon: <EmailIcon sx={{ color: "#fff" }} />,
  LocationOnIcon: <LocationOnIcon sx={{ color: "#fff" }} />,
};

export default function EnquiryDetails() {
  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight={600}
        mb={3}
        sx={{
          fontSize: customVars.fontSizes.font28,
          fontWeight: "700",
        }}
      >
        {enquiryInfo.heading}
      </Typography>

      <Box
        sx={{
          backgroundColor: customVars.background.bgf2f2f2,
        padding: '30px 30px 100px 30px',
        }}
      >
        <Typography fontWeight={600} mb={1}>
          {enquiryInfo.companyName}
        </Typography>

        <Typography fontSize={14} color="text.secondary" mb={3}>
          {enquiryInfo.description}
        </Typography>

        <Stack spacing={4}>
          {enquiryInfo.details.map((item, idx) => (
            <Stack
              key={idx}
              direction="row"
              spacing={2}
              alignItems={item.type === "location" ? "flex-start" : "center"}
            >
              <Box
                sx={{
                  background: '#6179BC',
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: item.type === "location" ? "4px" : 0,
                }}
              >
                {iconMap[item.icon]}
              </Box>
              <Box>
                <Typography  fontWeight={500} sx={{color:customVars.colors.color5e5e5e, marginBottom:'5px'}}>
                  {item.title}
                </Typography>
                <Typography whiteSpace="pre-line" fontWeight={500} fontSize={18} sx={{color:customVars.colors.color33333}}>{item.value}</Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
