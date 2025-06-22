import { Box, Button, Typography } from "@mui/material";
import Image from 'next/image';

export default function NoAddressCard({ onAdd }: { onAdd: () => void }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        background: "#fff",
        padding: "60px 20px",
        border: "1px solid #E0E0E0",
      }}
    >
      <Box
        sx={{
        //   background: "#F5F5F5",
        //   borderRadius: "50%",
        //   padding: 3,
          mb: 2,
        }}
      >
       <Image src="/car.svg" alt="car Icon" width={100} height={100} />
      </Box>

      <Typography
        fontSize="24px"
        fontWeight="500"
        color="#222"
        mb={2}
        fontFamily="Jost, sans-serif"
      >
        No shipping address has been added.
      </Typography>

      <Button
        variant="outlined"
        sx={{
          borderColor: "#445B9C",
          color: "#445B9C",
          fontWeight: 600,
          fontFamily: "Jost, sans-serif",
          textTransform: "uppercase",
          padding: "6px 18px",
          fontSize: "14px",
        }}
        onClick={onAdd}
      >
        ADD NEW ADDRESS
      </Button>
    </Box>
  );
}
