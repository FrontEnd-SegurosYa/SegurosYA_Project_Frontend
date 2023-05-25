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