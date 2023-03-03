import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import c from "../../../../../constants"

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "350px",
  marginTop: "2rem",
  fontFamily: theme.fonts.main,
  [theme.breakpoints.down(c.b1100)]: {
    marginTop: "1rem",
    flexDirection: "column",
    width: "200px",
    height: "120px",
    alignItems: "flex-start",
  },
  [theme.breakpoints.down(c.b600)]: {
    margin: "1rem auto 0rem",

    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
}))
const ResumeBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  font: "inherit",
  borderRadius: "30px",
  textTransform: "inherit",
  textDecoration: "none",
  width: "150px",
  fontSize: "1rem",
  fontWeight: 500,
  height: "50px",
  border: `3px solid ${theme.palette.primary.main}`,
  transition: "100ms ease-out",
  "&:hover": {
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.secondary.main,
    border: `3px solid ${theme.palette.tertiary.main}`,
  },
  [theme.breakpoints.down(c.b600)]: {
    width: "180px",
  },
}))
const ContactBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  font: "inherit",
  borderRadius: "30px",
  textTransform: "inherit",
  textDecoration: "none",
  width: "150px",
  height: "50px",
  fontSize: "1rem",
  fontWeight: 500,
  border: `3px solid ${theme.palette.primary.main}`,
  transition: "100ms ease-out",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.tertiary.main,
    border: `3px solid ${theme.palette.tertiary.main}`,
  },
  [theme.breakpoints.down(c.b600)]: {
    // display: "none",
    width: "180px",
  },
}))

export default {
  Wrapper,
  ResumeBtn,
  ContactBtn,
}
