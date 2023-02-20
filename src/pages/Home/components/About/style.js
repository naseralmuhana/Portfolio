import { styled } from "@mui/material/styles"
import AboutMaleSvg from "../../../../assets/svg/AboutMaleSvg"

// About Section
export const Section = styled("section")({
  minHeight: "100vh",
  position: "relative",
})

/**
 * Top Line
 * Content => [Circle, Line]
 */

// Line Container
export const LineContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50px",
  left: "50%",
  transform: "translateX(-50%)",
  height: "50px",
  width: "85%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("smd")]: {
    top: "20px",
  },
}))

// Circle
export const Circle = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  [theme.breakpoints.down("smd")]: {
    width: "8px",
    height: "8px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "6px",
    height: "6px",
  },
}))

// Line
export const Line = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "95%",
  height: "5px",
  borderRadius: "10px",
  [theme.breakpoints.down("smd")]: {
    width: "94%",
    height: "4px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "93%",
    height: "3px",
  },
}))

/**
 * About Body
 * Content => [Description, Image]
 */

// Body
export const Body = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
  paddingTop: "7rem",
  height: "fit-content",
  [theme.breakpoints.down("smd")]: {
    paddingTop: "4rem",
    flexDirection: "column-reverse",
    justifyContent: "space-evenly",
  },
}))

// Description Container
export const DescriptionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flex: 0.5,
  width: "100%",
  height: "fit-content",
  [theme.breakpoints.down("md")]: {
    flex: 0.7,
    /* padding: '5% 10%', */
    padding: "20px",
  },
}))

// Description
export const Description = styled("p")(({ theme }) => ({
  color: theme.palette.tertiary.main80,
  fontSize: "1.25rem",
  [theme.breakpoints.between("md", "sxl")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
  },
}))

// Image Container
export const ImageContainer = styled("div")({
  marginTop: "40px",
  pointerEvents: "none",
})

// Image
export const Image = styled(AboutMaleSvg)(({ theme }) => ({
  "& svg": {
    width: "380px",

    [theme.breakpoints.between("md", "sxl")]: {
      width: "300px",
    },
    [theme.breakpoints.down("md")]: {
      width: "250px",
      flex: 0.4,
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
  },
}))
