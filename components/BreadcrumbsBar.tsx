"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, Typography, Box } from "@mui/material";
import { ChevronRight } from "lucide-react";

export default function BreadcrumbsBar() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...segments.map((seg, index) => ({
      label: decodeURIComponent(seg).replace(/-/g, " "),
      href: "/" + segments.slice(0, index + 1).join("/"),
    })),
  ];

  return (
    <Box
    >
      <Breadcrumbs
        separator={<ChevronRight size={18} color="#666" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return isLast ? (
            <Typography
              key={item.href}
              sx={{
                fontWeight: 600,
                fontSize: "14px",
                color: "#222",
                fontFamily: "Jost",
              }}
            >
              {item.label.toUpperCase()}
            </Typography>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              style={{
                textDecoration: "none",
                fontWeight: 400,
                fontSize: "14px",
                color: "#5E5E5E",
                fontFamily: "Jost",
              }}
            >
              {item.label.toUpperCase()}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
