console.log("TALLER EJERCICIO 33")
// Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.
let edad_madre = parseInt(prompt("Ingrese la edad de la madre en el momento actual:"));
let edad_hijo = parseInt(prompt("Ingrese la edad actual del hijo"));
let edad_madre_nacimiento = edad_madre - edad_hijo;
alert(`La edad de la madre en el momento del nacimiento del hijo fue de ${edad_madre_nacimiento} años.`);