import React from 'react';
import DatosSeleccionados from '../componentes/datosSeleccionados/DatosSeleccionados.js';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'

function CotizacionPagina3() {
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {3}/>
      <DatosSeleccionados/>
    </>   
  );
}
export default CotizacionPagina3;