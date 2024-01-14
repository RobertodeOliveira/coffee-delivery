import { createBrowserRouter } from 'react-router-dom'
import { Pages } from '../pages/index'
import { Home } from '../pages/Home'
import { Car } from '../pages/Car'

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
        path: '/car',
        element: <Car />,
      },
    ],
  },
])
