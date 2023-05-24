import React from 'react';
import DatosCarroSoat from '../componentes/datosCarroSoat/datosCarroSoat'
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";

function SoatPagina2() {
  const location = useLocation();
  const informacionPlaca = location.state.informacionPlaca;
  const informacionCliente = location.state.informacionCliente;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {3}/>
      <DatosCarroSoat informacionPlaca={informacionPlaca} datosCliente={informacionCliente}/>
    </>   
  );
}
export default SoatPagina2;