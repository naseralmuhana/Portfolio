import { styled } from "@mui/material/styles"
import c from "../../../../../constants"

const Wrapper = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  cursor: "pointer",
  position: "absolute",
  top: "58.5%",
  transform: "translateY(-50%)",
  width: "60px",
  height: "60px",
  borderRadius: "50%",

  appearance: "none",
  outline: "none",
  border: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "1.6rem",
  transition: "200ms",
  "&:hover": {
    opacity: 0.9,
  },
  [theme.breakpoints.down(c.b800)]: {
    display: "none",
  },
}))

export default { Wrapper }
