import { styled } from "@mui/material/styles"
import c from "../../../../../constants"

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "500px",
  position: "relative",
  padding: "2rem",
})

const Body = styled("div")({
  cursor: "grab",
  // "&:active": { cursor: "grabbing" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",
})

const ImageContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100px",
  height: "100px",
  borderRadius: "50%",
  margin: "0 auto",
  zIndex: "3",
  transform: "translateY(50%)",
  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
  "& > img": {
    width: "90px !important",
  },
  [theme.breakpoints.down(c.b600)]: {
    margin: "initial",
    alignSelf: "flex-start",
  },
  [theme.breakpoints.down(c.b320)]: {
    width: "80px",
    height: "80px",
    "& > img": {
      width: "70px !important",
    },
  },
}))
const DetailsContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.tertiary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "4px 4px 8px rgb(36 3 3 / 20%)",
  width: "90%",
  height: "250px",
  margin: "0 auto",
  borderRadius: "200px",
  padding: "60px 40px 30px",
  "& > p": {
    fontStyle: "italic",
    fontWeight: 300,
    width: "80%",
  },
  "& > h1": {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginTop: "10px",
  },
  "& > h4": {
    fontSize: "1rem",
    fontWeight: 500,
  },
  [theme.breakpoints.down(c.b1000)]: {
    borderRadius: "50px",
  },
  [theme.breakpoints.down(c.b600)]: {
    borderRadius: "20px",
    minHeight: "300px",
    "& > p": {
      fontSize: "0.9rem",
      width: "90%",
    },
    "& > h1": {
      fontSize: "1.3rem",
    },
    "& > h4": {
      fontSize: "0.9rem",
    },
  },
  [theme.breakpoints.down(c.b320)]: {
    minHeight: "350px",
  },
}))

export default {
  Wrapper,
  Body,
  ImageContainer,
  DetailsContainer,
}
