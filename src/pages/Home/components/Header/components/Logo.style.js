import { styled } from "@mui/material/styles"
import { motion } from "framer-motion"
import c from "../../../../../constants"

const Wrapper = styled(motion.svg)(({ theme, trigger }) => ({
  width: "279px",
  height: "31px",
  transition: "width 100ms ease-in-out, height 100ms ease-is-out",
  "path[stroke]": {
    stroke: trigger ? theme.palette.primary.main : theme.palette.secondary.main,
  },
  [theme.breakpoints.down(c.b1000)]: {
    width: "235px",
    height: "27px",
  },
  [theme.breakpoints.down(c.b1000)]: {
    width: "220px",
    height: "27px",
  },
  [theme.breakpoints.down(c.b700)]: {
    width: "195px",
    height: "23px",
  },
  [theme.breakpoints.down(c.b600)]: {
    "path[stroke]": {
      stroke: trigger
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    },
  },
}))

export default { Wrapper }
