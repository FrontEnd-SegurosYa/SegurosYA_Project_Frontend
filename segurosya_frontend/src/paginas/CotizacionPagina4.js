// CotizacionPagina5.js
import React from 'react';
import Navbar from '../componentes/navbar/Navbar' 
import Resumen from '../componentes/resumenCotizacion/Resumen';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import { useLocation } from "react-router-dom";

function CotizacionPagina4() {
  const location = useLocation();
  const informacionClientes = location.state;
  const datosCliente = informacionClientes.datosCliente;
  const informacionPlaca = informacionClientes.informacionPlaca;
  const informacionAuto = informacionClientes.informacionAuto;

  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {5}/>
      <Resumen datosCliente={datosCliente} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto} />
    </>   
  );
}
export default CotizacionPagina4;
