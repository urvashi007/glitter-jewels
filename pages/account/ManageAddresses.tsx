"use client";

import React, { useState } from "react";
import { Box, Typography, Radio, Stack, Divider, Button } from "@mui/material";

import AddressDrawer from "@/components/AddressDrawer";
import { Address } from "@/utils/address";

const initialAddresses: Address[] = [
  {
    id: 1,
    label: "Default",
    name: "Ashish Sharma",
    address: "S-4A, kabir marg, bani park, Jaipur, Rajasthan 302016, India",
    phone: "+91-8201478885",
  },
];

export default function ManageAddresses() {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [selected, setSelected] = useState<number>(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editData, setEditData] = useState<Address | null>(null);

  const handleAddNew = () => {
    setEditData(null);
    setDrawerOpen(true);
  };

  const handleEdit = (address: Address) => {
    setEditData(address);
    setDrawerOpen(true);
  };

  const handleSave = (data: Address) => {
    if (data.id) {
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === data.id ? data : addr))
      );
    } else {
      const newId = Math.max(...addresses.map((a) => a.id || 0)) + 1;
      setAddresses((prev) => [...prev, { ...data, id: newId }]);
    }
  };

  return (
    <Box
      sx={{
        background: "#fff",

        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{
          fontSize: "18px",
          marginBottom: 0,
          padding: "12px 20px",
          borderBottom: "1px solid  #ebebeb",
          "@media (max-width:540px)": {
            display: "none",
          },
        }}
      >
        Manage Address
      </Typography>
      <Box sx={{ padding: "20px" }}>
        <Stack spacing={2}>
          {addresses.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                border: "1px solid #E0E0E0",
                px: 2,
                py: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Radio
                  checked={selected === item.id}
                  onChange={() => setSelected(item.id!)}
                  value={item.id}
                  sx={{
                    padding: 0,
                    width: "20px",
                    height: "20px",
                    marginTop: "3px",
                    "&.Mui-checked": {
                      color: "#6179BC",
                    },
                  }}
                />
                <Box sx={{ marginLeft: "8px" }}>
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 1,
                      py: 0.2,
                      background: "#E7EBF7",
                      fontSize: "14px",
                      color: "#445B9C",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    {item.label}
                  </Box>
                  <Typography fontWeight={700} fontSize={16}>
                    {item.name}
                  </Typography>
                  <Typography
                    fontSize={16}
                    sx={{
                      fontFamily: "Jost",
                      color: "#5E5E5E",
                      fontWeight: "400",
                    }}
                  >
                    {item.address}
                  </Typography>
                  <Typography fontSize={14} sx={{ mt: 0.5 }}>
                    {item.phone}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "#445B9C",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "Jost",
                  }}
                  onClick={() => handleEdit(item)}
                >
                  EDIT
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderRightWidth: "2px",
                    height: "16px",
                    background: "#445B9C",
                    marginTop: "4px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "#445B9C",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "Jost",
                  }}
                >
                  REMOVE
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Box textAlign="right" mt={3}>
          <Button
            variant="outlined"
            onClick={handleAddNew}
            sx={{
              borderColor: "#445B9C",
              color: "#445B9C",
              fontWeight: 500,
              padding:'12px 24px',
              fontSize:'16px',
              borderRadius:'0',
              fontFamily:'Jost',
            }}
          >
            ADD NEW ADDRESS
          </Button>
        </Box>

        <AddressDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onSave={handleSave}
          initialData={editData}
        />
      </Box>
    </Box>
  );
}
