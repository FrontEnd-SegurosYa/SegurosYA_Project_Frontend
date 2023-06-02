// SoatPagina1.js
import React from 'react';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar.js'
import InfoCotizaciones from '../componentes/infoCotizacion/InfoCotizaciones.js';
import {FormularioPlacaSoat} from "../componentes/formularioPlacaSoat/FormularioPlacaSoat.js"
import { useLocation } from "react-router-dom";

function SoatPagina1() {
  const location = useLocation();
  let placaPasada = null;

  if(location.state !== null ){
    placaPasada = location.state;
    console.log('Se recibio en soat1');
    console.log(placaPasada);
  }else{
    console.log('no se recibio nada.');
  }

  
  return (
    <>
      <Navbar comportamiento={"mostrar"}/>
      <BarraProgreso paso = {1}/>
      {/* <FormularioPlacaSoat datosCliente = {informacionClienteSinCuenta} /> */}
      <FormularioPlacaSoat placaPasada={placaPasada}/>
      <InfoCotizaciones/>
    </>   
  );
}
export default SoatPagina1;