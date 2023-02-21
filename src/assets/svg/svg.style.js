import { styled } from "@mui/material/styles"

export const SvgWrapper = styled("svg")(({ theme }) => ({
  "& path.main": {
    fill: theme.palette.primary.main,
  },
  "& path.dark": {
    fill: theme.palette.primary.dark,
  },
  "& path.light": {
    fill: theme.palette.primary.light,
  },
  "& path.secondary": {
    fill: theme.palette.secondary.main,
  },
}))
