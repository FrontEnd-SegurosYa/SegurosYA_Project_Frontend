import React, {useEffect} from 'react';
import PlanesSOAT from '../componentes/planesSoat/PlanesSOAT';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SoatPagina4() {
  const navigate = useNavigate();
  const location = useLocation();
  
  var informacionClienteSinCuenta = null;
  var informacionPlaca = null
  var informacionAuto = null;
  var planSeleccionado = null;

  console.log('Se recibio en soat4');
  console.log(location.state);

  if(location.state !== null){
    
    informacionClienteSinCuenta = location.state.informacionClienteSinCuenta;
    informacionPlaca = location.state.informacionPlaca;
    informacionAuto = location.state.informacionAuto;
    //opcion al volver
    planSeleccionado = location.state.planSeleccionado;
  }
  

  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }
  },[]);

  return (
    <>
      <Navbar comportamiento={"mostrar"}/>
      <BarraProgreso paso = {4}/>
      <PlanesSOAT informacionClienteSinCuenta={informacionClienteSinCuenta} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto} planSeleccionado={planSeleccionado} />
    </>   
  );
}
export default SoatPagina4;