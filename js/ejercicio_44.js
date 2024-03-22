console.log("TALLER EJERCICIO 43")
// Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe
// permitir la presencia de comillas y caracteres escapados.
const regex = /"([^"\\]|\\.)*"/g;