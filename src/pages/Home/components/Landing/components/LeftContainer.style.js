import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import c from "../../../../../constants"

const Wrapper = styled("div")(({ theme }) => ({
  flex: "35%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down(c.b900)]: {
    flex: "45%",
  },
  [theme.breakpoints.down(c.b700)]: {
    flex: "35%",
  },
  [theme.breakpoints.down(c.b600)]: {
    flex: "initial",
    width: "100%",
    height: "30%",
  },
}))

const Body = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  margin: "3rem",
  width: "100%",
  [theme.breakpoints.down(c.b1200)]: {
    margin: "2rem 0.5rem",
    justifyContent: "center",
  },
  "& a": {
    display: "flex",
    alignItems: "center",
  },
}))

// Social Icon
export const SocialIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "35px",
  margin: "0 1rem",
  transition: "transform 0.5s",
  "&:hover": {
    transform: "scale(1.2)",
  },
  [theme.breakpoints.down(c.b900)]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down(c.b600)]: {
    display: "none",
  },
}))

export default {
  Wrapper,
  Body,
  SocialIcon,
}
