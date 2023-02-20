import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import App from "./App"
import ThemeContextProvider from "./contexts/theme/provider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
