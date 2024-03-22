///////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 79")
// Crea una función de nos devuelva el elemento mayor de un arreglo de números.
alert("Encontrado el numero mayor")
function numero_mayor(numero) {
  let mayor = numero[0];
  for (let i = 1; i < numero.length; i++) {
    if (numero[i] > mayor) {
      mayor = numero[i];
    }
  }
}
const numero = [10, 20, 30, 54, 78, 91, 1];
const mayor = numero_mayor(numero);
alert(`El elemento mayor del arreglo es: ${mayor}`);