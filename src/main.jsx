import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { loader as rootLoader } from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: '/:solicitation',
        element: <App />,
      },
    ],
  },
  {
    path: '/ppp',
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: '/ppp:solicitation',
        element: <App />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
