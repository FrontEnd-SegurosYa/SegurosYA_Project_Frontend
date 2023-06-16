//Importar variables
import { LINKSERVER } from '../../utiles/constantes.js';

export function crearCotizacion(informacionCotizacion) {
    return fetch(LINKSERVER+"/api/cotizacion/creaCotizacionSINCliente", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(informacionCotizacion)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
            return response.text();
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
            }
        );
}