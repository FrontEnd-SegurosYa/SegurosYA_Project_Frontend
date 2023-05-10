import React from 'react';
import DatosSeleccionados from '../componentes/datosSeleccionados/DatosSeleccionados.js';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";

function CotizacionPagina3() {
  const location = useLocation();
  const datosCarro = location.state;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {3}/>
      <DatosSeleccionados carroSeleccionado = {datosCarro}/>
    </>   
  );
}
export default CotizacionPagina3;