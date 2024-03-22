/////////////////////////////////////////////////////////////////////////////////////////////
// Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
// mayor o menor de edad, el programa debe validar que solo se puedan ingresar números positivos.
console.log("TALLER JAVASCRIPT");
console.log("");
console.log("TALLER EJERCICIO 1");
let edad_ej1 = prompt("Edad");
if (edad_ej1 >= 0 && edad_ej1 <= 17) alert("El usuario en menor de edad");
else if (edad_ej1 >= 18) alert("El usuario es mayor de edad");
else alert("Error solo se deben utilizar numeros positivos");