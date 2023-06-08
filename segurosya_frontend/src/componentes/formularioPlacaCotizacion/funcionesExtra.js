//Importar variables
import { LINKSERVER } from '../../utiles/constantes.js';

export function procesarPlaca(str) {
    if (str.length === 6) {
        // ABC123
        // ab4456
        var firstThree = str.substr(0, 3).toUpperCase();
        return firstThree + '-' + str.substr(3);
    } else {
        //abc-456
        //a4r-963
        var firstThree = str.substr(0, 3).toUpperCase();
        return firstThree + '-' + str.substr(4);
    }
  }

export function buscarPlaca(placa) {
    return fetch(LINKSERVER+"/api/auto/buscar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({placa: placa})
    })
        .then((response) => {
        if (response.ok) {
            return response.text();
            // if(response.text().length !== 0){
            //     return true;
            // }else{
            //     return false;
            // }
        } else {
            return false;
        }
        })
        .catch((error) => {
        // Network or request error
        console.error("Request error:", error);
        return false;
        });
}

export function buscarPlaca2(placa) {
    return fetch(LINKSERVER+"/api/auto/buscar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({placa: placa})
    })
        .then((response) => {
        if (response.ok) {
            return response.text();
        } else {
            return false;
        }
        })
        .catch((error) => {
        // Network or request error
        console.error("Request error:", error);
        });
}
    