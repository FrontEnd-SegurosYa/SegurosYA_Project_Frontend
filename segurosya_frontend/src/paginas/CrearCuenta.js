// CrearCuenta.js
import React from 'react';
import RegistrarCliente from '../componentes/registrarCliente/RegistrarCliente';
import Navbar from '../componentes/navbar/Navbar'

function CrearCuenta() {
  return (
    <>
      <Navbar comportamiento={"ocultar"}/>
      <RegistrarCliente/>
    </>
  );
}
export default CrearCuenta;