import './PlanesSOAT.css';
import React  from 'react';
import Plan from './Plan.js';
import { Link } from 'react-router-dom';

import plan1 from '../../img/plan1.png';
import plan2 from '../../img/plan2.png';
import plan3 from '../../img/plan3.png';
import plan4 from '../../img/plan4.png';
import { useNavigate } from "react-router-dom";
import { useForm, Controller} from 'react-hook-form';
import imagenTrabajando from '../../img/hombresTrabajando.png'
import { useState, useEffect } from "react";

//Utiles
import { obtenerPlanes } from './funcionesExtras'; 

import planesSoatJSON from './planesSOAT.json';


// informacionCliente contiene: datosCliente,informacionPlaca,informacionAuto

// const PlanesSOAT = ({ title, pago, costo, coberturas, asistencias, beneficios, image }) => {
const PlanesSOAT = ({informacionClienteSinCuenta,informacionPlaca,informacionAuto,planSeleccionado}) => {
  const fotosPlanes = [plan1,plan2,plan3,plan4];
  
  const [listaPlanes,setListaPlanes] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [montoSeleccionado, setMontoSeleccionado] = useState(0.0);
  const navigate = useNavigate();
  
  const {handleSubmit,formState: { errors } ,setValue} = useForm();

  const handleClick = (cardId,precioPlan) => {
    setSelectedCard(cardId);
    setMontoSeleccionado(precioPlan);
    console.log("se seteo: "+cardId+" "+precioPlan);
  };

  useEffect(() => {
    obtenerPlanes()
    .then(listPlanes => {
        setListaPlanes(listPlanes);
        if(planSeleccionado){
          console.log("volvio "+planSeleccionado.idPlan+" "+planSeleccionado.monto);
          handleClick(planSeleccionado.idPlan,planSeleccionado.monto);
        }
      }
    ).catch( error => {
        console.error('Error:', error);
      }      
    );
  }, []);

  const onSubmit = (data) => {
    // let monto;
    // if (selectedCard === 1){
    //   monto = 50;
    // }
    // else if (selectedCard === 2){
    //   monto = 100;
    // }
    // else if (selectedCard === 3){
    //   monto = 180;
    // }
    if(selectedCard === null){
      alert("Seleccione un plan.");
      return;
    }

    const infoState = {informacionClienteSinCuenta: informacionClienteSinCuenta, informacionPlaca: informacionPlaca,informacionAuto : informacionAuto, planSeleccionado: {idPlan: selectedCard, monto: montoSeleccionado}};
    navigate("/soat5", {state: infoState});
    
    
    // alert(`departamento: ${ubicacion.departamento}, provincia: ${ubicacion.provincia}, distrito: ${ubicacion.distrito}`);   
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="contenedor-plan">
          {/* <ul>
            {listaPlanes && listaPlanes.map((plan) => (
                <li key={plan.idPlan} value={plan.idPlan}>
                    {plan.nombre}
                </li>
            ))}
            <li>
              {listaPlanes.length}
            </li>
          </ul> */}
          
          {listaPlanes && listaPlanes.map((plan,index) => (
                <Plan
                key={plan.idPlan}
                id={plan.idPlan}
                selected={selectedCard === plan.idPlan}
                onClick={() => handleClick(plan.idPlan,plan.precio)}
                title={plan.nombre}
                pago="Pago anual"
                costo={plan.precio.toString()}
                coberturas={['Default']}
                asistencias={['Default']}
                beneficios={['Default']}
                image={fotosPlanes[index]}
                />
            ))}

          {/* <Plan
          id={1}
          selected={selectedCard === 1}
          onClick={() => handleClick(1)}
          title="Básico"
          pago="Pago anual"
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
          pago="Pago anual"
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
          pago="Pago anual"
          costo="S/180.00"
          coberturas={['Coberturas por ley: Todas incluídas']}
          asistencias={['Servicio de grúa','Cambio de neumático', 'Suministro de combustible','Carga de batería','Cerrajería vial']}
          beneficios={['20% de Dscto. en planchado y pintura','25% de Dscto. en llantas y aros','15% de Dscto. en venta de baterias']}
          image={plan3}
          /> */}
      </div>
      <div className ="botones text-center">
          <div className="btn-group" role="group" aria-label="Botones con separación">
              <Link to={"/soat3"} state={{informacionClienteSinCuenta: informacionClienteSinCuenta, informacionPlaca: informacionPlaca, informacionAuto: informacionAuto,planSeleccionado: planSeleccionado}}>
                  <button type="button" className="btnGeneral2 mx-3">Volver</button>
              </Link>   
              {/* <button type="submit" className='btnGeneral mx-3'  data-bs-toggle="modal" data-bs-target="#trabajandoModal">Continuar</button>      */}
              <button type="submit" className='btnGeneral mx-3'>Continuar</button>   
          </div>
      </div>
      {/* <div className="modal fade " id="trabajandoModal" tabIndex="-1" aria-labelledby="trabajandoModalLabel" aria-hidden="true">
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
      </div> */}
    </form>
     
  );
};

export default PlanesSOAT;