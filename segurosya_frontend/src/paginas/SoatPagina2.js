import React from 'react';
import DatosCarroSoat from '../componentes/datosCarroSoat/datosCarroSoat'
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'

function SoatPagina2() {
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {2}/>
      <DatosCarroSoat/>
    </>   
  );
}
export default SoatPagina2;