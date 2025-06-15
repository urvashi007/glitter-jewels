"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Container, Grid } from "@mui/material";
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

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid
            sx={{
              width: "280px",
              height: "100vh",
              padding: "100px 0 80px 0",
            }}
          >
            <Sidebar
              selectedTab={tab}
              onSelectTab={(tab: string) => router.push(`/account?tab=${tab}`)}
              
            />
          </Grid>

          {/* ✅ Key added to force re-render when tab changes */}
          <Grid flex={1} key={tab}>
            {renderComponent()}
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
