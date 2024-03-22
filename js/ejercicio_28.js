console.log("TALLER EJERCICIO 27")
let parcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial:"));
let parcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial:"));
let parcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial:"));
let examen_final = parseFloat(prompt("Ingrese la calificación del examen final:"));
let trabajo_final = parseFloat(prompt("Ingrese la calificación del trabajo final:"));
let promedio_parcial = (parcial1 + parcial2 + parcial3) / 3;
let promedio_final = (promedio_parcial * 0.55) + (examen_final * 0.30) + (trabajo_final * 0.15);
alert(`Promedio final de la materia de Algoritmos: ${promedio_final.toFixed(2)}`);