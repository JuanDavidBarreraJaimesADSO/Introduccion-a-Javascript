///////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 82")
function suma_binario(num1, num2) {
    let binario1 = num1.toString(2);      //binarios
    let binario2 = num2.toString(2);
    let sumaDecimal = parseInt(binario1, 2) + parseInt(binario2, 2);
    return sumaDecimal.toString(2);
  }
  let resultado = sumaBinaria(5, 3);
  console.log("La suma en binario es:", resultado);