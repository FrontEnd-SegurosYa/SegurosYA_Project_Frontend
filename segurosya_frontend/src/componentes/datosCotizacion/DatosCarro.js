import React, { Fragment } from 'react'
import "./DatosCarro.css";
import '../../index.css'
import carro from '../datosCotizacion/Carro.png'

export const DatosCarro = () => {
  return (
      <div className='DatosCarro'>
        <div className='container'>
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
        <div className='Imagen'>
          <img className='CarroCotiza' src={carro}/>
        </div>
      </div>
  )
}

export default DatosCarro;