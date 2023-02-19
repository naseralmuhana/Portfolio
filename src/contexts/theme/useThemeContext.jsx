import { useContext } from "react"
import ThemeContext from "."

// create theme hook using the theme context
const useThemeContext = () => useContext(ThemeContext)

export default useThemeContext
