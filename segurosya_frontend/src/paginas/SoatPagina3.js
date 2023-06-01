import React,  { useEffect } from 'react';
import DatosCarroSoat from '../componentes/datosCarroSoat/datosCarroSoat'
import {DatosCarro} from "../componentes/datosCotizacion/DatosCarro.js"
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SoatPagina3() {
  const navigate = useNavigate();
  const location = useLocation();
  var informacionPlaca = null;
  var informacionClienteSinCuenta = null;
  var informacionAuto = null;

  console.log('Se recibio en soat3');
  console.log(location.state);

  if(location.state !== null){
    informacionPlaca = location.state.informacionPlaca;
    informacionClienteSinCuenta = location.state.informacionClienteSinCuenta;
    // auto al volver
    informacionAuto = location.state.informacionAuto;
  }

  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }
  },[]);

  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {3}/>
      <DatosCarro informacionClienteSinCuenta={informacionClienteSinCuenta} informacionPlaca={informacionPlaca} rumbo = "soat" informacionAutoPasado={informacionAuto}/>
    </>   
  );
}
export default SoatPagina3;