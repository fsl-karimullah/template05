import Root from './layouts/Root'
import Home from './pages/Home'

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
    ],
  },
]

export default routes
