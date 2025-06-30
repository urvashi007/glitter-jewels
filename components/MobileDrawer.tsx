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
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", p: "15px 0 0 20px" }}>
          <Box component="img" src="/logo.svg" sx={{ height: 40 }} />
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <Close />
          </IconButton>
        </Box>

        <List sx={{ mt: 2, p: 0 }}>
          {navItems.map((item, idx) =>
            item.submenu && item.submenu.length > 0 ? (
              <Accordion
                key={idx}
                disableGutters
                sx={{
                  boxShadow: "none",
                  border: "none",
                  borderRadius: 0,
                  padding:"0 20px",
                  "&::before": { display: "none" },
                  margin:'0'
                }}
              >

                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                   
                    minHeight: "auto",
                    // "& .MuiAccordionSummary-content": { margin: 0 },
                  }}
                >
                  <Typography fontSize={15} fontWeight={500}>
                    {item.label}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ p: 0 }}>
                  {item.submenu.map((sub, j) =>
                    sub.nestedSubmenu && sub.nestedSubmenu.length > 0 ? (
                      <Accordion
                        key={j}
                        disableGutters
                        sx={{
                          boxShadow: "none",
                          background: "transparent",
                          border: "none",
                          m: 0,
                          "&::before": { display: "none" },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          sx={{
                          padding:'10 0px',
                            minHeight: "auto",
                            "& .MuiAccordionSummary-content": { margin: 0 },
                          }}
                        >
                          <Typography fontSize={14}>
                            {sub.label}
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ pl: 4, pr: 2, py: 0 }}>
                          {sub.nestedSubmenu.map((nested, k) => (
                            <Typography
                              key={k}
                              fontSize={13}
                              sx={{
                                py: 0.8,
                                color: theme.palette.text.secondary,
                              }}
                            >
                              {nested}
                            </Typography>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    ) : (

                      <ListItem
                        key={j}
                        disableGutters
                        sx={{ pl: 3, pr: 2, py: 1 }}
                      >
                        <ListItemText
                          primary={sub.label}
                          primaryTypographyProps={{ fontSize: 14 }}
                        />
                      </ListItem>
                    )
                  )}
                </AccordionDetails>
              </Accordion>
            ) : (

              <ListItem
                key={idx}
                disableGutters
                sx={{
                  px: 3,
                  py: 1.6,
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 15, fontWeight: 500 }}
                />
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
}
