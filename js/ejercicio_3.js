/////////////////////////////////////////////////////////////////////////////////////////////
// Escribir un programa que pida al usuario dos números y muestre por pantalla su
// división, si el divisor es cero el programa debe mostrar un error, se debe manejar
// mediante excepciones y el mensaje debe ser personalizado.
// console.log("");
console.log("TALLER EJERCICIO 3");
let numero1_ej3 = prompt("Primer numero");
let numero2_ej3 = prompt("Segundo numero");
procedimiento_ej3 = (numero1_ej3 / numero2_ej3);
try {
  if (numero2_ej3 == 0) {
    throw "Error: No se pueden dividir entre 0";
  }
  console.log(procedimiento_ej3);
} catch (error) {
  console.error(error);
}