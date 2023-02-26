import components from "../../css/base"

import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"
import "@fontsource/big-shoulders-text/500.css"

// the default theme that will be used in the app and styled components
// using the context api to fill it with the chosen theme mode and color
const defaultTheme = ({ selectedMode, selectedColor }) => {
  const { label: modeLabel, ...mode } = selectedMode
  const {
    label: colorLabel,
    lightest,
    light,
    main,
    main50,
    dark,
    darkest,
  } = selectedColor

  return {
    components, // css base
    modeLabel,
    colorLabel,
    palette: {
      primary: {
        lightest,
        light,
        main,
        main50,
        dark,
        darkest,
      },
      secondary: { main: mode.secondary, main50: mode.secondary50 },
      tertiary: { main: mode.tertiary, main80: mode.tertiary80 },
    },
    fonts: {
      main: "Poppins, sans-serif",
      secondary: {
        s1: "Big Shoulders Text",
      },
    },
    typography: {
      fontWeightMedium: 500,
      fontWeightSemiBold: 600,
      fontWeightBold: 700,
    },
    breakpoints: {
      values: {
        xs: 320,
        xsm: 450,
        sm: 600,
        smd: 800,
        md: 900,
        lmd: 1000,
        lg: 1200,
        sxl: 1380,
        xl: 1536,
      },
    },
  }
}

export default defaultTheme
