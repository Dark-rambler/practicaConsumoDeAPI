import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
//import App from './App'
import './index.css'
import Ventas from './pages/Ventas'
import Inicio from './pages/Pokedex'
import Pokedex from './pages/Pokedex'
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
    path: "/pokedex",
    element: <Pokedex/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
