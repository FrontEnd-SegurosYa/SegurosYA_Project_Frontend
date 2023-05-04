// CotizacionPagina2.js
import React from 'react';
import InfoCotizaciones from '../componentes/infoCotizacion/InfoCotizaciones.js';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar.js'
import {FormularioPlacaCotizacion} from "../componentes/formularioPlacaCotizacion/FormularioPlacaCotizacion.js"

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