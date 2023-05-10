import React , { useState }from 'react';
import './Plan.css'; // Importa el archivo CSS para estilizar la tarjeta

const Plan = ({ title, pago, costo, coberturas, asistencias, beneficios, image }) => {

    const planes = document.getElementsByClassName('plan');

    for (let i = 0; i < planes.length; i++) {
      planes[i].addEventListener('click', function() {
        // Eliminar la clase "clicked" de todos los elementos
        for (let j = 0; j < planes.length; j++) {
          planes[j].classList.remove('clicked');
        }

        // Agregar la clase "clicked" solo al elemento actual
        this.classList.add('clicked');
      });
    }
    
    return (
        <div className="plan">
          <img src={image} alt={title} />
          <div className="plan-content">
            <h2 class="nombre"><b>{title}</b></h2>
            <h6><b>{pago}</b></h6>
            <h2 class="azulos"><b>{costo}</b></h2>
            <p class="azulos"><b>Coberturas</b></p>
            <ul>
                {coberturas.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p class="azulos"><b>Asistencias</b></p>
            <ul>
                {asistencias.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p class="azulos"><b>Beneficios</b></p>
            <ul>
                {beneficios.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      );
};

export default Plan;
