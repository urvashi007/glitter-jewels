import { Box, Typography, Stack, Divider, Button, Card, CardContent } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function PriceDetailsCard() {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>Price Details</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Item(s) total</Typography>
            <Typography>₹88,519</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Discount</Typography>
            <Typography>₹0</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Subtotal</Typography>
            <Typography>₹88,519</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Delivery</Typography>
            <Typography color="success.main">Free</Typography>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight="bold">Total (3 items)</Typography>
            <Typography variant="subtitle1" fontWeight="bold">₹1,828</Typography>
          </Stack>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <CreditCardIcon color="error" sx={{ mr: 1 }} />
            <Typography>Paid by Credit Card</Typography>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ mt: 2 }}>
        <Button fullWidth variant="outlined" sx={{ borderColor: "#3f51b5", color: "#3f51b5" }}>
          BACK TO MY ACCOUNT
        </Button>
      </Box>
    </Box>
  );
}
