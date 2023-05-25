import React from 'react';
import DatosCarroSoat from '../componentes/datosCarroSoat/datosCarroSoat'
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import {FormularioClienteSinCuenta} from '../componentes/formularioClienteSinCuenta/FormularioClienteSinCuenta'
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";

function SoatPagina2() {
  const location = useLocation();
  const informacionPlaca = location.state.informacionPlaca;
  const informacionCliente = location.state.informacionCliente;
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {2}/>
      {/* <DatosCarroSoat informacionPlaca={informacionPlaca} datosCliente={informacionCliente}/> */}
      <FormularioClienteSinCuenta rumbo="Soat" informacionPlaca={informacionPlaca}/>
    </>   
  );
}
export default SoatPagina2;