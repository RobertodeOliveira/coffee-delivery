import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { RouterProvider } from 'react-router-dom'
import { routers } from './router/router'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={routers} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
