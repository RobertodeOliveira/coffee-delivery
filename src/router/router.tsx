import { createBrowserRouter } from 'react-router-dom'
import { Pages } from '../pages/index'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Pages />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
])
