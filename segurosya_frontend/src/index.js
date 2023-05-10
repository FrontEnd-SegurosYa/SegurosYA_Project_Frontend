import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import PaginaInicio from './paginas/PaginaInicio';
import CotizacionPagina1 from './paginas/CotizacionPagina1';
import CotizacionPagina2 from './paginas/CotizacionPagina2';
import CotizacionPagina3 from './paginas/CotizacionPagina3';
import CotizacionPagina5 from './paginas/CotizacionPagina5';
import CrearCuenta from './paginas/CrearCuenta';
import IngresarCuenta from './paginas/IngresarCuenta';



const router = createBrowserRouter([
    {
      path: "/",
      element: <PaginaInicio/>,
    },
    {
      path: "/cotizacion1",
      element: <CotizacionPagina1/>,
    },
    {
      path: "/cotizacion2",
      element: <CotizacionPagina2/>,
    },
    {
      path: "/cotizacion3",
      element: <CotizacionPagina3/>,
    },
    {
      path: "/cotizacion5",
      element: <CotizacionPagina5/>,
    },
    {
      path: "/crearCuenta",
      element: <CrearCuenta/>,
    },
    {
      path: "/iniciarSesion",
      element: <IngresarCuenta/>,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );