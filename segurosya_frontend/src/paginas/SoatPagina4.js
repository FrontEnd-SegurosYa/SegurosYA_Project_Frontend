import React from 'react';
import PlanesSOAT from '../componentes/planesSoat/PlanesSOAT';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";

function SoatPagina4() {
  const location = useLocation();
  const informacionClientes = location.state;
  const datosCliente = informacionClientes.datosCliente;
  const informacionPlaca = informacionClientes.informacionPlaca;
  const informacionAuto = informacionClientes.informacionAuto;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {4}/>
      <PlanesSOAT datosCliente={datosCliente} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto}/>
    </>   
  );
}
export default SoatPagina4;