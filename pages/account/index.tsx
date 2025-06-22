"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Wishlist from "../../components/Wishlist";
import MyOrders from "../../components/MyOrders";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/SidebarMenu";
import ManageAddresses from "../../components/ManageAddresses";
import ChangePasswordPage from "../../components/ChangePassword";
import ProfileForm from "@/components/Profile";
import { accountMenu } from "@/utils/accountMenu";

export default function AccountPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [tabReady, setTabReady] = useState(false);
  const tab = searchParams?.get("tab") || "orders";

  useEffect(() => {
    // Wait until searchParams is hydrated
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

      <Box sx={{ background: "#E5E9F5", padding: "100px 0 80px 0" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "24px",
              fontFamily: "Manrope",
            }}
          >
            {tabTitles[tab] || "My Orders"}
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
                marginRight: "40px",
                "@media (max-width:991px)": {
                  width: "100%",
                },
              }}
            >
              <Sidebar
                selectedTab={tab}
                onSelectTab={(tab: string) =>
                  router.push(`/account?tab=${tab}`)
                }
                menuItems={accountMenu}
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
