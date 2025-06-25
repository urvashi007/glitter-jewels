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
import HorizontalStepper from "./Stepper";
import ProfileDropdown from "./ProfileDropdown";
import { customVars } from "@/utils/theme";

type NavItem = {
  label: string;
  submenu?: string[];
};

type HeaderProps = {
  logoLight: string;
  logoDark: string;
  navItems: NavItem[];
  searchEnabled?: boolean;
  forceScrolled?: boolean;
  stepperReq?: boolean;
};

// Type guard
const hasSubmenu = (item: NavItem): item is NavItem & { submenu: string[] } =>
  Array.isArray(item.submenu);

const HeaderContainer = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<{
  scrolled?: boolean;
}>(({ theme, scrolled }) => ({
  background: scrolled ? theme.palette.background.default : "transparent",
  padding: theme.spacing(1, 2),
  transition: "all 0.2s ease",
  zIndex: 9999,
  boxShadow: scrolled ? theme.shadows[2] : "none",
  borderBottom: scrolled ? "none" : `1px solid rgba(0, 0, 0, 0.44)`,
  animation: !scrolled ? "borderFadeIn 1s ease forwards" : "none",
  "@keyframes borderFadeIn": {
    "0%": { borderBottom: "1px solid transparent" },
    "100%": { borderBottom: "1px solid #ffffff70" },
  },
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
  height: "100%",
  padding: 0,
  ...(theme.mixins?.slideIn || {}),
  background:customVars.background.whitebg,
}));

export default function Header({
  logoLight,
  logoDark,
  navItems,
  searchEnabled = true,
  forceScrolled = false,
  stepperReq = false,
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
    if (forceScrolled) return setScrolled(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceScrolled]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
      if (
        loginPopupRef.current &&
        !loginPopupRef.current.contains(e.target as Node)
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

  const iconColor = scrolled
    ? theme.palette.text.primary
    : theme.palette.common.white;
  const logo = scrolled ? logoDark : logoLight;

  return (
    <HeaderContainer position="fixed" scrolled={scrolled} sx={{zIndex:3}}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ justifyContent: "space-between", p: 0 }}>
          {isMobile ? (
            <IconButton edge="start" onClick={toggleDrawer(true)}>
              <Menu sx={{ color: iconColor }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
              {navItems.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    position: "relative",
                    "&:hover .submenu":
                      theme.mixins?.submenuHover || { display: "block" },
                  }}
                >
                  <Typography
                    sx={
                      theme.mixins?.headerNavItem
                        ? theme.mixins.headerNavItem(iconColor)
                        : { color: iconColor }
                    }
                  >
                    {item.label}
                  </Typography>
                  {hasSubmenu(item) && (
                    <Box
                      className="submenu"
                      sx={theme.mixins?.submenuItem || {}}
                    >
                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          href={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                          style={{ textDecoration: "none" }}
                          passHref
                        >
                          <Typography sx={theme.mixins?.submenuTypography}>
                            {sub}
                          </Typography>
                        </Link>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Stack>
          )}

          <Link href="/" passHref>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={theme.mixins?.centerLogo}
            />
          </Link>

          <Stack direction="row" spacing={{ xs: 0, md: 2 }} alignItems="center">
            <Link href="/custom-order" passHref legacyBehavior>
              <IconButton>
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
                  width: searchOpen ? 220 : 50,
                  height: 36,
                  transition: "all 0.3s ease",
                  backgroundColor: searchOpen
                    ? scrolled
                      ? theme.palette.common.white
                      : "rgba(255, 255, 255, 0.1)"
                    : "transparent",
                  marginLeft: "0!important",
                }}
              >
                <InputBase
                  inputRef={inputRef}
                  placeholder="Search"
                  sx={{
                    ml: 1,
                    flex: 1,
                    color: iconColor,
                    fontSize: theme.typography.caption.fontSize,
                    opacity: searchOpen ? 1 : 0,
                    "::placeholder": {
                      color: scrolled ? "#888" : "#ccc",
                    },
                  }}
                />
                <IconButton onClick={handleSearchToggle} sx={{ p: 0.5 }}>
                  <Box
                    component="img"
                    src={scrolled ? "/search-black.svg" : "/search.svg"}
                    alt="search"
                    sx={{ width: 20, height: 20 }}
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

            <Box sx={{ position: "relative" }}>
              {isLoggedIn ? (
                <ProfileDropdown onLogout={() => setIsLoggedIn(false)} />
              ) : (
                <>
                  <IconButton onClick={() => setShowLoginPopup(true)}>
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
                </>
              )}
            </Box>
          </Stack>
        </Toolbar>
        
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          transitionDuration={400}
         
        >
          <DrawerContent >
            <Box sx={{ display: "flex", p: "15px 0 0 20px" }}>
              <Box component="img" src="./logo.svg" sx={{ height: 40 }} />
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{ position: "absolute", top: 8, right: 8 }}
              >
                <Close />
              </IconButton>
            </Box>
            <List sx={{ mt: 3,}}>
              {navItems.map((item, idx) =>
                hasSubmenu(item) ? (
                  <Accordion key={idx} sx={{ boxShadow: "none", border:'none',marginBottom:'0', padding:'0 16px', borderBottom:'1px solid rgba(0, 0, 0, 0.12)', borderRadius:0,  }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>{item.label}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{borderRadius:0,}}>
                      <List disablePadding>
                        {item.submenu.map((sub, j) => (
                          <ListItem key={j} sx={{ borderBottom: "none", p: "6px 16px", }}>
                            <ListItemText primary={sub}/>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <ListItem
                    key={idx}
                    sx={{
                      borderBottom: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItem>
                )
              )}
            </List>
          </DrawerContent>
        </Drawer>
      </Container>

      {stepperReq && (
        <Container maxWidth="lg">
          <HorizontalStepper activeStep={1} />
        </Container>
      )}
    </HeaderContainer>
  );
}
