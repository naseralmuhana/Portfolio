import { styled } from "@mui/system"
import c from "../../../constants"

// Section Title default Style
const SectionTitle = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.fonts.main,
  fontSize: "3.5rem",
  marginBottom: "2.5rem",
  [theme.breakpoints.between(c.md, c.sxl)]: {
    fontSize: "3.3rem",
    marginBottom: "1.875rem",
  },
  [theme.breakpoints.down(c.md)]: {
    fontSize: "3rem",
    marginBottom: "1.25rem",
  },
  [theme.breakpoints.down(c.smd)]: {
    fontSize: "2.75rem",
    alignSelf: "center",
  },
  [theme.breakpoints.down(c.sm)]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down(c.xs)]: {
    fontSize: "2rem",
  },
}))

export default SectionTitle
