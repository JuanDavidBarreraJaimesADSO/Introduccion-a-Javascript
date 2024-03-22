///////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 78")
// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retorna ‘aloH’.
function palabra_invertida(palabra) {
  let invertir = "";
  for (let i = palabra.lenght - 1; i >= 0; i--) {
    invertir += palabra[i];
  }
  return invertir;
}
let palabra = prompt("Ingrese la palabra a invertir")