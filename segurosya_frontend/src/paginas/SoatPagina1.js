// SoatPagina1.js
import React from 'react';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar.js'
import InfoCotizaciones from '../componentes/infoCotizacion/InfoCotizaciones.js';
import {FormularioPlacaSoat} from "../componentes/formularioPlacaSoat/FormularioPlacaSoat.js"
import { useLocation } from "react-router-dom";

function SoatPagina1() {
  const location = useLocation();
  const informacionClienteSinCuenta = location.state;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {1}/>
      <FormularioPlacaSoat datosCliente = {informacionClienteSinCuenta} />
      <InfoCotizaciones/>
    </>   
  );
}
export default SoatPagina1;