// CotizacionPagina1.js
import React from 'react';
import DatosCarro from '../componentes/datosCotizacion/DatosCarro.js'
import {BarraProgresoSeguro} from "../componentes/barraProgreso/BarraProgreso.js"
import {FormularioClienteSinCuenta} from '../componentes/formularioClienteSinCuenta/FormularioClienteSinCuenta'
import Navbar from '../componentes/navbar/Navbar.js' 
import { useLocation } from "react-router-dom";

function CotizacionPagina2() {
  const location = useLocation();
  var datosCliente = null;
  const informacionPlaca = location.state.informacionPlaca;
  if(location.state.datosCliente !== null){
    datosCliente = location.state.datosCliente;
    // console.log("recibi datos de un cliente");
    // console.log(datosCliente);
  }
  // console.log(location.state);
  return (
    <>
      <Navbar/>
      {/* <BarraProgreso paso = {3}/> */}
      {/* <DatosCarro datosCliente = {datosCliente} informacionPlaca={informacionPlaca}/> */}
      <BarraProgresoSeguro paso = {2}/>
      <FormularioClienteSinCuenta rumbo="cotizacion" informacionPlaca={informacionPlaca} datosCliente={datosCliente}/>
    </>   
  );
}
export default CotizacionPagina2;