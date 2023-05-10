// CotizacionPagina5.js
import React from 'react';
import Navbar from '../componentes/navbar/Navbar' 
import Resumen from '../componentes/resumenCotizacion/Resumen';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import { useLocation } from "react-router-dom";

function CotizacionPagina4() {
  const location = useLocation();
  const datosCarro  = location.state;

  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {4}/>
      <Resumen/>
    </>   
  );
}
export default CotizacionPagina4;
