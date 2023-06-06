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
  var informacionClienteSinCuenta = null;
  var informacionPlaca = null;

  console.log("cotizacion2 se recibio");
  console.log(location.state);

  if(location.state !== null){
    informacionPlaca = location.state.informacionPlaca;

    //Informacion que es devuelta
    informacionClienteSinCuenta = location.state.informacionClienteSinCuenta;
  }

  //Redirigir a inicio si no se realizo el flujo anterior
  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }
  },[]);

  return (
    <>
      <Navbar comportamiento={"mostrar"}/>
      {/* <BarraProgreso paso = {3}/> */}
      {/* <DatosCarro datosCliente = {datosCliente} informacionPlaca={informacionPlaca}/> */}
      <BarraProgresoSeguro paso = {2}/>
      <FormularioClienteSinCuenta rumbo="cotizacion" informacionPlaca={informacionPlaca} informacionClienteSinCuenta={informacionClienteSinCuenta}/>
    </>   
  );
}
export default CotizacionPagina2;