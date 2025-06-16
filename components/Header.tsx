/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Paper,
} from "@mui/material";
import {
  Search,
  Menu,
  Close,
  Logout,
  Person,
  Favorite,
  LocationOn,
  Lock,
  ShoppingBag,
} from "@mui/icons-material";
import Container from "@mui/material/Container";
import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
type HeaderNavItem = { label: string } | { label: string; submenu: string[] };

type HeaderProps = {
  logoLight: string;
  logoDark: string;
  navItems: HeaderNavItem[];
  searchEnabled?: boolean;
  forceScrolled?: boolean;
};

const HeaderContainer = styled(AppBar)<{ scrolled: boolean }>(
  ({ theme, scrolled }) => ({
    background: scrolled ? "#fff" : "transparent",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    transition: "all 0.3s ease",
    zIndex: 9999,
    boxShadow: scrolled ? theme.shadows[2] : "none",
    borderBottom: scrolled ? "none" : "1px solidrgba(0, 0, 0, 0.44)",
    animation: !scrolled ? "borderFadeIn 1s ease forwards" : "none",
    "@keyframes borderFadeIn": {
      "0%": { borderBottom: "1px solid transparent" },
      "100%": { borderBottom: "1px solid #ffffff70" },
    },
  })
);

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
  height: "100%",
  padding: 0,
  position: "relative",
  animation: `slideIn 0.4s ease`,
  "@keyframes slideIn": {
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
  },
}));

export default function Header({
  logoLight,
  logoDark,
  navItems,
  searchEnabled = true,
  forceScrolled = false,
}: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);
  const loginPopupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (forceScrolled) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }

      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }

      if (
        loginPopupRef.current &&
        !loginPopupRef.current.contains(event.target as Node)
      ) {
        setShowLoginPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);
  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const iconColor = scrolled ? "#222" : "#fff";
  const logo = scrolled ? logoDark : logoLight;

  return (
    <HeaderContainer
      position="fixed"
      scrolled={scrolled}
      sx={{
        zIndex: "3",
        padding: "0",
        boxShadow: '0px 4px 10px rgba(27, 36, 44, 0.08)',
        "@media (max-width:768px)": {
          padding: "0 16px",
        },
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ px: 0, position: "relative" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            position: "relative",
            padding: "0",
          }}
        >
          {isMobile ? (
            <IconButton edge="start" onClick={toggleDrawer(true)}>
              <Menu sx={{ color: iconColor }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
              {navItems.map((item, index) => {
                const hasSubmenu =
                  typeof item !== "string" && "submenu" in item;
                const label = typeof item === "string" ? item : item.label;
                const submenu = "submenu" in item ? item.submenu : [];
                return (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      ml: { xs: "0px", lg: "16px" },
                      "@media (max-width:1024px)": {
                        ml: "0px !important",
                      },
                      "&:hover .submenu": {
                        opacity: 1,
                        visibility: "visible",
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 500,
                        cursor: "pointer",
                        color: iconColor,
                        fontSize: "0.95rem",
                        fontFamily: "Jost, sans-serif",
                        textTransform: "uppercase",
                        px: 1.5,
                        py: 0.5,
                      }}
                    >
                      {label}
                    </Typography>

                    {hasSubmenu && (
                      <Box
                        className="submenu"
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          minWidth: 250,
                          opacity: 0,
                          visibility: "hidden",
                          transform: "translateY(10px)",
                          transition: "all 0.3s ease",
                          zIndex: 2000,
                          paddingTop: "17px",
                          color: "#222",
                        }}
                      >
                        {submenu.map((subItem: string, i: number) => (
                          <Typography
                            key={i}
                            sx={{
                              px: 2,
                              py: 1,
                              fontSize: "0.875rem",
                              fontWeight: 400,
                              color: "#222",
                              cursor: "pointer",
                              whiteSpace: "nowrap",
                              background: "#fff",
                              "&:first-of-type": { paddingTop: "20px" },
                              "&:last-of-type": { paddingBottom: "20px" },
                              "&:hover": {
                                backgroundColor: "#f5f5f5",
                              },
                            }}
                          >
                            {subItem}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Stack>
          )}

          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: 100,
              objectFit: "contain",
              transition: "0.3s ease",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "12px",
            }}
          />

          <Stack direction="row" spacing={2} alignItems="center">
            {!isMobile && searchEnabled && (
              <Box
                ref={searchBoxRef}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: searchOpen
                    ? `1px solid ${iconColor}`
                    : "1px solid transparent",
                  width: searchOpen ? "220px" : "50px",
                  height: "36px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  borderRadius: "4px",
                  backgroundColor: searchOpen
                    ? scrolled
                      ? "#fff"
                      : "rgba(255,255,255,0.1)"
                    : "transparent",
                }}
              >
                <InputBase
                  inputRef={inputRef}
                  placeholder="Search"
                  sx={{
                    ml: 1,
                    flex: 1,
                    color: iconColor,
                    fontSize: "0.9rem",
                    opacity: searchOpen ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    "::placeholder": {
                      color: scrolled ? "#888" : "#ccc",
                    },
                  }}
                />
                <IconButton
                  onClick={handleSearchToggle}
                  sx={{ p: 0.5, mt: "5px" }}
                >
                  <Search sx={{ color: iconColor }} />
                </IconButton>
              </Box>
            )}
            <IconButton>
              <Box
                component="img"
                src={scrolled ? "/cart.svg" : "/cart-white.svg"}
                alt="cart"
                sx={{ width: 22, height: 22 }}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                if (isLoggedIn) {
                  setProfileMenuOpen((prev) => !prev);
                } else {
                  setShowLoginPopup(true);
                }
              }}
            >
              <Box
                component="img"
                src={scrolled ? "/user.svg" : "/user-white.svg"}
                alt="user"
                sx={{ width: 22, height: 22 }}
              />
            </IconButton>
          </Stack>
        </Toolbar>

        {/* ✅ Profile Menu */}
        {profileMenuOpen && (
          <Paper
            ref={profileMenuRef}
            elevation={4}
            sx={{
              position: "absolute",
              right: 16,
              top: 70,
              width: 260,
              p: 2,
              borderRadius: 2,
              zIndex: 1100,
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Hello,
            </Typography>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Ashish Sharma
            </Typography>

            <Stack spacing={1}>
              <MenuItem
                icon={<ShoppingBag fontSize="small" />}
                label="My Orders"
              />
              <MenuItem
                icon={<Person fontSize="small" />}
                label="Edit Profile"
              />
              <MenuItem
                icon={<Favorite fontSize="small" />}
                label="My Favourites"
              />
              <MenuItem
                icon={<LocationOn fontSize="small" />}
                label="Manage Addresses"
              />
              <MenuItem
                icon={<Lock fontSize="small" />}
                label="Change Password"
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              mt={2}
              sx={{ color: "error.main", cursor: "pointer" }}
              onClick={() => {
                setIsLoggedIn(false);
                setProfileMenuOpen(false);
              }}
            >
              <Logout fontSize="small" />
              <Typography variant="body2" fontWeight={500}>
                Logout
              </Typography>
            </Stack>
          </Paper>
        )}
        {/* login popup */}
        {showLoginPopup && (
          <Paper
            ref={loginPopupRef}
            elevation={4}
            sx={{
              position: "absolute",
              right: 16,
              top: 64,
              width: 260,
              borderRadius:'0',
              p: 2,
              zIndex: 1100,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "#445B9C",
                color: "#fff",
                padding: "10px 0",
                textAlign: "center",
                fontWeight: 500,
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={() => {
                setIsLoggedIn(true);
                setShowLoginPopup(false);
              }}
            >
              LOGIN
            </Box>
            <Box
              sx={{
                border: "1px solid #445B9C",
                color: "#445B9C",
                padding: "10px 0",
                textAlign: "center",
                fontWeight: 500,
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              CREATE ACCOUNT
            </Box>
          </Paper>
        )}

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          transitionDuration={400}
        >
          <DrawerContent>
            <Box sx={{ display: "flex", padding: "15px 0 0 20px" }}>
              <Box
                component="img"
                src="./logo.svg"
                sx={{
                  height: "40px",
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{ position: "absolute", top: 8, right: 8 }}
              >
                <Close />
              </IconButton>
            </Box>

            <List sx={{ mt: 3 }}>
              {navItems.map((item, index) => {
                const hasSubmenu =
                  typeof item !== "string" && "submenu" in item;
                const label = typeof item === "string" ? item : item.label;
                const submenu = hasSubmenu ? (item as any).submenu : [];

                return hasSubmenu ? (
                  <Accordion key={index} sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls={`panel-${index}-content`}
                      id={`panel-${index}-header`}
                    >
                      <Typography>{label}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: "0" }}>
                      <List disablePadding>
                        {submenu.map((subItem: string, subIndex: number) => (
                          <ListItem button key={subIndex}>
                            <ListItemText primary={subItem} />
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <ListItem button key={index}>
                    <ListItemText primary={label} />
                  </ListItem>
                );
              })}
            </List>
          </DrawerContent>
        </Drawer>
      </Container>
    </HeaderContainer>
  );
}

const MenuItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <Stack
    direction="row"
    spacing={1}
    alignItems="center"
    sx={{ cursor: "pointer" }}
  >
    {icon}
    <Typography variant="body2">{label}</Typography>
  </Stack>
);
