///////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 86")
function convertirATexto(numero) {
    switch (numero) {
      case 0:
        return "cero";
      case 1:
        return "uno";
      case 2:
        return "dos";
      case 3:
        return "tres";
      case 4:
        return "cuatro";
      case 5:
        return "cinco";
      default:
        return "Número fuera de rango";
    }
  }
  console.log(convertirATexto(0));
  console.log(convertirATexto(2));
  console.log(convertirATexto(5));
  console.log(convertirATexto(7));