// FormularioClienteSinCuenta
import React from 'react';
import Navbar from '../componentes/navbar/Navbar' 
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import {FormularioClienteSinCuenta} from '../componentes/formularioClienteSinCuenta/FormularioClienteSinCuenta'
import { useLocation } from "react-router-dom";

function FormularioClientesSinCuentaSeguroSOAT() {
  const location = useLocation();
  const rumbo = location.state;
  console.log(rumbo);
  return (
    <>
      <Navbar/>
      {/* <div> {rumbo} hola </div> */}
      <BarraProgreso paso = {2}/>
      <FormularioClienteSinCuenta rumbo={rumbo}/>
      
    </>   
  );
}
export default FormularioClientesSinCuentaSOAT;