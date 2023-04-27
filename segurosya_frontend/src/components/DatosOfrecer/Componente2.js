import React from 'react'
import Componente3 from './Titulo/Componente3';
import Componente4 from './Titulo/Componente4';
import Componente5 from './Titulo/Componente5';

const Componente2 = () => {
  return (
    <>
    <div className='bloque-datos'>
        <Componente3 titulo='¿Qué te ofrecemos?'/>
        <div className='lista-horizontal'>
            <Componente4 titulo='Protegemos tu vehiculo' 
            descripcion='Si sufres algún robo, daño o accidente de ocupantes con tu vehículo, te indemnizamos.'/>
            <Componente4 titulo='Asistencias y beneficios' 
            descripcion='Grua, chofer de reemplazo, auxilio mecánico, car wash y más asistencias gratis.'/>
            <Componente4 titulo='Atención de calidad' 
            descripcion='Más del 95% de nuestros clientes están satisfechos con las calidad de servicio.'/>
        </div>
    </div>
    <div className='bloque-datos'>
        <Componente3 titulo='¡Tenemos estas coberturas!'/>
        <div className='lista-horizontal'>
            <Componente5 titulo='Protegemos tu vehiculo' 
            costo='10'/>
            <Componente5 titulo='Protegemos tu vehiculo' 
            costo='10'/>
            <Componente5 titulo='Protegemos tu vehiculo' 
            costo='5'/>
        </div>
    </div>
    <div>
        <Componente3 titulo='¡Y otras coberturas más!'/>
    </div>
    </>
  )
}

export default Componente2;