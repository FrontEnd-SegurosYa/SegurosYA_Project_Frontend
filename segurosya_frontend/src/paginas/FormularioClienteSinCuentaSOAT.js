// FormularioClienteSinCuenta
import React from 'react';
import Navbar from '../componentes/navbar/Navbar' 
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
      <FormularioClienteSinCuenta rumbo={rumbo} informacionPlaca={informacionPlaca}/>
      
    </>   
  );
}
export default FormularioClientesSinCuentaSOAT;