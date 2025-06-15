import { Card, CardContent, Typography } from "@mui/material";

export default function DeliveryDetailsCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>Delivery Details</Typography>
        <Typography fontWeight="bold">Ashish Sharma</Typography>
        <Typography>
          S-4A, kabir marg, bani park, Jaipur, Rajasthan 302016, India
        </Typography>
        <Typography>Mobile Number: 8201475558</Typography>
      </CardContent>
    </Card>
  );
}
