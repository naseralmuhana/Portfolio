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

// the default theme that will be used in the app and styled components
// using the context api to fill it with the chosen theme mode and color
const defaultTheme = ({ selectedMode, selectedColor }) => {
  const { label: modeLabel, ...mode } = selectedMode
  const { label: colorLabel, ...color } = selectedColor

  return {
    components, // css base
    modeLabel,
    colorLabel,
    palette: {
      primary: { light: color.light, main: color.main },
      secondary: { main: mode.secondary },
      tertiary: { main: mode.tertiary, main80: mode.tertiary80 },
    },
    fonts: {
      main: "Poppins, sans-serif",
    },
    breakpoints: {
      values: {
        xs: 320,
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
