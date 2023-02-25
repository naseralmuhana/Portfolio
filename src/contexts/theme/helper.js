import c from "../../constants"

// Retrieve theme mode, theme color from local storage if found, else
// return default mode and color
export const retrieveThemeFromLS = () => {
  // check if system theme = dark
  const isSystemDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches

  // retrieve the storedThemeMode if found, if not
  // check system theme if dark, if not
  // return light as default
  const modeLabel = localStorage.getItem(c.modeLabel)
    ? JSON.parse(localStorage.getItem(c.modeLabel))
    : isSystemDarkTheme
    ? c.darkLabel
    : c.lightLabel

  // retrieve the storedThemeColor if found, if not
  // return blue as default
  const colorLabel = localStorage.getItem(c.colorLabel)
    ? JSON.parse(localStorage.getItem(c.colorLabel))
    : c.blue

  return { modeLabel, colorLabel }
}

// store themeType & themeColor in LocalStorage
export const saveThemeToLS = ({ modeLabel, colorLabel }) => {
  // save theme type
  localStorage.setItem(c.modeLabel, JSON.stringify(modeLabel))
  // save theme color
  localStorage.setItem(c.colorLabel, JSON.stringify(colorLabel))
}

// return dark label if mode is light and vice versa
export const toggleModeHelper = (mode) =>
  mode === c.lightLabel ? c.darkLabel : c.lightLabel
