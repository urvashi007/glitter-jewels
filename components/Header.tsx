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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme, styled } from "@mui/material/styles";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import LoginPopup from "./LoginPopup";

// Type definition
type HeaderNavItem = { label: string } | { label: string; submenu: string[] };

type HeaderProps = {
  logoLight: string;
  logoDark: string;
  navItems: HeaderNavItem[];
  searchEnabled?: boolean;
  forceScrolled?: boolean;
};

// ✅ Type guard
function hasSubmenu(
  item: HeaderNavItem
): item is { label: string; submenu: string[] } {
  return typeof item === "object" && item !== null && "submenu" in item;
}

const HeaderContainer = styled(AppBar)<{ scrolled: boolean }>(
  ({ theme, scrolled }) => ({
    background: scrolled ? "#fff" : "transparent",
    padding: theme.spacing(1, 2),
    transition: "all 0.2s ease",
    zIndex: 9999,
    boxShadow: scrolled ? theme.shadows[2] : "none",
    borderBottom: scrolled ? "none" : "1px solid rgba(0, 0, 0, 0.44)",
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
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  const loginPopupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (forceScrolled) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (searchBoxRef.current && !searchBoxRef.current.contains(target))
        setSearchOpen(false);

      if (loginPopupRef.current && !loginPopupRef.current.contains(target))
        setShowLoginPopup(false);
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
        boxShadow: "0px 4px 10px rgba(27, 36, 44, 0.08)",
        "@media (max-width:768px)": {
          padding: "0 16px",
        },
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          "@media (max-width:540px)": {
            padding: "0",
          },
        }}
      > <Toolbar sx={{ justifyContent: "space-between", p: 0 }}>
          {/* LEFT: Desktop Nav or Mobile Menu */}
          {isMobile ? (
            <IconButton edge="start" onClick={toggleDrawer(true)}>
              <Menu sx={{ color: iconColor }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
              {navItems.map((item, index) => {
                const label = item.label;
                if (hasSubmenu(item)) {
                  const submenu = item.submenu;
                  return (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
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
                          pt: "17px",
                          color: "#222",
                        }}
                      >
                        {submenu.map((subItem, i) => (
                          <Link
                            key={i}
                            href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                            passHref
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                            }}
                          >
                            <Typography
                              sx={{
                                display: "block",
                                px: 2,
                                py: 1,
                                fontSize: "0.875rem",
                                color: "#222",
                                backgroundColor: "#fff",
                                "&:hover": {
                                  backgroundColor: "#fff",
                                  color: "#445B9C",
                                },
                              }}
                            >
                              {subItem}
                            </Typography>
                          </Link>
                        ))}
                      </Box>
                    </Box>
                  );
                }

                return (
                  <Box key={index}>
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
                  </Box>
                );
              })}
            </Stack>
          )}

          {/* CENTER: Logo */}
          <Link href="/" passHref>
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
          </Link>

          {/* RIGHT: Icons */}
          <Stack direction="row" spacing={{ xs: 0, md: 2 }} alignItems="center">
            <Link href="/custom-order" passHref legacyBehavior>
            <IconButton
                sx={{
                  ml: {
                    xs: 0,
                    md: "auto",
                  },
                }}
              >
                <Box
                  component="img"
                  src={scrolled ? "/plus-black.svg" : "/plus-white.svg"}
                  alt="add"
                  sx={{ width: 22, height: 22 }}
                />
              </IconButton>
            </Link>

            {!isMobile && searchEnabled && (
              <Box
                ref={searchBoxRef}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: `1px solid ${searchOpen ? iconColor : "transparent"}`,
                  width: searchOpen ? "220px" : "50px",
                  height: "36px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  marginLeft: "0!important",
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
                <IconButton onClick={handleSearchToggle} sx={{ p: 0.5 }}>
                  <Box
                    component="img"
                    src={scrolled ? "/search-black.svg" : "/search.svg"}
                    alt="Search"
                  />
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

            {/* USER ICON + LOGIN POPUP */}
            <Box sx={{ position: "relative" }}>
              <IconButton
                onClick={() =>
                  isLoggedIn
                    ? console.log("User menu removed")
                    : setShowLoginPopup(true)
                }
              >
                <Box
                  component="img"
                  src={scrolled ? "/user.svg" : "/user-white.svg"}
                  alt="user"
                  sx={{ width: 22, height: 22 }}
                />
              </IconButton>

              {showLoginPopup && (
                <Box
                  ref={loginPopupRef}
                  sx={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    right: 0,
                    zIndex: 3000,
                  }}
                >
                  <LoginPopup
                    onLoginClick={() => {
                      setIsLoggedIn(true);
                      setShowLoginPopup(false);
                    }}
                    onCreateAccountClick={() => {}}
                  />
                </Box>
              )}
            </Box>
          </Stack>
        </Toolbar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          transitionDuration={400}
        >
          <DrawerContent>
            <Box sx={{ display: "flex", p: "15px 0 0 20px" }}>
              <Box component="img" src="./logo.svg" sx={{ height: 40 }} />
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{ position: "absolute", top: 8, right: 8 }}
              >
                <Close />
              </IconButton>
            </Box>

            <List sx={{ mt: 3 }}>
              {navItems.map((item, index) => {
                const label = item.label;
                if (hasSubmenu(item)) {
                  return (
                    <Accordion key={index} sx={{ boxShadow: "none" }}>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>{label}</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 0 }}>
                        <List disablePadding>
                          {item.submenu.map((subItem, subIndex) => (
                            <ListItem key={subIndex}>
                              <ListItemText primary={subItem} />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  );
                }

                return (
                  <ListItem key={index}>
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
