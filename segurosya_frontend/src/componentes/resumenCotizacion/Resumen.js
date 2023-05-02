import React from "react";
import "./Resumen.css"; // archivo CSS donde escribiremos nuestros estilos
import '../../index.css'

function Resumen() {
  return (
    <>
      <div class="container">
        <div class="cardResumen">
          <h2><b>Información del auto</b></h2>
          <ol>
            <li> Marca: </li>
            <li> Modelo:</li>
            <li> Año de fabricación:</li>
            <li> Número de asientos:</li>
          </ol>
        </div>
        <div class="cardResumen">
          <img src="./../../img/brand.png" alt = ""></img>
        </div>
      </div>
      <div class="container">
        <div class="cardResumen">
          <h2> <b> Resumen de la cotización </b></h2>
          <h3>Monto Total: </h3>
        </div>
      </div>
      <div class="text-center">
            <button class="btnGeneral2 btnVolverCentrado" data-bs-toggle="modal" data-bs-target="#volverModal">Volver</button>
      </div>
    <div class="modal fade" id="volverModal" tabindex="-1" aria-labelledby="volverModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <img src="../../img/brand.png" class="img-fluid"/>
        <div class="modal-header">
            <h3 class="modal-title Textos" id="volverModalLabel"> <b>Gracias por cotizar con SegurosYA!</b></h3>
        </div>
        <div class="modal-body Textos" >
            <h4>Se le envió un PDF de su cotización a su correo electrónico </h4> 
        </div>
        <div class="modal-footer text-center">
            <button class="btnGeneral btnVolverCentrado" data-bs-dismiss="modal">Volver</button>
        </div>
        </div>
    </div>
</div>
      
    </>
  );
}

export default Resumen;