import { useMemo, useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material"
import ThemeContext from "."
import { darkColors, lightColors, Modes } from "../../assets/style/theme"
import defaultTheme from "../../assets/style/theme/defaultTheme"
import { toggleModeHelper, retrieveThemeFromLS, saveThemeToLS } from "./helper"
import c from "../../constants"

// Create theme context provider
const ThemeContextProvider = ({ children }) => {
  console.log("ThemeContextProvider")
  // Get the mode & color labels from localStorage
  const initialTheme = retrieveThemeFromLS()
  // save the initial mode label in state to change it later on
  const [modeLabel, setModeLabel] = useState(initialTheme.modeLabel)
  // save the initial color label in state to change it later on
  const [colorLabel, setColorLabel] = useState(initialTheme.colorLabel)

  // find the selected mode from theme data mode
  const selectedMode = Modes.find((mode) => mode.label === modeLabel)
  // find the selected color from theme data color
  const selectedColor = useMemo(() => {
    console.log("selectedColor")
    return modeLabel === c.darkLabel
      ? darkColors.find((color) => color.label === colorLabel)
      : lightColors.find((color) => color.label === colorLabel)
  }, [colorLabel, modeLabel])

  // context value to be able to use it in the app (use context)
  const contextValue = {
    // to toggle the mode (dark, light)
    toggleMode: () => setModeLabel((prev) => toggleModeHelper(prev)),
    // change theme color using the color label that is passed in
    changeColor: (color) => setColorLabel(color),
  }

  // Save theme Labels in localStorage
  const theme = useMemo(() => {
    saveThemeToLS({ colorLabel, modeLabel })
    // create the mui theme using the default theme
    return createTheme(defaultTheme({ selectedMode, selectedColor }))
  }, [colorLabel, modeLabel, selectedColor, selectedMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
