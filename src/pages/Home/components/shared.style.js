import { styled } from "@mui/system"

// Section Title default Style
export const SectionTitle = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.fonts.main,
  fontSize: "3.5rem",
  marginBottom: "2.5rem",
  [theme.breakpoints.between("md", "sxl")]: {
    fontSize: "3.3rem",
    marginBottom: "1.875rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
    marginBottom: "1.25rem",
  },
  [theme.breakpoints.down("smd")]: {
    fontSize: "2.75rem",
    alignSelf: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2rem",
  },
}))
