// CotizacionPagina5.js
import React from 'react';
import Navbar from '../componentes/navbar/Navbar' 
import Resumen from '../componentes/resumenCotizacion/Resumen';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"

function CotizacionPagina5() {
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {4}/>
      <Resumen/>
    </>   
  );
}
export default CotizacionPagina5;
