import React from "react";
import "./Resumen.css"; // archivo CSS donde escribiremos nuestros estilos
import '../../index.css'
import imagenCheck from '../../img/check.png'
import './fecha'
import { Link } from "react-router-dom";
import DatosCarroSoat from "../datosCarroSoat/datosCarroSoat";

import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from "react";

import { crearCotizacion } from "./funcionesExtras";

function Resumen({informacionClienteSinCuenta,informacionPlaca,informacionAuto,listaDeIdCoberturas,nombresCoberturas,monto}) {
  
  const { control, handleSubmit,setValue } = useForm();
  const fechaActual = new Date();
  fechaActual.setFullYear(fechaActual.getFullYear() + 1);
  const dia = fechaActual.getDate().toString().padStart(2, '0');
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const anio = fechaActual.getFullYear();
  const fechaActualTexto= `${dia}/${mes}/${anio}`;

  const onSubmit = (data) => {      
    const informacionCotizacion = {
      newCliente: {
        nombre: informacionClienteSinCuenta.nombre,
        apellidoPaterno: informacionClienteSinCuenta.apellidoPaterno,
        apellidoMaterno: informacionClienteSinCuenta.apellidoMaterno,
        dni: informacionClienteSinCuenta.DNI
      },
      newAuto: {
        placa: informacionPlaca.placa,
        anhoFab: informacionAuto.anhoFabricacion,
        valorComercial: 19000,
        uso: "Particular",
        idModelo: informacionAuto.modelo.idModelo,
        idMarca: informacionAuto.marca.idMarca
      },
      newCotizacion: {
        tieneInsveh: informacionPlaca.poseeInspeccionVehicular === true ? 1 : 0,
        costoAdicional: monto,
        montoPrima: 40
      },
      listaDeIdCoberturas: listaDeIdCoberturas
    }
    crearCotizacion(informacionCotizacion)
    .then( respuesta => {
      if(parseInt(respuesta) === -1){
        alert("Error en la creacion de la cotizacion.");
      }else{
        console.log("Se creo la cotizacion:"+respuesta);
      }

    })
    .catch(error => {
      console.error('Error:', error);
    });
}

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
          <h3>Coberturas adicionales: </h3>
          {
            // Aca te deberia listar el array?? SI
            nombresCoberturas.map((nombresCoberturas, idx) => (
                <h5>{idx+1}. {nombresCoberturas} 14.00<br/></h5>
                
            ))
            
          }
          <h3>Total: {monto.toFixed(2)}</h3>
          <h5> <b>Esta cotización tiene vigencia hasta el día:  {fechaActualTexto}</b></h5>
        </div>
      </div>
      <br/>
      <div className="text-center">
            <Link to={"/cotizacion3"} state={{informacionClienteSinCuenta: informacionClienteSinCuenta,informacionPlaca: informacionPlaca, informacionAuto: informacionAuto}}>
              <button className="btnGeneral2" >Volver</button>
            </Link>

            <form onSubmit={handleSubmit(onSubmit)}>
              <button className="btnGeneral2" data-bs-toggle="modal" data-bs-target="#volverModal">Continuar</button>
            </form>
            
            
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
                  <button className="btnGeneral btnVolverCentrado" data-bs-dismiss="modal">Volver a la página principal</button>
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






