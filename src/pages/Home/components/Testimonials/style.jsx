import { styled } from "@mui/material/styles"
import SectionTitle from "../../../../common/UI/Section/SectionTitle.style"
import c from "../../../../constants"
import { FaQuoteLeft } from "react-icons/fa"
import "react-responsive-carousel/lib/styles/carousel.css"
import { Carousel } from "react-responsive-carousel"

const Section = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  // minHeight: "100vh",
  height: "100vh",
  overflow: "hidden",
  [theme.breakpoints.down(c.b1000)]: {
    paddingBottom: "2rem",
    height: "100%",
  },
}))

const Title = styled(SectionTitle)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginTop: 0,
  [theme.breakpoints.down(c.b900)]: {
    marginTop: "1.75rem",
  },
}))

const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "95%",
  marginTop: "1rem",
  position: "relative",
  [theme.breakpoints.down(c.b800)]: {
    width: "100%",
  },
}))

const QuoteIcon = styled(FaQuoteLeft)(({ theme }) => ({
  color: theme.palette.secondary.main,
  opacity: 0.5,
  fontSize: "4rem",
  position: "absolute",
  // transform: "translateY(50%)",
  zIndex: 10,
  [theme.breakpoints.down(c.b1000)]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down(c.b600)]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down(c.b320)]: {
    fontSize: "2.5rem",
  },
}))

const SliderContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "70%",
  [theme.breakpoints.down(c.b800)]: {
    width: "90%",
  },
  [theme.breakpoints.down(c.b320)]: {
    width: "100%",
  },
}))

const CustomSlider = styled(Carousel)(({ theme }) => ({
  width: "100%",
  height: "100%",
  "& .dot": {
    background: `${theme.palette.secondary.main} !important`,
    margin: "0 0.75rem !important",
  },
}))

export default {
  Section,
  Title,
  Body,
  QuoteIcon,
  SliderContainer,
  CustomSlider,
}
