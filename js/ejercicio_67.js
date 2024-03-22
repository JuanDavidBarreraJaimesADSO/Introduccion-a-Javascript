console.log("TALLER EJERCICIO 66")
// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés
// anual y el número de años, y muestre por pantalla el capital obtenido en la
// inversión cada año que dura la inversión.
let numero_invertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interes_anual = parseFloat(prompt("Ingrese el interés anual (%):"));
let numero_años = parseInt(prompt("Ingrese el número de años:"));
for (let i = 1; i <= numero_años; i++) {
    let capital = numero_invertir * Math.pow((1 + interes_anual / 100), i);
  alert(`Capital obtenido en el año ${i}: ${capital.toFixed(2)}`);
}