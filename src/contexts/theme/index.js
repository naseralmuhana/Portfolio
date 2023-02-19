import { createContext } from "react"

// Create theme context
const ThemeContext = createContext({
  toggleMode: () => {},
  // eslint-disable-next-line no-unused-vars
  changeColor: (color) => {},
})

export default ThemeContext
