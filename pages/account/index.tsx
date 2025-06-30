"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/SideMenu/SidebarMenu";
import Wishlist from "@/components/Wishlist";
import MyOrders from "@/components/MyOrders";
import ManageAddresses from "@/components/ManageAddresses";
import ChangePasswordPage from "@/components/ChangePassword";
import ProfileForm from "@/components/Profile";
import { accountMenu } from "@/utils/accountMenu";
import { navItems } from "@/utils/navItems";

export default function AccountPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [tabReady, setTabReady] = useState(false);
  const tab = searchParams?.get("tab") || "orders";

  useEffect(() => {
    setTabReady(true);
    window.scrollTo(0, 0);
  }, [tab]);

  const tabTitles: Record<string, string> = {
    orders: "My Orders",
    profile: "Edit Profile",
    wishlist: "My Wishlist",
    addresses: "My Addresses",
    password: "Change Password",
  };

  const renderComponent = () => {
    switch (tab) {
      case "orders":
        return <MyOrders />;
      case "profile":
        return <ProfileForm />;
      case "wishlist":
        return <Wishlist />;
      case "addresses":
        return <ManageAddresses />;
      case "password":
        return <ChangePasswordPage />;
      default:
        return <MyOrders />;
    }
  };

  if (!tabReady) return null;

  return (
    <>
      <Header
        logoLight=""
        logoDark="/logo.svg"
        navItems={navItems}
        forceScrolled
      />

      <Box sx={(theme) => theme.mixins.sectionLayout}>
        <Container maxWidth="lg">
          <Typography
            variant="h6"
            mb={2}
          >
            {tabTitles[tab] || "My Orders"}
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{
              alignItems: "flex-start",
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <Grid
              sx={{
                width: { xs: "100%", md: "300px" },
      
              }}
            >
              <Sidebar
                selectedTab={tab}
                onSelectTab={(selected: string) =>
                  router.push(`/account?tab=${selected}`)
                }
                menuItems={accountMenu}
              />
            </Grid>

            <Grid  flex={1} key={tab}>
              {renderComponent()}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
