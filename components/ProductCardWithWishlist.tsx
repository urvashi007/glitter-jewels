/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Divider,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function ProductCardWithWishlist() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleHeartClick = () => {
    setIsFavorite((prev) => !prev);
    setDrawerOpen(true);
  };

  const handleCancel = () => {
    setDrawerOpen(false);
    setIsFavorite(false);
  };

  const handleSave = () => {
    // You can trigger API/store here
    setDrawerOpen(false);
  };

  const wishlistOptions = [
    { label: "All Items wishlist", icon: <FavoriteIcon sx={{ color: "red" }} /> },
    { label: "Wedding Gift", icon: <img src="/diamond-round.png" alt="" width={30} /> },
    { label: "My collection 01", icon: <img src="/diamond-emerald.png" alt="" width={30} /> },
    { label: "Birthday Gift", icon: <img src="/diamond-pear.png" alt="" width={30} /> },
  ];

  return (
    <>
      {/* PRODUCT CARD */}
      <Box sx={{ position: "relative", mx: "auto" }}>
        <IconButton
          onClick={handleHeartClick}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            transition: "color 0.3s",
          }}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>

        <Typography variant="h6" fontWeight={600} sx={{fontSize:'18px'}}>
          BGL230
        </Typography>
        <Box sx={{ display: "flex", gap: 3,marginTop:'8px'}}>
          <Typography sx={{fontSize:'14px' }}>Gold WT : 0.051</Typography>
          <Typography sx={{fontSize:'14px' }}>Dia WT : 0.051</Typography>
        </Box>
        <Typography variant="h5" fontWeight={700} mt={2} mb={2}>
          ₹ 27,774
        </Typography>
      </Box>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: '550px',
            p: 3,
          },
        }}
      >
      
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight={600}>
            Add to Wishlist
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Create new */}
        <List>
          <ListItem>
            <AddIcon sx={{ mr: 2, color: "#3f51b5" }} />
            <ListItemText primary="Create new wishlist" />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Wishlist Options */}
        <List>
          {wishlistOptions.map((item, idx) => (
            <ListItem key={idx} secondaryAction={<Checkbox />}>
              <Box sx={{ mr: 2 }}>{item.icon}</Box>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>

        {/* Footer Buttons */}
        <Box mt="auto" display="flex" justifyContent="space-between" pt={2} sx={{gap:'22px'}}>
          <Box
            onClick={handleCancel}
            sx={{
              px: 3,
              py: 1,
              border: "1px solid #3f51b5",
              borderRadius: 1,
              color: "#3f51b5",
              fontWeight: 600,
              cursor: "pointer",
              width:'100%',
              textAlign:'center',
            }}
          >
            CANCEL
          </Box>
          <Box
            onClick={handleSave}
            sx={{
              px: 4,
              py: 1,
              backgroundColor: "#3f51b5",
              color: "white",
              borderRadius: 1,
              fontWeight: 600,
              cursor: "pointer",
               width:'100%',
               textAlign:'center',
            }}
          >
            SAVE
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
