import React from 'react'
import "./InfoCotizaciones.css";
import '../../index.css'
import TituloBloques from './subComponentes/TituloBloques.js';
import InfoBloque from './subComponentes/InfoBloque.js';
import InfoCobertura from './subComponentes/InfoCobertura.js';

const InfoCotizaciones = () => {
  return (
    <div className='InformacionCotizaciones'>
        <div className='bloque-datos'>
            <br></br>
            <TituloBloques titulo='¿Qué te ofrecemos?'/>
            <div className='lista-horizontal'>
                <div className = "contenedorCotizacion1">
                    <InfoBloque titulo='Protegemos tu vehiculo' 
                    descripcion='Si sufres algún robo, daño o accidente de ocupantes con tu vehículo, te indemnizamos.'/>
                </div>
                <div className = "contenedorCotizacion1">
                    <InfoBloque titulo='Asistencias y beneficios' 
                    descripcion='Grua, chofer de reemplazo, auxilio mecánico, car wash y más asistencias gratis.'/>
                </div>
                <div className = "contenedorCotizacion1">
                    <InfoBloque titulo='Atención de calidad' 
                    descripcion='Más del 95% de nuestros clientes están satisfechos con las calidad de servicio.'/>
                </div>
            </div>
        </div>
        <br/>
    </div>
  )
}


export default InfoCotizaciones;