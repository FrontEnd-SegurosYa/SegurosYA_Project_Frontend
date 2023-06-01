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