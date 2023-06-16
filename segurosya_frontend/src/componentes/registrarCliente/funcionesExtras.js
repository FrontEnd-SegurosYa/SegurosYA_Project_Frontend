//Importar variables
import { LINKSERVER } from '../../utiles/constantes.js';

export function obtenerDepartamentos() {
    return fetch(LINKSERVER+"/api/departamento/listar")
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

export function obtenerDistritos() {
    return fetch(LINKSERVER+"/api/distrito/listar")
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

export function buscarProvinciasDep(idDepartamento) {
    return fetch(LINKSERVER+"/api/provincia/buscarXDepartamento", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({idDepartamento: idDepartamento})
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

export function buscarDistritosProv(idProvincia) {
    return fetch(LINKSERVER+"/api/distrito/buscarXProvincia", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({idProvincia: idProvincia})
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

export function crearContacto(idCliente,telefono,direccion) {
    return fetch(LINKSERVER+"/api/contacto/insertar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({idCliente: idCliente, telefono: telefono, direccion: direccion})
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

export function crearCuenta(idCliente,correo,contrasenha) {
    return fetch(LINKSERVER+"/api/cuenta/insertar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({idCliente: idCliente, correo: correo, contrasenha: contrasenha})
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

export function iniciarSesion(correo,contrasenha) {
    return fetch(LINKSERVER+"/api/cuenta/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({correo: correo, contrasenha: contrasenha})
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