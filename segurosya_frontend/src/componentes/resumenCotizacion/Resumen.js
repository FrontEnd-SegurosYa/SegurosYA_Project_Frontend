import React from "react";
import "./Resumen.css"; // archivo CSS donde escribiremos nuestros estilos
import '../../index.css'
import imagenCheck from '../../img/check.png'
import './fecha'
import { Link } from "react-router-dom";

function Resumen() {
  return (
    <>
      <div className="containerR">
        <div className="cardResumen">
          <h2><b>Información del auto</b></h2>
          <ol>
            <li> Marca: </li>
            <li> Modelo:</li>
            <li> Año de fabricación:</li>
            <li> Número de asientos:</li>
          </ol>
        </div>
        <div className="cardResumen imagen">
          <></>
        </div>
      </div>
      <div className="containerR">
        <div className="cardResumen">
          <h2> <b> Resumen de la cotización </b></h2>
          <h3>Monto Total: </h3>
          <h5> <b>Esta cotización tiene vigencia hasta el día:</b></h5>
        </div>
      </div>
      <br/>
      <div className="text-center">
            <button className="btnGeneral2" data-bs-toggle="modal" data-bs-target="#volverModal">Continuar</button>
      </div>
      <div className="modal fade " id="volverModal" tabindex="-1" aria-labelledby="volverModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modalMensajes">
              <img src={imagenCheck} className="img-fluid check" alt = "Check"/>
              <div className="modal-header">
                <h3 className="modal-title Textos" id="volverModalLabel"> <b>Gracias por cotizar con SegurosYA!</b></h3>
              </div>
              <div className="modal-body Textos" >
                <h4>Se le enviará la cotización a su correo electrónico</h4> 
              </div>
              <div className="modal-footer">
                <Link to={"/"}>
                  <button className="btnGeneral btnVolverCentrado" data-bs-dismiss="modal">Volver</button>
                  </Link>
              </div>
            </div>
        </div>
      </div>
      <br/>
    </>
  );
}
export default Resumen;






