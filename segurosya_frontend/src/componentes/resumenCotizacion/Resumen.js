import React from "react";
import "./Resumen.css"; // archivo CSS donde escribiremos nuestros estilos
import '../../index.css'
import imagenCheck from '../../img/check.png'
import './fecha'
import { Link } from "react-router-dom";
import DatosCarroSoat from "../datosCarroSoat/datosCarroSoat";

function Resumen({informacionClienteSinCuenta,informacionPlaca,informacionAuto}) {
  const fechaActual = new Date();
  fechaActual.setFullYear(fechaActual.getFullYear() + 1);
  const dia = fechaActual.getDate().toString().padStart(2, '0');
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const anio = fechaActual.getFullYear();
  const fechaActualTexto= `${dia}/${mes}/${anio}`;

  return (
    <>
      <div className="containerR">
        <div className="cardResumen">
          <h2><b>Información del auto</b></h2>
          <ol>
            <li> Marca: {informacionAuto.marca.nombre}</li>
            <li> Modelo: {informacionAuto.modelo.nombre} </li>
            <li> Año de fabricación: {informacionAuto.anhoFabricacion} </li>
            <li> Número de asientos: {informacionAuto.numeroAsientos} </li>
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
          <h5> <b>Esta cotización tiene vigencia hasta el día:  {fechaActualTexto}</b></h5>
        </div>
      </div>
      <br/>
      <div className="text-center">
            <Link to={"/cotizacion3"} state={{informacionClienteSinCuenta: informacionClienteSinCuenta,informacionPlaca: informacionPlaca, informacionAuto: informacionAuto}}>
              <button className="btnGeneral2" >Volver</button>
            </Link>
            <button className="btnGeneral2" data-bs-toggle="modal" data-bs-target="#volverModal">Continuar</button>
            
      </div>
      <div className="modal fade " id="volverModal" tabIndex="-1" aria-labelledby="volverModalLabel" aria-hidden="true">
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
                <Link to={"/"} >
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






