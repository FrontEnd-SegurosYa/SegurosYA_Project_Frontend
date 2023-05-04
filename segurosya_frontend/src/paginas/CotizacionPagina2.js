// CotizacionPagina1.js
import React from 'react';
import DatosCarro from '../componentes/datosCotizacion/DatosCarro.js'
import {BarraProgreso} from "../BarraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar.js' 

function CotizacionPagina1() {
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {2}/>
      <DatosCarro/>
    </>   
  );
}
export default CotizacionPagina1;