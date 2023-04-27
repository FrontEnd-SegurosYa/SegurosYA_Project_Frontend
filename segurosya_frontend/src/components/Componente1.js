import React from 'react'
import carro from '../components/Carro.png'

export const Componente1 = () => {
  return (
    <div className='DatosCarro'>
      <div className='Form'>
        <p className='Subtitulo'>Ingresa los datos de tu auto para cotizar</p>
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
          <p className='SubsubTitulo'>Número de asientos</p>
          <select className='Resultado'>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div className='Imagen'>
        <img className='CarroCotiza' src={carro}/>
      </div>
    </div>
  )
}

