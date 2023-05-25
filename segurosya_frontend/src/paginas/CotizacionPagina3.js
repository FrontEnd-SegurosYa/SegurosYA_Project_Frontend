import React from 'react';
import DatosSeleccionados from '../componentes/datosSeleccionados/DatosSeleccionados.js';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";
import {DatosCarro} from "../componentes/datosCotizacion/DatosCarro.js"

function CotizacionPagina3() {
  const location = useLocation();
  const informacionCliente = location.state.informacionClienteSinCuenta;
  const informacionPlaca = location.state.informacionPlaca;
  // const informacionAuto = informacionClientes.informacionAuto;
  return (
    <>
      <Navbar/>
      {/* <BarraProgreso paso = {4}/> */}
      
      {/* <DatosSeleccionados datosCliente = {datosCliente} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto}/> */}
      <BarraProgreso paso = {3}/>
      <DatosCarro datosCliente={informacionCliente} informacionPlaca={informacionPlaca} rumbo = "seguro"/>
    </>   
  );
}
export default CotizacionPagina3;