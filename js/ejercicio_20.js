console.log("TALLER EJERCICIO 19")
// Escribir un programa que calcule el área y el volumen de un cilindro
let radio = parseFloat(prompt("Indique el radio de la circunferencia"));
const pi = 3.1416;
const longitud = 2 * pi * radio;
const area = pi * Math.pow(radio, 2);
alert(`La longitud de la circunferencia correspondiente es igual a ${longitud.toFixed(2)} unidades.\nEl área de la circunferencia correspondiente a su radio de valor ${radio} unidades es ${area.toFixed(2)} unidades cuadradas.`);