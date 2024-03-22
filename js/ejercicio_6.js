/////////////////////////////////////////////////////////////////////////////////////////////
// los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
// y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
// M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
// un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
// grupo al que corresponde
console.log("TALLER EJERCICIO 6");
let nombre_eje6 = prompt("Ingrese el nombre del alumno");
let sexo_eje6 = prompt("Ingrese el sexo del alumno M o F");
let i_nombre_eje6 = nombre_eje6.charAt(0).toUpperCase
if (sexo_eje6 === "F") {
  if (i_nombre_eje6 < "M") {
    grupo_eje6 = "A"
  } else {
    grupo_eje6 = "B"
  }
}
alert(`El alumno ${nombre_eje6} pertenece al grupo ${grupo_eje6}`)