import React from 'react';
import './ContenedorPrincipal.css';
import { Link } from 'react-router-dom';

export function ContenedorPrincipal (){
    return <div class="back-imag">
    <div class="card-container">
      <div class="card d-flex justify-content-center align-items-center">
        <p>Inicia tu trámite de SOAT con nosotros HOY</p>
        <button type="button" class="btnGeneral btnContenedor">Compra AQUÍ</button>
      </div>
      <div class="card d-flex justify-content-center align-items-center">
        <p>Cotiza tu seguro vehicular aquí HOY</p>
        <Link to={"/FormularioClienteSinCuenta"}>
          <button type="button text-center" class="btnGeneral btnContenedor">Cotiza AQUÍ</button>
        </Link>
       
      </div>
    </div>
  </div>
    
}