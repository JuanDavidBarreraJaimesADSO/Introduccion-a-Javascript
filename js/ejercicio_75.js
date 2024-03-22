/////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 77")
// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado en la consola.
// let palabra = prompt("Ingrese una palabra para determinar cuantas silabas tiene")
function palabra_silabas(palabra) {
  const contar_silabas = /([aeiouáéíóú])(?:[aeiouyáéíóú]?
  const silabas = palabra.match(contar_silabas);
  const total_silabas = silabas ? silabas.length : 0;
  return total_silabas;
}
let total_silabas = palabra_silabas(palabra);
alert(`La palabra "${palabra}" tiene ${total_silabas} sílabas.`);
///////////////////////////////////////////////////////