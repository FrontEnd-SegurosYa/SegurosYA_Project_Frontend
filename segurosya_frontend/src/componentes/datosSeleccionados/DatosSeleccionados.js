import React, { Fragment } from 'react'
import "./DatosSeleccionados.css";
import '../../index.css'
import carro from '../datosSeleccionados/CarroSeguro.png'

export const DatosSeleccionados = () => {
  return (
      <div className='contenedor'>
        <div className='infoPersonaCoche'>
            <div>
                <p>Sobre ti:</p>
                <ul>
                    <li>William Levy Gutierrez</li>
                    <li>william.levy@pucp.edu.pe</li>
                    <li>+51 993 912 114</li>
                </ul>
            </div>
            <div>
                <p>Sobre el vehiculo:</p>
                <ul>
                    <li>Marca, modelo y año</li>
                        <p> - Fiat 500 2015</p>
                    <li>Número de asientos</li>
                        <p> - 4</p>
                    <li>Uso</li>
                        <p> - Particular</p>
                </ul>
                <p>Seguro Base: S/. 40.00</p>
            </div>
        </div>
        <div className='Imagen'>
          <img className='CarroCotiza' src={carro}/>
        </div>
      </div>
  )
}

export default DatosSeleccionados;