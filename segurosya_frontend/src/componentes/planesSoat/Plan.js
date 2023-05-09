import React from 'react';
import './Plan.css'; // Importa el archivo CSS para estilizar la tarjeta

const Plan = ({ title, pago, costo, coberturas, asistencias, image }) => {
    return (
        <div className="plan">
          <img src={image} alt={title} />
          <div className="plan-content">
            <h2 className="nombre"><b>{title}</b></h2>
            <h6><b>{pago}</b></h6>
            <h2 className="azulos"><b>{costo}</b></h2>
            <p className="azulos"><b>Coberturas</b></p>
            <ul>
                {coberturas.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="azulos"><b>Asistencias</b></p>
            <ul>
                {asistencias.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      );
};

export default Plan;
