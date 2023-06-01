import React, { useEffect } from 'react';
import DatosSeleccionados from '../componentes/datosSeleccionados/DatosSeleccionados.js';
import {BarraProgresoSeguro} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";
import {DatosCarro} from "../componentes/datosCotizacion/DatosCarro.js"
import { useNavigate } from "react-router-dom";

function CotizacionPagina3() {
  const location = useLocation();
  const navigate = useNavigate();

  var informacionClienteSinCuenta = null;
  var informacionPlaca = null;
  var informacionAuto = null;

  console.log("cotizacion3 se recibio");
  console.log(location.state);

  if(location.state !== null){
    
    informacionClienteSinCuenta = location.state.informacionClienteSinCuenta;
    informacionPlaca = location.state.informacionPlaca;
    //Informacion devuelta
    informacionAuto = location.state.informacionAuto;
  }

  //Redirigir a inicio si no se realizo el flujo anterior
  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }
  },[]);

  return (
    <>
      <Navbar/>
      {/* <BarraProgreso paso = {4}/> */}
      
      {/* <DatosSeleccionados datosCliente = {datosCliente} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto}/> */}
      <BarraProgresoSeguro paso = {3}/>
      <DatosCarro informacionClienteSinCuenta={informacionClienteSinCuenta} informacionPlaca={informacionPlaca} informacionAutoPasado={informacionAuto} rumbo = "cotizacion"/>
    </>   
  );
}
export default CotizacionPagina3;