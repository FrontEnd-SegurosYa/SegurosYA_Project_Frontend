import React, {useEffect} from 'react';
import PlanesSOAT from '../componentes/planesSoat/PlanesSOAT';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SoatPagina4() {
  const navigate = useNavigate();
  const location = useLocation();
  var informacionClientes = null;
  var informacionClienteSinCuenta = null;
  var informacionPlaca = null
  var informacionAuto = null;

  console.log('Se recibio en soat4');
  console.log(location.state);

  if(location.state !== null){
    informacionClientes = location.state;
      informacionClienteSinCuenta = informacionClientes.informacionClienteSinCuenta;
      informacionPlaca = informacionClientes.informacionPlaca;
      informacionAuto = informacionClientes.informacionAuto;
    //opcion al volver

  }

  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }
  },[]);

  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {4}/>
      <PlanesSOAT informacionClienteSinCuenta={informacionClienteSinCuenta} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto}/>
    </>   
  );
}
export default SoatPagina4;