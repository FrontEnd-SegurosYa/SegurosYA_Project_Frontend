// CotizacionPagina2.js
import React from 'react';
import InfoCotizaciones from '../componentes/infoCotizacion/InfoCotizaciones.js';
import {BarraProgreso} from "../BarraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar.js'
import {FormularioPlacaCotizacion} from "../FormularioPlacaCotizacion/FormularioPlacaCotizacion.js"

function CotizacionPagina2() {
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {1}/>
      <FormularioPlacaCotizacion/>
      <InfoCotizaciones/>
    </>   
  );
}
export default CotizacionPagina2;