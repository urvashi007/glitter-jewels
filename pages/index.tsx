import HeroBanner from "@/components/Banner";
import LatestCollection from "@/components/CardCollection";
import CategoriesSection from "@/components/Categories";
import Header from "@/components/Header";


export default function HomePage() {
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
  navItems={['HOME', 'PRODUCTS', 'COLLECTIONS', 'DIAMONDS']}
  searchEnabled
/>
      <HeroBanner backgroundImage={"./hero-banner.png"} title={"Polychroma High Jewellery Collection"} subtitle={"A celebration of Bvlgari’s mastery in reinventing forms and colours, Polychroma embodies a distinctive High Jewellery vision."} buttonText={"Discover the collection"} />
      <CategoriesSection />
      <LatestCollection />
      
    </>
  );
}
