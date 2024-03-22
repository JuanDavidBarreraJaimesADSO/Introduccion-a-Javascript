console.log("TALLER EJERCICIO 61")
// Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que
// imprima cual fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima
// nota de 100, cuantos obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60
let total_notas = parseInt(prompt("Ingrese la cantidad de notas de los alumnos:"));
let nota_alta = Infinity
let nota_baja = Infinity
let nota_maxima = 0;
let cantidadA = 0;
let cantidadB = 0;
let cantidadC = 0;
let cantidadD = 0;
for (let i = 0; i < total_notas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota del alumno ${i + 1}:`));
    if (nota > nota_alta) { nota_alta = nota; }
    if (nota < nota_baja) { nota_baja = nota; }
    if (nota === 100) {nota_maxima++;}
    if (nota >= 90) {cantidadA++; } 
    else if (nota >= 80) { cantidadB++;} 
    else if (nota >= 70) { cantidadC++; } 
    else if (nota >= 60) { cantidadD++;}
}
alert(`La nota más alta es: ${nota_alta}
La nota más baja es: ${nota_baja}
Cantidad de alumnos con nota máxima de 100: ${nota_maxima}
Cantidad de alumnos con calificación "a": ${cantidadA}
Cantidad de alumnos con calificación "b": ${cantidadB}
Cantidad de alumnos con calificación "c": ${cantidadC}
Cantidad de alumnos con calificación "d": ${cantidadD}`);