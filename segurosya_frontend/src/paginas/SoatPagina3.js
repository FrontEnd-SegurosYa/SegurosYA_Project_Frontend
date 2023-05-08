import React from 'react';
import PlanesSOAT from '../componentes/planesSoat/PlanesSOAT';
import {BarraProgreso} from "../componentes/barraProgreso/BarraProgreso.js"
import Navbar from '../componentes/navbar/Navbar'

function SoatPagina3() {
  return (
    <>
      <Navbar/>
      <BarraProgreso paso = {3}/>
      <PlanesSOAT/>
    </>   
  );
}
export default SoatPagina3;