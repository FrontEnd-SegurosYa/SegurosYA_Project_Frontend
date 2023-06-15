import { LINKSERVER } from '../../utiles/constantes.js';

export function obtenerPlanes() {
    return fetch(LINKSERVER+"/api/plan/listar")
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
            }
        );
}

export function obtenerBeneficioXPlan(idPlan) {
    return fetch(LINKSERVER+"/api/beneficio/listar/beneficiosxplan", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({idPlan: idPlan})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
            }
        );
}

export function obtenerServicioXPlan(idPlan) {
    return fetch(LINKSERVER+"/api/servicio/listar/"+String(idPlan), {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({idPlan: idPlan})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
            }
        );
}