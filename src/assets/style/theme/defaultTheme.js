// the default theme that will be used in the app and styled components
// using the context api to fill it with the chosen theme mode and color

const defaultTheme = ({ selectedMode, selectedColor }) => {
  const { label: modeLabel, ...mode } = selectedMode
  const { label: colorLabel, ...color } = selectedColor

  return {
    modeLabel,
    colorLabel,
    palette: {
      primary: { light: color.light, main: color.main },
      secondary: { main: mode.secondary },
    },
  }
}

export default defaultTheme
