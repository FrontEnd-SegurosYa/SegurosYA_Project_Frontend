import React from "react";
import "./Resumen.css"; // archivo CSS donde escribiremos nuestros estilos
import '../../index.css'
import imagen from '../../img/check.png'
import './fecha'

function Resumen() {
  return (
    <>
      <div class="containerR">
        <div class="cardResumen">
          <h2><b>Información del auto</b></h2>
          <ol>
            <li> Marca: </li>
            <li> Modelo:</li>
            <li> Año de fabricación:</li>
            <li> Número de asientos:</li>
          </ol>
        </div>
        <div class="cardResumen imagen">
          <></>
        </div>
      </div>
      <div class="containerR">
        <div class="cardResumen">
          <h2> <b> Resumen de la cotización </b></h2>
          <h3>Monto Total: </h3>
          <h5> <b>Esta cotización tiene vigencia hasta el día:</b></h5>
        </div>
      </div>
      <div class="text-center">
            <button class="btnGeneral2 btnVolverCentrado" data-bs-toggle="modal" data-bs-target="#volverModal">Volver</button>
      </div>
      <div class="modal fade " id="volverModal" tabindex="-1" aria-labelledby="volverModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modalA">
              <img src={imagen} class="img-fluid check"/>
              <div class="modal-header">
                <h3 class="modal-title Textos" id="volverModalLabel"> <b>Gracias por cotizar con SegurosYA!</b></h3>
              </div>
              <div class="modal-body Textos" >
                <h4>Se le enviará la cotización a su correo electrónico</h4> 
              </div>
              <div class="modal-footer">
                  <button class="btnGeneral btnVolverCentrado" data-bs-dismiss="modal">Volver</button>
              </div>
            </div>
        </div>
      </div>
      
    </>
  );
}
export default Resumen;






