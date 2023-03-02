import { styled } from "@mui/material/styles"
import Marquee from "react-fast-marquee"
import c from "../../../../constants"

const Section = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "2.5rem 2rem 2rem",
  minHeight: "60vh",
  [theme.breakpoints.down(c.b1380)]: {
    padding: "2rem 1rem 1rem",
  },
  [theme.breakpoints.down(c.b1000)]: {
    padding: "1rem",
    minHeight: "100%",
  },
  [theme.breakpoints.down(c.b800)]: {
    padding: "0.5rem",
  },
}))

const Body = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 2rem",
  marginTop: "3.5rem",
  width: "100%",
  [theme.breakpoints.down(c.b1380)]: {
    padding: "1.5rem",
    marginTop: "1.5rem",
  },
  [theme.breakpoints.down(c.b1000)]: {
    padding: "1rem",
    marginTop: "1rem 0",
  },
  [theme.breakpoints.down(c.b800)]: {
    padding: "0.5rem",
  },
}))

const Scroll = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "0 2rem",
  padding: "1.5rem 0",
  [theme.breakpoints.down(c.b800)]: {
    margin: 0,
  },
}))

const CustomMarquee = styled(({ ...props }) => (
  <Marquee {...props} gradient={false} speed={50} pauseOnHover />
))(({ theme }) => ({
  padding: "0rem 0",
  overflowY: "hidden",

  ":has(.skill-card:hover)": {
    ".skill-card:not(:hover)": {
      boxShadow: `0px 0px 20px ${theme.palette.primary.light}`,
    },
    ".skill-card:hover": {
      transform: "scale(1.05)",
    },
  },
}))

export default {
  Section,
  Body,
  Scroll,
  CustomMarquee,
}
