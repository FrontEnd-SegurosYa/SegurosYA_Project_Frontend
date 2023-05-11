import React from 'react';
import PlanesSOAT from '../componentes/planesSoat/PlanesSOAT';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";

function SoatPagina3() {
  const location = useLocation();
  // const informacionPlaca = location.state.informacionPlaca;
  // const informacionCliente = location.state.informacionCliente;
  // const informacionAuto = location.state.informacionAuto;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {3}/>
      <PlanesSOAT informacionCliente={location.state}/>
    </>   
  );
}
export default SoatPagina3;