import React, { Fragment } from 'react'
import "./DatosCarro.css";
import '../../index.css'
import carro from '../datosCotizacion/Carro.png'
import { Link } from 'react-router-dom';

export const DatosCarro = () => {
  return (
    <>
      <div className='DatosCarro'>
        <div className='containerD'>
          <p className='Subtitulo'>Ingresa los datos de tu auto para cotizar</p>
          <div className='Form'>
            <div className='Opciones'>
              <p className='SubsubTitulo'>Marca</p>
              <select className='Resultado'>
                <option>Toyota</option>
                <option>Honda</option>
              </select>
              
              <p className='SubsubTitulo'>Modelo</p>
              <select className='Resultado'>
                <option>Corolla</option>
                <option>Civic</option>
              </select>
              <p className='SubsubTitulo'>Año de fabricacion</p>
              <select className='Resultado'>
                <option>1999</option>
                <option>2000</option>
              </select>
              <p className='SubsubTitulo'>Número de asientos</p>
              <select className='Resultado'>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
        <div className='ImagenCarro'>
          <img className='CarroCotiza' src={carro}/>
        </div>
      </div>
      <div className = "botones text-center">
        <div class="btn-group" role="group" aria-label="Botones con separación">
          <Link to={"/cotizacion1"}>
            <button type="button" class="btnGeneral2 mx-3">Volver</button>
          </Link>
          <Link to={"/cotizacion3"}>
            <button type="button" class="btnGeneral mx-3">Continuar</button>
          </Link>
          </div>
      </div>
    </>
  )
}

export default DatosCarro;