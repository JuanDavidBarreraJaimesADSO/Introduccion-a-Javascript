console.log("TALLER EJERCICIO 28")
let nombre = prompt("Ingrese el nombre del empleado:");
let horas_trabajo = parseFloat(prompt("Ingrese las horas trabajadas:"));
let pago_hora = parseFloat(prompt("Ingrese el pago por hora:"));
sueldo = horas_trabajo * pago_hora;
alert(`El empleado ${nombre} ha trabajado ${horas_trabajo} horas y su sueldo es $${sueldo.toFixed(2)}`);