/////////////////////////////////////////////////////////////////////////////////////////////
// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
// al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
// tributar o no
console.log("TALLER EJERCICIO 5");
let edad_eje5 = prompt("Ingrese su edad")
let ingreso_eje5 = prompt("Ingrese los ingresos mensuales")
if (edad_eje5 >= 16 && ingreso_eje5 >= 1000) {
  alert("El usuario se encuentra Habilitado para tributar el impuesto ")
} else alert("El usuario No se encuentra Habilitado para tributar el impuesto ")