// CotizacionPagina1.js
import React from 'react';
import DatosCarro from '../componentes/datosCotizacion/DatosCarro.js'
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import {FormularioClienteSinCuenta} from '../componentes/formularioClienteSinCuenta/FormularioClienteSinCuenta'
import Navbar from '../componentes/navbar/Navbar.js' 
import { useLocation } from "react-router-dom";

function CotizacionPagina2() {
  const location = useLocation();
  // const datosCliente = location.state.datosCliente;
  const informacionPlaca = location.state.informacionPlaca;
  console.log(location.state);
  return (
    <>
      <Navbar/>
      {/* <BarraProgreso paso = {3}/> */}
      {/* <DatosCarro datosCliente = {datosCliente} informacionPlaca={informacionPlaca}/> */}
      <BarraProgreso paso = {2}/>
      <FormularioClienteSinCuenta rumbo="cotizacion" informacionPlaca={informacionPlaca}/>
    </>   
  );
}
export default CotizacionPagina2;