import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
//import App from './App'
import './index.css'
import Ventas from './pages/Ventas'
import Inicio from './pages/Inicio'
import Informacion from './pages/Informacion'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/todos",
    element:  <Ventas/>,
  },
  {
    path: "/informacion",
    element: <Informacion/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
