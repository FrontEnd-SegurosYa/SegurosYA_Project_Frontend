// CotizacionPagina1.js
import React, { useEffect } from 'react';
import DatosCarro from '../componentes/datosCotizacion/DatosCarro.js'
import {BarraProgresoSeguro} from "../componentes/barraProgreso/BarraProgreso.js"
import {FormularioClienteSinCuenta} from '../componentes/formularioClienteSinCuenta/FormularioClienteSinCuenta'
import Navbar from '../componentes/navbar/Navbar.js' 
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CotizacionPagina2() {
  const location = useLocation();
  const navigate = useNavigate();
  var datosCliente = null;
  var informacionPlaca = null;

  if(location.state !== null){
    datosCliente = location.state.datosCliente;
    informacionPlaca = location.state.informacionPlaca;

  }

  //Redirigir a inicio si no se realizo el flujo anterior
  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }
  },[]);

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