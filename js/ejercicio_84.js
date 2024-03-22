console.log("TALLER EJERCICIO 84")
//   Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
//   uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.
function inverso(numeros) {
    let inversos = [];
  
    for (let i = 0; i < numeros.length; i++) {
      let numero = numeros[i];
      if (numero > 0) {
        inversos.push(-numero);
      } else if (numero < 0) {
        inversos.push(-numero);
      } else {
        inversos.push(numero);
      }
    }
    return inversos;
  }
  let conjunto = [1, -2, 3, -4, 0];
  let inversos = inverso(conjunto);
  console.log("Inverso aditivo de cada número:", inversos);