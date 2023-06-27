//Importar variables
import { LINKSERVER } from '../../utiles/constantes.js';

export function consultarDNI(dniBuscado) {
    return fetch(LINKSERVER+"/api/cliente/buscar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({dni: dniBuscado})
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

export function crearCliente(nombre,apellidoPaterno,apellidoMaterno,dni) {
    return fetch(LINKSERVER+"/api/cliente/crear", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre: nombre, apellidoPaterno: apellidoPaterno, apellidoMaterno: apellidoMaterno, dni: dni})
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

export function crearContacto(idCliente,telefono,direccion,correo) {
    return fetch(LINKSERVER+"/api/contacto/insertar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({idCliente: idCliente, telefono: telefono, direccion: direccion,correo: correo})
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


export function crearAuto(placa,anhoFab,valorComercial,uso,idCliente,idModelo,idMarca){
    return fetch(LINKSERVER+"/api/auto/insertar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            placa: placa,
            anhoFab: anhoFab,
            valorComercial: valorComercial,
            uso: uso,
            idCliente: idCliente,
            idModelo: idModelo,
            idMarca: idMarca
        })
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

export function crearPoliza(
        fechaInicio,
        fechaFin,
        fechaEmision,
        horaEmision,
        idPlan,
        idAuto,
        idCliente,
        idModelo,
        idMarca,
        idDocumento
    ){
    return fetch(LINKSERVER+"/api/poliza/creaPolizaCONCliente", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            fechaEmision: fechaEmision,
            horaEmision: horaEmision,
            idPlan: idPlan,
            idAuto: idAuto,
            idCliente: idCliente,
            idModelo: idModelo,
            idMarca: idMarca,
            idDocumento: idDocumento
        })
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
    formData.append('file', archivo, 'SOAT.pdf');
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
