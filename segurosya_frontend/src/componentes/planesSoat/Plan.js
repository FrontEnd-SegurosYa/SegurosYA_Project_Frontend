import React, { useEffect, useState } from 'react';
import './Plan.css';
import { obtenerBeneficioXPlan, obtenerServicioXPlan } from './funcionesExtras';

const Plan = ({ id, selected, onClick, title, pago, costo, servicios, beneficios, image }) => {
  const [hovered, setHovered] = useState(false);
  const [listaServicios, setListaServicios] = useState([]);
  const [listaBeneficios, setListaBeneficios] = useState([]);

  //cambiar el mouse en el hover
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    obtenerBeneficioXPlan(id)
    .then( nuListaBeneficios => {
      setListaBeneficios(nuListaBeneficios);

      obtenerServicioXPlan(id)
      .then(nuListaServicios => {
        setListaServicios(nuListaServicios);
      })
      .catch();
    })
    .catch();

  },[] );

  return (
        <div
        className={`plan ${selected ? 'clicked' : ''} ${hovered ? 'hovered' : ''}`}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <img src={image} alt={title} />
          <div className="plan-content">
            <h2 className="nombre"><b>{title}</b></h2>
            <h6><b>{pago}</b></h6>
            <h2 className="azulos"><b>{costo}</b></h2>
            
            <p className="azulos"><b>Servicios</b></p>
            <ul>
                {listaServicios.map((item, index) => (
                    <li key={index}>{item.nombre}: {item.descripcion}</li>
                ))}
            </ul>
            <p className="azulos"><b>Beneficios</b></p>
            <ul>
                {listaBeneficios.map((item, index) => (
                    <li key={index}>{item.nombre}: {item.descripcion}</li>
                ))}
            </ul>
          </div>
        </div>
      );
};

export default Plan;

