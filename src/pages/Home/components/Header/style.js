import { styled } from "@mui/material/styles"
import c from "../../../../constants"

const Wrapper = styled("header")(({ theme, trigger }) => ({
  backgroundColor: trigger ? theme.palette.primary.main : "transparent",
  padding: "0rem 6rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: trigger ? "3.5rem" : "6.5rem",
  transition: "0.6s",
  [theme.breakpoints.down(c.b1100)]: { padding: "0 2rem" },
  boxShadow: trigger ? `0px 0px 30px rgb(0 0 0 / 20%)` : "none",

  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 99,
}))

export default {
  Wrapper,
}
