import { styled } from "@mui/material/styles"
import c from "../../../../constants"

// Landing Section
const Section = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "relative",
  [theme.breakpoints.down(c.b600)]: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
}))

/**
 * Centered Rounded Image
 * Content => [Image]
 */

// Rounded Image
const Blob = styled("div")(({ theme, src }) => ({
  "@keyframes morph": {
    "0%, 100%": {
      borderRadius: "42% 56% 72% 28% / 42% 42% 56% 48%",
    },
    "33%": {
      borderRadius: "72% 28% 48% 48% / 28% 28% 72% 72%",
    },
    "66%": {
      borderRadius: "100% 56% 56% 100% / 100% 100% 56% 56%",
    },
  },
  position: "absolute",
  left: "calc(100% - 65%)",
  transform: "translateX(-50%)",

  width: "400px",
  height: "400px",
  borderRadius: "42% 56% 72% 28% / 42% 42% 56% 48%",
  animation: "morph 3.75s linear infinite",
  background: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
  // boxShadow: `inset 10px 10px 10px rgba( 0,0,0,0.05 ),
  //           15px 25px 10px rgba( 0,0,0,0.1 ),
  //           15px 20px 20px rgba( 0,0,0,0.05 ),
  //           inset -10px 10px 10px rgba( 255,255,255,0.6 )`,
  transition: "opacity 0.3s",
  opacity: 1,
  zIndex: 1,
  [theme.breakpoints.down(c.b1100)]: {
    width: "350px",
    height: "350px",
  },
  [theme.breakpoints.down(c.b900)]: {
    width: "300px",
    height: "300px",
    left: "calc(100% - 75%)",
    // left: "45%",
  },
  [theme.breakpoints.down(c.b600)]: {
    width: "200px",
    height: "200px",
    left: "50%",
    // left: "50%",
    top: "30%",
    // border: `8px solid ${theme.secondary}`,
    transform: "translate(-50%, -50%)",
  },
}))

export default {
  Section,
  Blob,
}
