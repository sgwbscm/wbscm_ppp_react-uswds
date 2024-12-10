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

/*
let hostName = location.hostname;
console.log(hostName);
let appPath = "";
if(hostName.includes("localhost") || hostName.includes("wbscmsbx"))
{
  appPath = "wbscm-app-devdsl-ppp-external";
}*/
const router = createBrowserRouter([
  

  {
    path: "/",
    element:  <App />,
    loader:rootLoader,
    children: [
      {
        path: "/:solicitation",
        element:  <App />,
  
      },
    ]
  },
    {
      path: "/ppp",
    //path: "/"+appPath+"/ppp",
    element:  <App />,
    loader:rootLoader,
    children: [
      {
        //path: "/"+appPath+"/ppp:solicitation",
        path: "/ppp:solicitation",
        element:  <App />,
  
      },
    ]
  }

]);

createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router} />
 

)
