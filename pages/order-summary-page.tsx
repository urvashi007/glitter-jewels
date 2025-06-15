import { Box } from "@mui/material";
import DeliveryDetailsCard from "../components/DeliveryDetailsCard";
import PriceDetailsCard from "../components/PriceDetailsCard";


export default function OrderSummaryPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, bgcolor: "#f3f5fc", p: 2 }}>
      <Box sx={{ flex: 1 }}>
        {/* <ProductDetailsCard /> */}
        <Box mt={2}>
          <DeliveryDetailsCard />
        </Box>
      </Box>
      <Box sx={{ width: { xs: "100%", md: 300 } }}>
        <PriceDetailsCard />
      </Box>
    </Box>
  );
}
