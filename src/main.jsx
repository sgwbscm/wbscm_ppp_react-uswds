import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  RouterProvider,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Root, { loader as rootLoader } from "./App.jsx";
import { StrictMode } from 'react';

const router = createBrowserRouter([


  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: "/:solicitation",
        element: <App />,

      },
    ]
  },
  {
    path: "/ppp",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: "/ppp:solicitation",
        element: <App />,

      },
    ]
  }

]);

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />


)
