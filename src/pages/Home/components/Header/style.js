import { styled } from "@mui/material/styles"
import c from "../../../../constants"

const Wrapper = styled("header")(({ theme, trigger }) => ({
  backgroundColor: trigger ? theme.palette.secondary.main : "transparent",
  padding: "0rem 6rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: trigger ? "3.5rem" : "4.5rem",
  transition: "0.6s",
  [theme.breakpoints.down(c.b1100)]: { padding: "0 2rem" },
  boxShadow: trigger ? `0px 0px 30px rgb(0 0 0 / 20%)` : "none",

  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 99,

  [".trigger"]: {
    display: "block",
    width: "50px",
    borderRadius: "100%",
    color: "#bbb",
    cursor: "pointer",

    zIndex: 5,
    position: "relative",

    height: "50px",
    backgroundColor: "#000",
    "&::after": {
      content: '""',
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      color: "#cc00ff",
      opacity: 0.15,
      borderRadius: "100%",
      boxShadow: "0 5px 20px",
      transition: "0.3s",
    },

    span: {
      top: "24px",
      width: "24px",
      left: "13px",
      "&::before": { bottom: "6px", width: "24px", left: 0 },
      "&::after": { top: "6px", width: "16px", left: 0 },
    },

    "span, span::after, span::before": {
      display: "block",
      height: "2px",
      position: "absolute",
      backgroundColor: "#bbb",
      content: '""',
      transition: "0.3s",
    },
  },
}))

export default {
  Wrapper,
}
