// CotizacionPagina2.js
import React from 'react';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar.js'
import InfoCotizaciones from '../componentes/infoCotizacion/InfoCotizaciones.js';
import {FormularioPlacaCotizacion} from "../componentes/formularioPlacaCotizacion/FormularioPlacaCotizacion.js"
import { useLocation } from "react-router-dom";

function CotizacionPagina1() {
  // const location = useLocation();
  // const informacionClienteSinCuenta = location.state;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {1}/>
      {/* <FormularioPlacaCotizacion datosCliente = {informacionClienteSinCuenta} /> */}
      <FormularioPlacaCotizacion />
      <InfoCotizaciones/>
    </>   
  );
}
export default CotizacionPagina1;