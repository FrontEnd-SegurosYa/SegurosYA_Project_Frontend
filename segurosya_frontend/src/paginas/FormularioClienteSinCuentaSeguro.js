// FormularioClienteSinCuenta
import React from 'react';
import Navbar from '../componentes/navbar/Navbar' 
import {FormularioClienteSinCuenta} from '../componentes/formularioClienteSinCuenta/FormularioClienteSinCuenta'
import { useLocation } from "react-router-dom";

function FormularioClientesSinCuentaSeguro() {
  const location = useLocation();
  const informacionPlaca = location.state.informacionPlaca;
  const rumbo = location.state.rumbo;
  
  return (
    <>
      <Navbar comportamiento={"mostrar"}/>
      {/* <div> {rumbo} hola </div> */}
      <FormularioClienteSinCuenta rumbo={rumbo} informacionPlaca={informacionPlaca} />
      
    </>   
  );
}
export default FormularioClientesSinCuentaSeguro;