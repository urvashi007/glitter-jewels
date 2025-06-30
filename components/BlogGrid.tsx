"use client";

import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Image from "next/image";

const blogData = [
  {
    id: 1,
    image: "/blogs/ring.jpg",
    date: "June 16, 2025",
    category: "Ring",
    title: "13 compelling reasons why AVD Jewels should be your top choice for purchasing diamond jewellery.",
  },
  {
    id: 2,
    image: "/blogs/mothers-day.jpg",
    date: "May 06, 2025",
    category: "Jewellery",
    title: "How To Choose Great Gifts For Mother’s Day",
  },
  {
    id: 3,
    image: "/blogs/clean-jewelry.jpg",
    date: "April 03, 2025",
    category: "Jewellery",
    title: "13 compelling reasons why AVD Jewels should be your top choice for purchasing diamond jewellery.",
  },
  {
    id: 4,
    image: "/blogs/ring.jpg",
    date: "June 16, 2025",
    category: "Jewellery",
    title: "13 compelling reasons why AVD Jewels should be your top choice for purchasing diamond jewellery.",
  },
  {
    id: 5,
    image: "/blogs/mothers-day.jpg",
    date: "May 06, 2025",
    category: "Jewellery",
    title: "How To Choose Great Gifts For Mother’s Day",
  },
  {
    id: 6,
    image: "/blogs/clean-jewelry.jpg",
    date: "April 03, 2025",
    category: "Jewellery",
    title: "13 compelling reasons why AVD Jewels should be your top choice for purchasing diamond jewellery.",
  },
];

export default function BlogGrid() {
  return (
    <Box >
      <Typography variant="h2" fontWeight={600} mb={4}>
        Our Blogs
      </Typography>

      <Box
        sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "3fr",
              sm: "repeat(3, 1fr)",
            },
            gap: "24px",
            textTransform: "uppercase",
            fontWeight: "400",
          }}
      >
        {blogData.map((blog) => (
          <Box
            key={blog.id}
            sx={{
              flex: "1 1 calc(33.333% - 24px)",
              maxWidth: "100%",
            }}
          >
            <Card elevation={0} sx={{ boxShadow: "none" }}>
              <CardMedia sx={{ height: 250, position: "relative" }}>

                           <Image src="/blogImg.png" alt="Delete Icon" fill
                  style={{ objectFit: "cover" }}/>
                
              </CardMedia>
              <CardContent sx={{ px: 0 }}>
                <Typography variant="caption" color="text.secondary" display="block" mb={1} sx={{color:'#5E5E5E', fontWeight:'500'}}>
                  {blog.date} &nbsp;&nbsp; | &nbsp;&nbsp; {blog.category}
                </Typography>
                <Typography variant="body1" fontWeight={500} sx={{fontSize:'18px', textTransform:'capitalize', fontWeight:'600'}}>
                  {blog.title}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
