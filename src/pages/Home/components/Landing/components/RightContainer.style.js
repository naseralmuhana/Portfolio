import { styled } from "@mui/material/styles"
import c from "../../../../../constants"

const Wrapper = styled("div")(({ theme }) => ({
  flex: "65%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
  [theme.breakpoints.down(c.b900)]: {
    flex: "55%",
  },
  [theme.breakpoints.down(c.b700)]: {
    flex: "45%",
  },
  [theme.breakpoints.down(c.b600)]: {
    flex: "initial",
    width: "100%",
    height: "70%",
    alignItems: "center",
    padding: "0 2rem",
  },
}))

const Body = styled("div")(({ theme }) => ({
  marginRight: "7rem",
  width: "45%",
  fontFamily: theme.fonts.main,
  [theme.breakpoints.down(c.b900)]: {
    width: "85%",
    marginTop: "10%",
    marginRight: "6%",
  },
  [theme.breakpoints.down(c.b600)]: {
    width: "100%",
    marginRight: "initial",
    marginTop: "20%",
  },
  [theme.breakpoints.down(c.b500)]: {
    marginTop: "35%",
  },
  [theme.breakpoints.down(c.b400)]: {
    marginTop: "55%",
  },
}))

const Title = styled("h6")(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1.25rem",
  marginBottom: "-0.85rem",
  opacity: 0.8,
  [theme.breakpoints.down(c.b1100)]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down(c.b600)]: {
    fontSize: "1rem",
    textAlign: "center",
  },
  [theme.breakpoints.down(c.b320)]: {
    fontSize: "1rem",
  },
}))

const Name = styled("h1")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "3.25rem",
  margin: "1rem 0",
  lineHeight: "110%",
  [theme.breakpoints.down(c.b1100)]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down(c.b600)]: {
    fontSize: "2.5rem",
    textAlign: "center",
  },
  [theme.breakpoints.down(c.b320)]: {
    fontSize: "1.75rem",
  },
}))
const Description = styled("p")(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1.15rem",
  marginTop: "1.45rem",
  opacity: 0.7,
  [theme.breakpoints.down(c.b1100)]: {
    fontSize: "1rem",
    marginTop: "0.3rem",
    marginBottom: "1rem",
  },
  [theme.breakpoints.down(c.b600)]: {
    width: "90%",
    fontSize: "0.95rem",
    margin: "0 auto",
    textAlign: "center",
  },
  [theme.breakpoints.down(c.b320)]: {
    fontSize: "0.85rem",
  },
}))

export default {
  Wrapper,
  Body,
  Title,
  Name,
  Description,
}
