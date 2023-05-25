import React from 'react';
import DatosCarroSoat from '../componentes/datosCarroSoat/datosCarroSoat'
import {DatosCarro} from "../componentes/datosCotizacion/DatosCarro.js"
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";

function SoatPagina3() {
  const location = useLocation();
  const informacionCliente = location.state.informacionClienteSinCuenta;
  const informacionPlaca = location.state.informacionPlaca;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {3}/>
      <DatosCarro datosCliente={informacionCliente} informacionPlaca={informacionPlaca} rumbo = "Soat"/>
    </>   
  );
}
export default SoatPagina3;