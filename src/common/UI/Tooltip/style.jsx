import { styled } from "@mui/material/styles"
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"
import c from "../../../constants"

// Custom Tool tip
const Wrapper = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    // leaveDelay={60000}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.tertiary.main,
    fontFamily: theme.fonts.main,
    boxShadow: theme.shadows[1],

    [theme.breakpoints.down(c.b800)]: {
      fontSize: "0.775rem",
    },
  },
}))

export default { Wrapper }
