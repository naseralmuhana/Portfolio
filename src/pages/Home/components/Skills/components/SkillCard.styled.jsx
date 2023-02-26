import { default as MuiTooltip, tooltipClasses } from "@mui/material/Tooltip"
import { styled } from "@mui/material/styles"
import c from "../../../../../constants"

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  boxShadow: `0px 0px 20px ${theme.palette.primary.light}`,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  width: "160px",
  height: "160px",
  padding: "2rem 1rem",
  margin: "1.5rem",
  borderRadius: "10px",
  transition: "all 300ms ease-in-out",

  [theme.breakpoints.down(c.lmd)]: {
    width: "150px",
    height: "150px",
    margin: "1.2rem",
  },
  [theme.breakpoints.down(c.sm)]: {
    width: "135px",
    height: "135px",
  },
}))

const Image = styled("img")(({ theme }) => ({
  height: "50px",
  pointerEvents: "none",
  [theme.breakpoints.down(c.lmd)]: {
    height: "45px",
  },
  [theme.breakpoints.down(c.smd)]: {
    height: "40px",
  },
}))

const Title = styled("h3")(({ theme }) => ({
  color: theme.palette.tertiary.main,
  fontFamily: theme.fonts.secondary.s1,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: "1.375rem",
  marginTop: "1rem",
  textAlign: "center",
  [theme.breakpoints.down(c.lmd)]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down(c.smd)]: {
    fontSize: "1.125rem",
  },
  [theme.breakpoints.down(c.xsm)]: {
    fontSize: "1rem",
  },
}))

const Tooltip = styled(({ className, ...props }) => (
  <MuiTooltip
    {...props}
    classes={{ popper: className }}
    enterTouchDelay={0}
    leaveTouchDelay={100000}
    arrow
    followCursor
    placement="top"
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.tertiary.main50,
    color: theme.palette.primary.main,
  },
}))
export default { Wrapper, Image, Title, Tooltip }
