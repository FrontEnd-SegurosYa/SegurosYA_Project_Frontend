import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import PaginaInicio from './paginas/PaginaInicio';
import CotizacionPagina5 from './paginas/CotizacionPagina5';



const router = createBrowserRouter([
    {
      path: "/",
      element: <PaginaInicio/>,
    },
    {
        path: "/resumen",
        element: <CotizacionPagina5/>,
      },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );