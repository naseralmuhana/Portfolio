import { styled } from "@mui/material/styles"
import c from "../../../constants"

// Wrapper
const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",

  width: "90%",
  height: "140px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  borderRadius: "20px",

  backgroundColor: theme.palette.primary.main,
  transition: "background-color 300ms ease-in-out",

  ":hover": {
    backgroundColor: theme.palette.primary.main50,
    // cursor: "pointer",
    "& path": {
      stroke: theme.palette.primary.main50,
    },
  },

  [theme.breakpoints.down(c.b1000)]: {
    width: "100%",
  },
  [theme.breakpoints.down(c.b800)]: {
    height: "130px",
    padding: "1rem",
  },
}))

// Image Container
const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  width: "55px",
  height: "55px",
  borderRadius: "50px",
  position: "relative",
  zIndex: 3,

  backgroundColor: theme.palette.secondary.main,

  [theme.breakpoints.down(c.b800)]: {
    width: "45px",
    height: "45px",
  },
}))

// Description
const DescriptionContainer = styled("div")({
  marginLeft: "0.6rem",
  position: "relative",
  zIndex: 3,
})

//  Duration
const Duration = styled("h6")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "0.85rem",
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: "0.5rem",
  [theme.breakpoints.down(c.b800)]: {
    marginBottom: "0.45rem",
  },
}))

// Title
const Title = styled("h4")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "1.225rem",
  fontWeight: theme.typography.fontWeightBold,
  [theme.breakpoints.down(c.b800)]: {
    fontSize: "1.225rem",
    lineHeight: "126%",
  },
  [theme.breakpoints.down(c.b600)]: {
    fontSize: "1.025rem",
  },
}))

// Content
const Content = styled("h5")(({ theme }) => ({
  color: theme.palette.secondary.main50,
  fontSize: "1.15rem",
  fontWeight: theme.typography.fontWeightMedium,

  [theme.breakpoints.down(c.b800)]: {
    fontSize: "1.05rem",
    lineHeight: "126%",
  },
  [theme.breakpoints.down(c.b600)]: {
    fontSize: "0.95rem",
  },
}))

export default {
  Wrapper,
  ImageContainer,
  DescriptionContainer,
  Duration,
  Title,
  Content,
}
