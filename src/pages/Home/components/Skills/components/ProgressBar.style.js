import { styled } from "@mui/material/styles"

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.5rem",
  width: "200px",
})

const Bar = styled("progress")(({ theme }) => ({
  width: "100%",
  height: "10px",
  borderRadius: "6px",
  overflow: "hidden",

  "::-moz-progress-bar": {
    backgroundColor: theme.palette.tertiary.main,
  },
  "::-webkit-progress-value": {
    backgroundColor: theme.palette.primary.main,
  },
}))

export default { Wrapper, Bar }
