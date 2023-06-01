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
  var informacionClienteSinCuenta = null;

  console.log('Se recibio en soat2');
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
      <Navbar/>
      <BarraProgreso paso = {2}/>
      {/* <DatosCarroSoat informacionPlaca={informacionPlaca} datosCliente={informacionCliente}/> */}
      <FormularioClienteSinCuenta rumbo="soat" informacionPlaca={informacionPlaca} informacionClienteSinCuenta={informacionClienteSinCuenta} />
    </>   
  );
}
export default SoatPagina2;