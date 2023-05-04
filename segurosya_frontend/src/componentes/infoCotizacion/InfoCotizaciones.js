import React from 'react'
import "./InfoCotizaciones.css";
import '../../index.css'
import TituloBloques from './subComponentes/TituloBloques.js';
import InfoBloque from './subComponentes/InfoBloque.js';
import InfoCobertura from './subComponentes/InfoCobertura.js';

const InfoCotizaciones = () => {
  return (
    <div className='blanco'>
        <div className='bloque-datos'>
            <br/>
            <TituloBloques titulo='¿Qué te ofrecemos?'/>
            <div className='lista-horizontal'>
                <InfoBloque titulo='Protegemos tu vehiculo' 
                descripcion='Si sufres algún robo, daño o accidente de ocupantes con tu vehículo, te indemnizamos.'/>
                <InfoBloque titulo='Asistencias y beneficios' 
                descripcion='Grua, chofer de reemplazo, auxilio mecánico, car wash y más asistencias gratis.'/>
                <InfoBloque titulo='Atención de calidad' 
                descripcion='Más del 95% de nuestros clientes están satisfechos con las calidad de servicio.'/>
            </div>
        </div>
        <div className='bloque-datos'>
            <TituloBloques titulo='¡Tenemos estas coberturas!'/>
            <div className='lista-horizontal'>
                <InfoCobertura titulo='Protegemos tu vehiculo' 
                costo='10'/>
                <InfoCobertura titulo='Protegemos tu vehiculo' 
                costo='10'/>
                <InfoCobertura titulo='Protegemos tu vehiculo' 
                costo='5'/>
            </div>
        </div>
        <div>
            <TituloBloques titulo='¡Y otras coberturas más!'/>
        </div>
    </div>
  )
}

export default InfoCotizaciones;