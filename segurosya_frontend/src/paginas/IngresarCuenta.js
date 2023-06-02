// IngresarCuenta.js
import React from 'react';
import IniciarSesion from '../componentes/iniciarSesion/IniciarSesion';
import Navbar from '../componentes/navbar/Navbar';

function IngresarCuenta() {
  return (
    <>
      <Navbar comportamiento={"ocultar"}/>
      <IniciarSesion/>
    </>
  );
}
export default IngresarCuenta;