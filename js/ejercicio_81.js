
console.log("TALLER EJERCICIO 81")
// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.
function numeros_positivos(numeros) {
    let suma = 0;
    
    for (let numero of numeros) {
      if (numero > 0) {
        suma += numero;
      }
    }
    return suma;
  }
  let numeros = [1, 2, -3, 4, -5];
  let resultado = numeros_positivos(numeros);
  console.log("La suma de los números positivos es:", resultado);