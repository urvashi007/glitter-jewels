"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandMore, Close } from "@mui/icons-material";
import { customVars } from "@/utils/theme";

// Types
type NavItem = {
  label: string;
  submenu?: {
    label: string;
    nestedSubmenu?: string[];
  }[];
};

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export default function MobileDrawer({ open, onClose, navItems }: MobileDrawerProps) {
  const theme = useTheme();

  return (
    <Drawer anchor="left" open={open} onClose={onClose} transitionDuration={400}>
      <Box
        sx={{
          width: 250,
          height: "100%",
          background: customVars.background.whitebg,
        }}
      >
        <Box sx={{ display: "flex", p: "15px 0 0 20px" }}>
          <Box component="img" src="/logo.svg" sx={{ height: 40 }} />
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <Close />
          </IconButton>
        </Box>

        <List sx={{ mt: 3 }}>
          {navItems.map((item, idx) =>
            item.submenu && item.submenu.length > 0 ? (
              <Accordion
                key={idx}
                sx={{
                  boxShadow: "none",
                  border: "none",
                  marginBottom: "0",
                  padding: "0 16px",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                  borderRadius: 0,
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>{item.label}</Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ pl: 0, pr: 0, py: 0 }}>
                  {item.submenu.map((sub, j) =>
                    sub.nestedSubmenu && sub.nestedSubmenu.length > 0 ? (
                      <Accordion
                        key={j}
                        disableGutters
                        sx={{
                          boxShadow: "none",
                          background: "transparent",
                          padding: "0",
                          "&::before": { display: "none" },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          sx={{ pl: 0, pr: 0, py: 0, minHeight: "auto" }}
                        >
                          <Typography fontSize={15}>{sub.label}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pl: 2 }}>
                          {sub.nestedSubmenu.map((nested, k) => (
                            <Typography key={k} fontSize={14} sx={{ py: 0.5 }}>
                              {nested}
                            </Typography>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    ) : (
                      <ListItem key={j}>
                        <ListItemText primary={sub.label} />
                      </ListItem>
                    )
                  )}
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem key={idx} sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
                <ListItemText primary={item.label} />
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
}
