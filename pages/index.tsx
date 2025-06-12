import HeroBanner from "@/components/Banner";
import LatestCollection from "@/components/CardCollection";
import CategoriesSection from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCardBanner from "@/components/InfoCardBanner";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

export default function HomePage() {
  const productsItem = [
    {
      id: "Ring-001",
      price: "₹25,000",
      gold: "2.5g",
      diamond: "0.25ct",
      image: "./Categories/img1.png",
    },
    {
      id: "Ring-002",
      price: "₹32,500",
      gold: "3g",
      diamond: "0.35ct",
      image: "./Categories/img2.png",
    },
    {
      id: "Pendant-003",
      price: "₹18,000",
      gold: "2g",
      diamond: "0.15ct",
      image: "./Categories/img3.png",
    },
    {
      id: "Bracelet-004",
      price: "₹45,000",
      gold: "5g",
      diamond: "0.5ct",
      image: "./Categories/img1.png",
    },
  ];
  const productsItem2 = [
    {
      id: "Ring-001",
      price: "₹25,000",
      gold: "2.5g",
      diamond: "0.25ct",
      image: "./Categories/img1.png",
    },
    {
      id: "Ring-002",
      price: "₹32,500",
      gold: "3g",
      diamond: "0.35ct",
      image: "./Categories/img2.png",
    },
    {
      id: "Pendant-003",
      price: "₹18,000",
      gold: "2g",
      diamond: "0.15ct",
      image: "./Categories/img3.png",
    },
    {
      id: "Bracelet-004",
      price: "₹45,000",
      gold: "5g",
      diamond: "0.5ct",
      image: "./Categories/img1.png",
    },
  ];
  return (
    <>
      {/* <Header
  logo="/logo-black.svg"
  navItems={['HOME', 'COLLECTIONS', 'PRODUCTS']}
  searchEnabled
  variant="white"
/> */}
      <Header
        logoLight="/white-logo.svg"
        logoDark="/logo.svg"
        navItems={["HOME", "PRODUCTS", "COLLECTIONS", "DIAMONDS"]}
        searchEnabled
      />
      <HeroBanner
        backgroundImage={"./hero-banner.png"}
        title={"Polychroma High Jewellery Collection"}
        subtitle={
          "A celebration of Bvlgari’s mastery in reinventing forms and colours, Polychroma embodies a distinctive High Jewellery vision."
        }
        buttonText={"Discover the collection"}
      />
      <CategoriesSection />
      <LatestCollection
        products={productsItem}
        title={"Our Latest Collection"}
      />
      <InfoCardBanner
        image={"./info-banner.png"}
        title={"Introducing Our New High  Jewellery Collection"}
        description={
          "Sea of Wonder is a mesmerizing tribute to the beauty and rhythm of the ocean. The new high jewelry expression reinterprets archival Jean Schlumberger creations in breathtaking new designs."
        }
        buttonText={"Know More"}
        layout="full"
        descriptionWidth="640px"
        sx={{
          backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)),
        linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))
      `,
          zIndex: 1,
          "& p": { width: "640px" },
        }}
      />
      <LatestCollection products={productsItem2} title={"Our Bestsellers"} />

      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "60px",
            padding: "80px 0",
          }}
        >
          <Box>
            <InfoCardBanner
              image={"./info1.jpg"}
              title={"Custom Design"}
              description={
                "Our Unique Settings staff is highly dedicated and trained in delivering exceptional quality and service."
              }
              buttonText={"Know More"}
              sx={{ alignItems: "inherit", padding: "48px", height: "620px" }}
              enableZoom={true}
            />
          </Box>

          <Box>
            <InfoCardBanner
              image={"./info2.jpg"}
              title={"Services"}
              description={
                "We offer exquisite jewelry services including custom designs, repairs, and personalized styling to elevate your elegance."
              }
              buttonText={"Know More"}
              sx={{ alignItems: "inherit", padding: "48px", height: "620px" }}
              enableZoom={true}
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
