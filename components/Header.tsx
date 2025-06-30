import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Stack,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useTheme, styled } from "@mui/material/styles";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import LoginPopup from "./LoginPopup";
import HorizontalStepper from "./Stepper";
import ProfileDropdown from "./ProfileDropdown";
import MobileDrawer from "./MobileDrawer";
import { customVars } from "@/utils/theme";


export type NavItem = {
  label: string;
  submenu?: {
    label: string;
    nestedSubmenu?: string[];
  }[];
};

export type HeaderProps = {
  logoLight: string;
  logoDark: string;
  navItems: NavItem[];
  searchEnabled?: boolean;
  forceScrolled?: boolean;
  stepperReq?: boolean;
};

const HeaderContainer = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<{ scrolled?: boolean }>(({ theme, scrolled }) => ({
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
  const [mounted, setMounted] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  const loginPopupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <HeaderContainer position="fixed" scrolled={scrolled} sx={{zIndex:4,padding:'10px 0' }} className={scrolled ? "Navscrolled" : ""}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", p: 0 }} disableGutters>
          {mounted &&
            (isMobile ? (
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
                      "&:hover .submenu": {
                        opacity: 1,
                        visibility: "visible",
                        transform: "translateY(0)",
                        pointerEvents: "auto",
                      },
                    }}
                  >
                    <Typography
                      sx={
                        theme.mixins?.headerNavItem
                          ? theme.mixins.headerNavItem(iconColor)
                          : { color: iconColor, cursor: "pointer" }
                      }
                    >
                      <a href={item.label}>{item.label}</a>
                    </Typography>
                    {item.submenu && item.submenu.length > 0 && (
                      <Box
                        className="submenu"
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          zIndex: 10,
                          minWidth: 250,
                          opacity: 0,
                          visibility: "hidden",
                          transform: "translateY(10px)",
                          transition: "opacity 0.3s ease, transform 0.3s ease",
                          pointerEvents: "none",
                          paddingTop: "25px",
                        }}
                      >
                        {item.submenu.map((subItem, i) => {
                          const hasNested =
                            subItem.nestedSubmenu &&
                            subItem.nestedSubmenu.length > 0;

                          return (
                            <Box
                              key={i}
                              sx={{
                                position: "relative",
                                backgroundColor: customVars.background.whitebg,
                               
                                "&:hover .nested-submenu": { display: "block" },
                              }}
                            >
                              {subItem?.label && (
                                <Box
                                  component={Link}
                                  href={`/${subItem.label.toLowerCase().replace(/\s+/g, "-")}`}
                                  passHref
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    px: 2,
                                    py: 1,
                                    textDecoration: "none",
                                  }}
                                >
                                  <Typography
                                    sx={theme.mixins?.submenuTypography}
                                  >
                                    {subItem.label}
                                  </Typography>
                                  {hasNested && (
                                    <ChevronRight
                                      size={16}
                                      style={{
                                        marginLeft: 6,
                                        color: customVars.colors.color33333,
                                      }}
                                    />
                                  )}
                                </Box>
                              )}
                              {hasNested && (
                                <Box
                                  className="nested-submenu"
                                  sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: "100%",
                                    display: "none",
                                    backgroundColor:
                                      customVars.background.whitebg,
                                    boxShadow: theme.shadows[4],
                                    minWidth: 250,
                                    zIndex: 20,
                                    
                                  }}
                                >
                                  {subItem.nestedSubmenu!.map((nested, j) => (
                                    <Link
                                      key={j}
                                      href={`/${nested.toLowerCase().replace(/\s+/g, "-")}`}
                                      passHref
                                      style={{ textDecoration: "none" }}
                                    >
                                      <Typography
                                        sx={{
                                          px: 2,
                                          py: 1,
                                          fontSize: 14,
                                          cursor: "pointer",
                                          color: customVars.colors.color33333,
                                          fontWeight:'500',
                                          "&:hover": {
                                            color: customVars.colors.accent,
                                          },
                                        }}
                                      >
                                        {nested}
                                      </Typography>
                                    </Link>
                                  ))}
                                </Box>
                              )}
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                ))}
              </Stack>
            ))}

          {/* Center: Logo */}
          <Link href="/" passHref>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={theme.mixins?.centerLogo}
            />
          </Link>

          {/* Right: Icons */}
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
                    fontSize: theme.typography.caption.fontSize,
                    color: iconColor,
                    opacity: searchOpen ? 1 : 0,
                    "::placeholder": { color: scrolled ? "#888" : "#ccc" },
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
      </Container>
      <MobileDrawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        navItems={navItems}
      />
      {stepperReq && (
        <Container maxWidth="lg">
          <HorizontalStepper activeStep={1} />
        </Container>
      )}
    </HeaderContainer>
  );
}
