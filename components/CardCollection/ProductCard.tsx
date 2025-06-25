import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { Heart, HeartIcon, Plus } from "lucide-react";
import { customVars } from "@/utils/theme";
import { styles, hoverIconsSx } from "./CardCollection.styles";
import type { Product } from "./CardCollection";

type ProductCardProps = {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onClickDetails: (product: Product) => void;
  hoveredId: string | null;
  setHoveredId: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  onClickDetails,
  hoveredId,
  setHoveredId,
}: ProductCardProps) {
  return (
    <>
      <Card
        elevation={0}
        onMouseEnter={() => setHoveredId(product.id)}
        onMouseLeave={() => setHoveredId(null)}
        sx={styles.card}
      >
        <Box display="flex" gap={1} mb={1}>
          <Box sx={styles.badge}>Gold W : {product.gold}</Box>
          <Box sx={styles.badge}>Dia. WT : {product.diamond}</Box>
        </Box>

        <Box
          component="img"
          src={product.image}
          alt={product.id}
          sx={styles.image}
        />

        <Box
          sx={{
            ...hoverIconsSx,
            ...(hoveredId === product.id && {
              opacity: 1,
              transform: "translateY(0)",
            }),
          }}
        >
          <IconButton
            size="small"
            onClick={() => onToggleFavorite(product.id)}
            sx={{
              ...styles.iconBtn,
              color: isFavorite ? "red" : customVars.colors.dark,
            }}
          >
            {isFavorite ? (
              <HeartIcon fill="red" size={16} />
            ) : (
              <Heart size={16} />
            )}
          </IconButton>

          <IconButton
            size="small"
            onClick={() => onClickDetails(product)}
            sx={styles.iconBtnAccent}
          >
            <Plus size={16} />
          </IconButton>
        </Box>
      </Card>

      <CardContent sx={styles.cardContent}>
        <Typography variant="body1" sx={styles.cardText}>
          {product.id} &nbsp;–&nbsp;
          <Box component="span" sx={styles.cardPrice}>
            {product.price}
          </Box>
        </Typography>
      </CardContent>
    </>
  );
}
