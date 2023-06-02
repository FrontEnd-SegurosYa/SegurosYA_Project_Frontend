// CotizacionPagina4.js
import React, { useEffect } from 'react';
import Navbar from '../componentes/navbar/Navbar' 
import Resumen from '../componentes/resumenCotizacion/Resumen';
import {BarraProgresoSeguro} from "../componentes/barraProgreso/BarraProgreso.js"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CotizacionPagina4() {
  const location = useLocation();
  const navigate = useNavigate();

  
  var informacionClienteSinCuenta = null;
  var informacionPlaca = null;
  var informacionAuto = null;
  var listaDeIdCoberturas = null;

  console.log("cotizacion3 se recibio");
  console.log(location.state);

  if(location.state !== null){
    //Informacion devuelta
    informacionClienteSinCuenta = location.state.informacionClienteSinCuenta;
    informacionPlaca = location.state.informacionPlaca;    
    informacionAuto = location.state.informacionAuto;
    listaDeIdCoberturas = location.state.listaDeIdCoberturas;
  }

  //Redirigir a inicio si no se realizo el flujo anterior
  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }
  },[]);

  return (
    <>
      <Navbar comportamiento={"mostrar"}/>
      <BarraProgresoSeguro paso = {5}/>
      <Resumen informacionClienteSinCuenta={informacionClienteSinCuenta} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto} listaDeIdCoberturas={listaDeIdCoberturas}/>
    </>   
  );
}
export default CotizacionPagina4;
