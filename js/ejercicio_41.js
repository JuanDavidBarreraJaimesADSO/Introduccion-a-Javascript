console.log("TALLER EJERCICIO 40")
// Una empresa que contrata personal requiere determinar la edad de las personas
// que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el
// año en que nacieron. Realice el código que representen el algoritmo para
// solucionar este problema.
let fecha_trabajador = prompt("Ingrese la fecha en la que nacio el aspirante: DD/MM/YYYY");
let fecha_actual = new Date().getFullYear();
partes_fecha_trabajor = fecha_trabajador.toString().split ('/');
let dia = parseInt(partes_fecha_trabajor[0]);
let mes = parseInt(partes_fecha_trabajor[1]) - 1;
let año = parseInt(partes_fecha_trabajor[2]);
fecha_nacimiento = new Date(año, mes, dia)
fecha_actual= new Date()
let edad = fecha_actual.getFullYear() - fecha_nacimiento.getFullYear();
alert(`La edad actual del aspirante equivale a ${edad} años`)