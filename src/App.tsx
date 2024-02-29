import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { RouterProvider } from 'react-router-dom'
import { routers } from './router/router'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './contexts'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <RouterProvider router={routers} />
        </CartContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
