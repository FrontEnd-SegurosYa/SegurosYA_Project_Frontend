import React from 'react';
import './ContenedorPrincipal.css';
import { Link } from 'react-router-dom';

export function ContenedorPrincipal (){
    return <div className="back-imag">
    <div className="cardPrincipal">
      <div className="card d-flex justify-content-center align-items-center">
        <p>Inicia tu trámite de SOAT con nosotros HOY</p>
        <Link to={"/FormularioClienteSinCuentaSeguro"} state={"Seguro"}>
          <button type="button" className="btnGeneral btnContenedor">Compra AQUÍ</button>
        </Link>   
      </div>
      <div className="card d-flex justify-content-center align-items-center">
        <p>Cotiza tu seguro vehicular aquí HOY</p>
        <Link to={"/FormularioClienteSinCuentaSOAT"} state={"Soat"}>
          <button type="button text-center" className="btnGeneral btnContenedor">Cotiza AQUÍ</button>
        </Link>    
      </div>
    </div>
  </div>
    
}