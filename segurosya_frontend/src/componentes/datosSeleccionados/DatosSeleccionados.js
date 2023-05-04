import React, { Fragment } from 'react'
import "./DatosSeleccionados.css";
import '../../index.css'
import carro from '../datosSeleccionados/CarroSeguro.png'
import { Link } from 'react-router-dom';

export const DatosSeleccionados = () => {
  return (
    <>
      <br/>
      <div className='contenedorD'>
        <div className='infoPersonaCoche'>
            <div>
              <br/>
                <p><b>Sobre ti:</b></p>
                <ul>
                    <li>William Levy Gutierrez</li>
                    <li>william.levy@pucp.edu.pe</li>
                    <li>+51 993 912 114</li>
                </ul>
            </div>
            <div class="border-top my-3 borde"></div>
            <div>
                <p><b>Sobre el vehiculo:</b></p>
                <ul>
                    <li><b>Marca, modelo y año</b></li>
                        <p> - Fiat 500 2015</p>
                    <li><b>Número de asientos</b></li>
                        <p> - 4</p>
                    <li><b>Uso</b></li>
                        <p> - Particular</p>
                </ul>
                <p><b>Seguro Base: S/. 40.00</b></p>
            </div>
        </div>
        <div className='Imagen'>
          <img className='CarroCotiza' src={carro}/>
        </div>
      </div>
      <div className = "botones text-center">
        <div class="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/cotizacion2"}>
            <button type="button" class="btnGeneral2 mx-3">Volver</button>
          </Link>
          <Link to={"/cotizacion4"}>
            <button type="button" class="btnGeneral mx-3">Continuar</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DatosSeleccionados;