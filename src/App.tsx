import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { RouterProvider } from "react-router-dom"
import { routers } from "./router/router"

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={routers} />
      </ThemeProvider>
    </>
  )
}

export default App
