import { customVars } from "@/utils/theme";
import { SxProps, Theme } from "@mui/material";


export const styles = {
  galleryWrapper: {
    mx: "auto",
    py: 4,
  },

  mainImageBox: {
    mb: 2,
    backgroundColor: customVars.background.whitebg,
  },

  mainImage: {
    width: "100%",
    maxWidth: "457px",
    height: "600px",
    objectFit: "contain",
    margin: "0 auto",
    display: "block",
    padding: "20px",
  },

  thumbnailRow: {
    display: "flex",
    justifyContent: "center",
    gap: 2,
    mb: 2,
  },

  thumbnailBox: {
    width: "100%",
    minWidth:'228px',
    height: "300px",
    backgroundColor: customVars.background.whitebg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  thumbnailImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: "20px",
  },

  bottomImageBox: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: customVars.background.whitebg,
  },

  bottomImage: {
    width: "100%",
    maxWidth: "457px",
    height: "600px",
    objectFit: "contain",
    margin: "0 auto",
    display: "block",
    padding: "20px",
  },

  mobileWrapper: {
    position: "relative",
  },

  sliderBox: {
    display: "flex",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    gap: 0,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  slideImageBox: {
    flex: "0 0 100%",
    scrollSnapAlign: "start",
    backgroundColor: customVars.background.whitebg,
  },

  slideImage: {
    width: "100%",
    height: "300px",
    objectFit: "contain",
    display: "block",
  },
};

export const arrowButtonStyle = (position: "left" | "right"): SxProps<Theme> => ({
  position: "absolute",
  top: "50%",
  [position]: 8,
  transform: "translateY(-50%)",
  zIndex: 1,
  borderRadius: "50%",
  backgroundColor: customVars.background.whitebg,
  width: 30,
  height: 30,
  "&:hover": {
    backgroundColor: "#eef2ff",
  },
});
