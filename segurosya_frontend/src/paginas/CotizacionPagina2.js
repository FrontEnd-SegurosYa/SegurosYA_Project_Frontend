// CotizacionPagina1.js
import React from 'react';
import DatosCarro from '../componentes/datosCotizacion/DatosCarro.js'
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar.js' 
import { useLocation } from "react-router-dom";

function CotizacionPagina2() {
  const location = useLocation();
  const datosCliente = location.state;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {2}/>
      <DatosCarro datosCliente = {datosCliente}/>
    </>   
  );
}
export default CotizacionPagina2;