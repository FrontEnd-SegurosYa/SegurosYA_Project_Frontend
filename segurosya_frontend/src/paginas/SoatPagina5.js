import React from 'react';
import PasarelaDePagos from '../componentes/pasarelaDePagos/PasarelaDePagos.js';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";

function SoatPagina5() {
  const location = useLocation();
  const informacionClientes = location.state;
  const datosCliente = informacionClientes.datosCliente;
  const informacionPlaca = informacionClientes.informacionPlaca;
  const informacionAuto = informacionClientes.informacionAuto;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {5}/>
      <PasarelaDePagos datosCliente={datosCliente} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto}/>
    </>   
  );
}
export default SoatPagina5;