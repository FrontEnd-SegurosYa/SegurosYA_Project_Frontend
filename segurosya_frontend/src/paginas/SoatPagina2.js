import React, { useEffect } from 'react';
import DatosCarroSoat from '../componentes/datosCarroSoat/datosCarroSoat'
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import {FormularioClienteSinCuenta} from '../componentes/formularioClienteSinCuenta/FormularioClienteSinCuenta'
import Navbar from '../componentes/navbar/Navbar'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SoatPagina2() {
  const navigate = useNavigate();
  const location = useLocation();
  var informacionPlaca = null;
  var informacionCliente = null;
  console.log(location);  

  //Redirigir a inicio si no se realizo el flujo anterior
  useEffect(() => {
    if(location.state === null){
      navigate("/");
    }else{
      informacionPlaca = location.state.informacionPlaca;
      informacionCliente = location.state.informacionCliente;
    }
  },[]);
    
   
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