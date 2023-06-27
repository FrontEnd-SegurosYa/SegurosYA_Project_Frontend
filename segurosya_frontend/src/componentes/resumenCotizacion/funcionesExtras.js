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


export function pruebaEnvioCorreoArchivoAdjunto (archivo,destino,asunto,contenido) {
    //Utiles
    const formData = new FormData();
    formData.append('file', archivo, 'Cotizacion.pdf');
    formData.append('to',destino);
    formData.append('subject',asunto);
    formData.append('content',contenido);

    return fetch(LINKSERVER+"/api/cotizacion/envioCorreo", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('File upload failed');
        }else{
            return response.text();
        }            
    })
    .catch(error => {
        console.error('Error Uploading File:', error);
        throw error;
    });
}
