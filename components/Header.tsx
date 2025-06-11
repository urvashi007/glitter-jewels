'use client';

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
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
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
} from '@mui/icons-material';
import Container from '@mui/material/Container';
import { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';

type HeaderProps = {
  logoLight: string;
  logoDark: string;
  navItems: string[];
  searchEnabled?: boolean;
  forceScrolled?: boolean; // 👈 Added prop
};

const HeaderContainer = styled(AppBar)<{ scrolled: boolean }>(({ theme, scrolled }) => ({
  background: scrolled ? '#fff' : 'transparent',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  transition: 'all 0.3s ease',
  zIndex: 9999,
  boxShadow: scrolled ? theme.shadows[2] : 'none',
  borderBottom: scrolled ? 'none' : '1px solid #ffffff70',
  animation: !scrolled ? 'borderFadeIn 1s ease forwards' : 'none',
  '@keyframes borderFadeIn': {
    '0%': {
      borderBottom: '1px solid transparent',
    },
    '100%': {
      borderBottom: '1px solid #ffffff70',
    },
  },
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
  height: '100%',
  padding: theme.spacing(2),
  position: 'relative',
  animation: `slideIn 0.4s ease`,
  '@keyframes slideIn': {
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
  },
}));

export default function Header({
  logoLight,
  logoDark,
  navItems,
  searchEnabled = true,
  forceScrolled = false, // 👈 default false
}: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceScrolled); 
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (forceScrolled) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const iconColor = scrolled ? '#222' : '#fff';
  const logo = scrolled ? logoDark : logoLight;

  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <HeaderContainer position="fixed" scrolled={scrolled}>
      <Container maxWidth="lg">
      <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
        {isMobile ? (
          <IconButton edge="start" onClick={toggleDrawer(true)}>
            <Menu sx={{ color: iconColor }} />
          </IconButton>
        ) : (
          <Stack direction="row" spacing={4}>
            {navItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  fontWeight: 500,
                  cursor: 'pointer',
                  color: iconColor,
                  fontSize: '0.95rem',
                  fontFamily: 'Jost, sans-serif',
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        )}

        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: 100,
            objectFit: 'contain',
            transition: '0.3s ease',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '12px',
          }}
        />

        <Stack direction="row" spacing={2} alignItems="center">
          {!isMobile && searchEnabled && (
            <Box
              ref={searchBoxRef}
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: searchOpen
                  ? `1px solid ${iconColor}`
                  : '1px solid transparent',
                width: searchOpen ? '220px' : '50px',
                height: '36px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                borderRadius: '4px',
                backgroundColor: searchOpen
                  ? scrolled
                    ? '#fff'
                    : 'rgba(255,255,255,0.1)'
                  : 'transparent',
              }}
            >
              <InputBase
                inputRef={inputRef}
                placeholder="Search"
                sx={{
                  ml: 1,
                  flex: 1,
                  color: iconColor,
                  fontSize: '0.9rem',
                  opacity: searchOpen ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  '::placeholder': {
                    color: scrolled ? '#888' : '#ccc',
                  },
                }}
              />
              <IconButton onClick={handleSearchToggle} sx={{ p: 0.5, mt: '5px' }}>
                <Search sx={{ color: iconColor }} />
              </IconButton>
            </Box>
          )}
          <IconButton>
            <Box
              component="img"
              src={scrolled ? '/cart.svg' : '/cart-white.svg'}
              alt="cart"
              sx={{ width: 22, height: 22 }}
            />
          </IconButton>
          <IconButton onClick={() => setProfileMenuOpen((prev) => !prev)}>
            <Box
              component="img"
              src={scrolled ? '/user.svg' : '/user-white.svg'}
              alt="user"
              sx={{ width: 22, height: 22 }}
            />
          </IconButton>
        </Stack>
      </Toolbar>

      {profileMenuOpen && (
        <Paper
          ref={profileMenuRef}
          elevation={4}
          sx={{
            position: 'absolute',
            right: 16,
            top: 70,
            width: 260,
            p: 2,
            borderRadius: 2,
            zIndex: 10000,
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">Hello,</Typography>
          <Typography variant="h6" fontWeight={600} mb={2}>Ashish Sharma</Typography>

          <Stack spacing={1}>
            <MenuItem icon={<ShoppingBag fontSize="small" />} label="My Orders" />
            <MenuItem icon={<Person fontSize="small" />} label="Edit Profile" />
            <MenuItem icon={<Favorite fontSize="small" />} label="My Favourites" />
            <MenuItem icon={<LocationOn fontSize="small" />} label="Manage Addresses" />
            <MenuItem icon={<Lock fontSize="small" />} label="Change Password" />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            mt={2}
            sx={{ color: 'error.main', cursor: 'pointer' }}
          >
            <Logout fontSize="small" />
            <Typography variant="body2" fontWeight={500}>Logout</Typography>
          </Stack>
        </Paper>
      )}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={400}
      >
        <DrawerContent>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <Close />
          </IconButton>
          <List sx={{ mt: 5 }}>
            {navItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </DrawerContent>
      </Drawer>
      </Container>
    </HeaderContainer>
  );
}

const MenuItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
    {icon}
    <Typography variant="body2">{label}</Typography>
  </Stack>
);
