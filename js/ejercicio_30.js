console.log("TALLER EJERCICIO 29")
let examen1 = parseFloat(prompt("Ingrese la calificación del primer examen: ingrese la califacion de 1 a 5"));
let examen2 = parseFloat(prompt("Ingrese la calificación del segundo examen: ingrese la califacion de 1 a 5"));
let examen3 = parseFloat(prompt("Ingrese la calificación del tercer examen: ingrese la califacion de 1 a 5"));
let examen4 = parseFloat(prompt("Ingrese la calificación del cuarto examen: ingrese la califacion de 1 a 5" )); 
promedio = (examen1 + examen2 + examen3 + examen4) / 4
alert(`El promedio de los examenes equivale a ${promedio.toFixed(2)}`)