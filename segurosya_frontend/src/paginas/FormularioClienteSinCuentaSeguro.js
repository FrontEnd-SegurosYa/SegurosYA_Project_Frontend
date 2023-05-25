// FormularioClienteSinCuenta
import React from 'react';
import Navbar from '../componentes/navbar/Navbar' 
import {FormularioClienteSinCuenta} from '../componentes/formularioClienteSinCuenta/FormularioClienteSinCuenta'
import { useLocation } from "react-router-dom";

function FormularioClientesSinCuentaSeguro() {
  const location = useLocation();
  const rumbo = location.state;
  
  return (
    <>
      <Navbar/>
      {/* <div> {rumbo} hola </div> */}
      <FormularioClienteSinCuenta rumbo={rumbo} />
      
    </>   
  );
}
export default FormularioClientesSinCuentaSeguro;