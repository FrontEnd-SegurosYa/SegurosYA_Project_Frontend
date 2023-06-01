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
  var datosCliente = null;
  var informacionPlaca = null
  var informacionAuto = null;

  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }else{
      informacionClientes = location.state;
      datosCliente = informacionClientes.datosCliente;
      informacionPlaca = informacionClientes.informacionPlaca;
      informacionAuto = informacionClientes.informacionAuto;
    }
  },[]);

  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {4}/>
      <PlanesSOAT datosCliente={datosCliente} informacionPlaca={informacionPlaca} informacionAuto={informacionAuto}/>
    </>   
  );
}
export default SoatPagina4;