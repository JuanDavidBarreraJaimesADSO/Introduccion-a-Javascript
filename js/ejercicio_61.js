console.log("TALLER EJERCICIO 60")
// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de
// cursos que lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso,
// pero si la cantidad de cursos es mayor que 6 el pago será únicamente de
// $1.200.000.
let total_cursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));
let total = 0;
if (total_cursos <= 6) {
    total = total_cursos * 2000000; 
} else {
    total = total_cursos * 1200000; 
}
alert(`El costo total de los cursos es: $${costoTotal.toLocaleString()}`);