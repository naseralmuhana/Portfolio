import { styled } from "@mui/material/styles"

/** Education + Experience Sections */

// Section used for [Education, Experience]
const Section = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  overflow: "hidden",
  [theme.breakpoints.down("lmd")]: {
    minHeight: "100%",
  },
}))

// Section Body
const SectionBody = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
})

// Section Description Container
const SectionDescriptionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  flex: 0.63,
  width: "100%",
  padding: "2rem",
  marginLeft: "7%",
  [theme.breakpoints.down("lg")]: {
    flex: 0.6,
  },
  [theme.breakpoints.down("lmd")]: {
    flex: 1,
    margin: "auto 0",
  },
}))

// Section Image Container
const SectionImageContainer = styled("div")(({ theme }) => ({
  flex: 0.37,
  padding: "1rem",
  marginTop: "1rem",
  pointerEvents: "none",
  [theme.breakpoints.down("lg")]: {
    flex: 0.4,
  },
  [theme.breakpoints.down("lmd")]: {
    display: "none",
  },
}))

export default {
  Section,
  SectionBody,
  SectionDescriptionContainer,
  SectionImageContainer,
}
