// CotizacionPagina1.js
import React from 'react';
import {BarraProgresoSeguro} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar.js'
import InfoCotizaciones from '../componentes/infoCotizacion/InfoCotizaciones.js';
import {FormularioPlacaCotizacion} from "../componentes/formularioPlacaCotizacion/FormularioPlacaCotizacion.js"
import { useLocation } from "react-router-dom";

function CotizacionPagina1() {
  const location = useLocation();
  let informacionPlacaPasada = null;
  if(location.state !== null){
    informacionPlacaPasada = location.state;
    console.log('Se recibio ');
    console.log(informacionPlacaPasada);
  }
  // console.log('Se recibio ');
  // console.log(informacionPlacaPasada);
  return (
    <>
      <Navbar/>
      <BarraProgresoSeguro paso = {1}/>
      {/* <FormularioPlacaCotizacion datosCliente = {informacionClienteSinCuenta} /> */}
      <FormularioPlacaCotizacion placaPasada={informacionPlacaPasada}/>
      <InfoCotizaciones/>
    </>   
  );
}
export default CotizacionPagina1;