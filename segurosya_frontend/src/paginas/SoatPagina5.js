import React, {useEffect} from 'react';
import PasarelaDePagos from '../componentes/pasarelaDePagos/PasarelaDePagos.js';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SoatPagina5() {
  const navigate = useNavigate();
  const location = useLocation();
  // const informacionClientes = location.state;
  var informacionClienteSinCuenta = null;
  var informacionPlaca = null;
  var informacionAuto = null;
  var planSeleccionado = null;

  console.log('Se recibio en soat5');
  console.log(location.state);

  if(location.state !== null){
    
    informacionClienteSinCuenta = location.state.informacionClienteSinCuenta;
    informacionPlaca = location.state.informacionPlaca;
    informacionAuto = location.state.informacionAuto;
    planSeleccionado = location.state.planSeleccionado;
    //data al volver
  }

  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }
  },[]);
  return (
    <>
      <Navbar comportamiento={"mostrar"}/>
      <BarraProgreso paso = {5}/>
      <PasarelaDePagos informacionClienteSinCuenta={informacionClienteSinCuenta} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto} planSeleccionado = {planSeleccionado}/>
    </>   
  );
}
export default SoatPagina5;