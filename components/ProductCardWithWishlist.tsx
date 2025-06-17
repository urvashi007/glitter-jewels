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
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Plus } from "lucide-react";

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
          },
        }}
      >
      
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{borderBottom:'1px solid #ebebeb', padding:'20px 20px'}}> 
          <Typography variant="h6" fontWeight={600} sx={{    fontSize: "24px", fontWeight:'700'}}>
            Add to Wishlist
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Box sx={{padding:'20px'}}>

        {/* Create new */}
        <List sx={{p:'0', marginBottom:'20px',}}>
          <ListItem sx={{padding:'0'}}>
            <IconButton
              size="small"
              sx={{
                background: "#445B9C",
                color: "#fff",
                width: 60,
                height: 40,
                borderRadius: "0",
                "&:hover": { background: "#334a7d" },
              }}
            >
              <Plus size={20} />
            </IconButton>
            <ListItemText primary="Create new wishlist"  sx={{marginLeft:'16px'}}/>
          </ListItem>
        </List>

        {/* <Divider/> */}

        {/* Wishlist Options */}
        <List sx={{p:'0'}}>
          {wishlistOptions.map((item, idx) => (
            <ListItem key={idx} secondaryAction={ <Checkbox
              sx={{
                width: 30,
                height: 30,
                p: 0,
                "&.Mui-checked": {
                  color: "#445B9C",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: 25,
                },
              }}
            />} sx={{p:'0', marginBottom:'20px',fontFamily:'Jost'}}>
              <Box sx={{width: "60px",height:"40px",  background: "#F2F2F2",display:'flex', alignItems:'center', justifyContent:'center'}}>{item.icon}</Box>
              <ListItemText primary={item.label}  sx={{marginLeft: "16px",}}/>
            </ListItem>
          ))}
        </List>
        </Box>
        {/* Footer Buttons */}
        <Box mt="auto" display="flex" justifyContent="space-between" sx={{gap:'22px', padding:'20px'}}>
          <Box
            onClick={handleCancel}
            sx={{
              px: 3,
              py: 1,
              border: "1px solid #445B9C",
              color: "#445B9C",
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
              backgroundColor: "#445B9C",
              color: "white",
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
