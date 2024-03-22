/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 57")
// Consideramos la asignación de una calificación literal a un rango dado de
// calificaciones numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10
// Asignar la calificación de A equivale a Excelente 8.1 a 9 Asignar la calificación de A
// equivale a Muy bien 7.5 a 8 Asignar la calificación de A equivale a Bien Menor a 7.5
// asignar la calificación de NA No Aprobado.
let calificacion_numerica = parseFloat(prompt("Ingrese la calificación numérica:"));
let calificacion_literal = ("");
if (calificacion_numerica >= 9.1 && calificacion_numerica <= 10) {
    calificacion_literal = "Excelente";
} else if (calificacion_numerica >= 8.1 && calificacion_numerica < 9) {
    calificacion_literal = "Muy bien";
} else if (calificacion_numerica >= 7.5 && calificacion_numerica < 8) {
    calificacion_literal = "Bien";
} else {
    calificacion_literal = "No Aprobado";
}
alert(`La calificación literal para la calificación numérica ${calificacion_numerica} es: ${calificacion_literal}`);