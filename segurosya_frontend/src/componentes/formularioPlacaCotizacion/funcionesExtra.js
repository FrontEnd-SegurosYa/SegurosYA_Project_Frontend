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
    return fetch("http://3.89.34.248:8080/api/auto/buscar", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({placa: placa})
    })
        .then((response) => {
        if (response.ok) {
            return response.json()
            .then((jsonData) => {
                // Response JSON parsing successful
                return true;
            })
            .catch((error) => {
                // JSON parsing error
                console.error("JSON parsing error:", error);
                return false;
            });
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
    