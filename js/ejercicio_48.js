console.log("TALLER EJERCICIO 47")
// Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o si son iguales.
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Ingresa el tercer número:"));
let numero_mayor = numero1;
if (numero2 > numero_mayor) {
    numero_mayor = numero2;
}
if (numero3 > numero_mayor) {
    numero_mayor = numero3;
}
alert(`El numero que es mayor de las tres opciones es igual: ${numero_mayor}`);