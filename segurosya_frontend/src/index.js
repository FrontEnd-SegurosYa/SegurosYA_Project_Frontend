import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import PaginaInicio from './paginas/PaginaInicio';
import CotizacionPagina1 from './paginas/CotizacionPagina1';
import CotizacionPagina2 from './paginas/CotizacionPagina2';
import CotizacionPagina3 from './paginas/CotizacionPagina3';
import CotizacionPagina4 from './paginas/CotizacionPagina4';
import CotizacionPaginaCoberturas from './paginas/CotizacionPaginaCoberturas';

import FormularioClientesSinCuentaSeguro from './paginas/FormularioClienteSinCuentaSeguro'
import FormularioClientesSinCuentaSOAT from './paginas/FormularioClienteSinCuentaSeguro'

import IngresarCuenta from './paginas/IngresarCuenta';
import CrearCuenta from './paginas/CrearCuenta';
import SoatPagina1 from './paginas/SoatPagina1';
import SoatPagina3 from './paginas/SoatPagina3';
import SoatPagina2 from './paginas/SoatPagina2';
import SoatPagina4 from './paginas/SoatPagina4';
import SoatPagina5 from './paginas/SoatPagina5';
import SoatPagina6 from './paginas/SoatPagina6';



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
      path: "/cotizacion4",
      element: <CotizacionPagina4/>,
    },
    {
      path: "/cotizacionTemp",
      element: <CotizacionPaginaCoberturas/>,
    },
    {
      path: "/formularioClienteSinCuentaSeguro",
      element: <FormularioClientesSinCuentaSeguro/>,
    },
    {
      path: "/formularioClienteSinCuentaSOAT",
      element: <FormularioClientesSinCuentaSOAT/>,
    },
    {
      path: "/soat1",
      element: <SoatPagina1/>,
    },
    {
      path: "/soat2",
      element: <SoatPagina2/>,
    },
    {
      path: "/soat3",
      element: <SoatPagina3/>,
    },
    {
      path: "/soat4",
      element: <SoatPagina4/>,
    },
    {
      path: "/soat5",
      element: <SoatPagina5/>,
    },
    {
      path: "/soat6",
      element: <SoatPagina6/>,
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