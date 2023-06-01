import './PlanesSOAT.css';
import React , { useState } from 'react';
import Plan from './Plan.js';
import { Link } from 'react-router-dom';

import plan1 from '../../img/plan1.png';
import plan2 from '../../img/plan2.png';
import plan3 from '../../img/plan3.png';
import imagenTrabajando from '../../img/hombresTrabajando.png'

import planesSoatJSON from './planesSOAT.json';


// informacionCliente contiene: datosCliente,informacionPlaca,informacionAuto

// const PlanesSOAT = ({ title, pago, costo, coberturas, asistencias, beneficios, image }) => {
const PlanesSOAT = ({informacionClienteSinCuenta,informacionPlaca,informacionAuto}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <>
      <div className="contenedor-plan">
          <Plan
          id={1}
          selected={selectedCard === 1}
          onClick={() => handleClick(1)}
          title="Básico"
          pago="Pago anual desde"
          costo="S/50.00"
          coberturas={['Coberturas por ley: Todas incluídas']}
          asistencias={['Asistencias adicionales no están incluídas']}
          beneficios={['20 % de Dscto. en grúas']}
          image={plan1}
          />
          <Plan
          id={2}
          selected={selectedCard === 2}
          onClick={() => handleClick(2)}
          title="Intermedio"
          pago="Pago anual desde"
          costo="S/100.00"
          coberturas={['Coberturas por ley: Todas incluídas']}
          asistencias={['Cambio de neumático', 'Carga de batería']}
          beneficios={['30 % de Dscto. en servicios de mantenimiento preventivo','15% de Dscto. en planchado y pintura']}
          image={plan2}
          />
          <Plan
          id={3}
          selected={selectedCard === 3}
          onClick={() => handleClick(3)}
          title="Full"
          pago="Pago anual desde"
          costo="S/180.00"
          coberturas={['Coberturas por ley: Todas incluídas']}
          asistencias={['Servicio de grúa','Cambio de neumático', 'Suministro de combustible','Carga de batería','Cerrajería vial']}
          beneficios={['20% de Dscto. en planchado y pintura','25% de Dscto. en llantas y aros','15% de Dscto. en venta de baterias']}
          image={plan3}
          />
      </div>
      <div className ="botones text-center">
          <div className="btn-group" role="group" aria-label="Botones con separación">
              <Link to={"/soat3"} state={{informacionClienteSinCuenta: informacionClienteSinCuenta, informacionPlaca: informacionPlaca, informacionAuto: informacionAuto}}>
                  <button type="button" className="btnGeneral2 mx-3">Volver</button>
              </Link>   
              <button type="submit" className='btnGeneral mx-3'  data-bs-toggle="modal" data-bs-target="#trabajandoModal">Continuar</button>     
          </div>
      </div>
      <div className="modal fade " id="trabajandoModal" tabIndex="-1" aria-labelledby="trabajandoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modalMensajes">
              <img src={imagenTrabajando} className="img-fluid check" alt = "hombresTrabajando"/>
              <div className="modal-header">
                <h3 className="modal-title Textos" id="volverModalLabel"> <b>Disculpe las molestias</b></h3>
              </div>
              <div className="modal-body Textos" >
                <h4>Estamos trabajando en esta sección</h4> 
              </div>
              <div className="modal-footer">
                  <button className="btnGeneral btnVolverCentrado" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
        </div>
      </div>
    </>

    
     
  );
};

export default PlanesSOAT;