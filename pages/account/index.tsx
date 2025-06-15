"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";

import Profile from "./Profile";
import Wishlist from "./Wishlist";
import Addresses from "./Addresses";
import ChangePassword from "./ChangePassword";
import MyOrders from "./MyOrders";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/SidebarMenu";

export default function AccountPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "orders";

  // Optional: Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  const renderComponent = () => {
    switch (tab) {
      case "orders":
        return <MyOrders />;
      case "profile":
        return <Profile />;
      case "wishlist":
        return <Wishlist />;
      case "addresses":
        return <Addresses />;
      case "password":
        return <ChangePassword />;
      default:
        return <MyOrders />;
    }
  };

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
      <Box sx={{ background: "#E5E9F5", padding: "100px 0 80px 0", }}>
        <Container maxWidth="lg">
        <Typography
        variant="h2" sx={{fontSize:'30px', fontWeight:'700', marginBottom:'24px'}}
      >
        My Orders
      </Typography>
          <Grid
            spacing={4}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              "@media (max-width:991px)": {
                display: "block",
              },
             
            }}
          >
            <Grid
              sx={{
                width: "280px",
                marginRight:'40px',
                "@media (max-width:991px)": {
                  width:'100%',
                },
                "@media (max-width:540px)": {
                  display: "none",
                },
              }}
            >
              <Sidebar
                selectedTab={tab}
                onSelectTab={(tab: string) =>
                  router.push(`/account?tab=${tab}`)
                }
              />
            </Grid>
            <Grid flex={1} key={tab}>
              {renderComponent()}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
