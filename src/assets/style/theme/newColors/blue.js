import c from "../../../../constants"

const darkBlue = {
  background: "#212121",
  textDark: "#212121",
  textDark50: "#212121cc",
  textLight: "#eaeaea",
  lightest: "#6E8BE0",
  light: "#5B73BA",
  main: "#7A9AFA",
  main50: "#7A9AFAcc",
  dark: "#3C4C7A",
  darkest: "#1D243B",
}
const lightBlue = {
  background: "#eaeaea",
  textDark: "#eaeaea",
  textDark50: "#eaeaeacc",
  textLight: "#212121",
  lightest: "#6179C7",
  light: "#425287",
  main: "#1D243B",
  dark: "#232B47",
  darkest: "#191F33",
}

export const blue = (mode) =>
  mode === c.darkLabel
    ? {
        background: "#212121",
        textDark: "#212121",
        textDark50: "#212121cc",
        textLight: "#eaeaea",
        lightest: "#6E8BE0",
        light: "#5B73BA",
        main: "#7A9AFA",
        main50: "#7A9AFAe3",
        dark: "#3C4C7A",
        darkest: "#1D243B",
      }
    : {
        background: "#eaeaea",
        textDark: "#eaeaea",
        textDark50: "#eaeaeacc",
        textLight: "#212121",
        lightest: "#6179C7",
        light: "#425287",
        main: "#1D243B",
        main50: "#1D243Be3",
        dark: "#232B47",
        darkest: "#191F33",
      }
