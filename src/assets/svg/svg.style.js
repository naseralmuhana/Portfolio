import { styled } from "@mui/material/styles"

export const SvgWrapper = styled("svg")(({ theme }) => ({
  "& path.main": {
    fill: theme.palette.primary.light,
  },
  "& path.dark": {
    fill: theme.palette.primary.darkest,
  },
  "& path.light": {
    fill: theme.palette.primary.lightest,
  },
  "& path.secondary": {
    fill: theme.palette.secondary.main,
  },
}))
