import React from 'react';
import DatosSeleccionados from '../componentes/datosSeleccionados/DatosSeleccionados.js';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";

function CotizacionPagina3() {
  const location = useLocation();
  const informacionClientes = location.state;
  const datosCliente = informacionClientes.datosCliente;
  const informacionPlaca = informacionClientes.informacionPlaca;
  const informacionAuto = informacionClientes.informacionAuto;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {4}/>
      <DatosSeleccionados datosCliente = {datosCliente} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto}/>
    </>   
  );
}
export default CotizacionPagina3;