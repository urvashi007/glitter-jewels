// "use client";

// import { Box, Container, Typography } from "@mui/material"; // ✅ Correct import

// import SidebarMenu from "@/components/SidebarMenu";
// import OrderListSlide from "@/components/OrderListSlide";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const MyAccountPage = () => {
//   return (
//     <>
//       <Header
//         logoLight=""
//         logoDark="/logo.svg"
//         navItems={[
//           { label: "Our Expertise" },
//           {
//             label: "Product",
//             submenu: [
//               "Bracelets",
//               "Earrings",
//               "Necklace",
//               "Pendant",
//               "Rings",
//               "View All",
//             ],
//           },
//           { label: "Enquiry" },
//         ]}
//         forceScrolled={true}
//       />
//       <Box display="flex" bgcolor="#F5F7FE" sx={{ alignItems: "flex-start", padding:'100px 0 80px 0', }}>
//         <Container maxWidth="lg" sx={{ display: "flex",}}>
//           <Box sx={{marginRight:'40px'}}>
//           <Typography
//             variant="h4"
//             sx={{fontSize:'30px', fontWeight:'700', marginBottom:'24px'}}
          
//           >
//            My Account
//           </Typography>
//           <SidebarMenu activeTab="orders" />
//           </Box>
      
//           <OrderListSlide />
      
//         </Container>
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default MyAccountPage;
