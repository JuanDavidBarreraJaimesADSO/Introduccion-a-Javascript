console.log("TALLER EJERCICIO 39")
// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de
// pintura Considere que se cobra por m2 y realice el código que representen el
// algoritmo que le permita ir generando presupuestos para cada cliente.
let costo_metro_cuadrado = parseFloat(prompt("Ingrese el costo por metro cuadrado:"));
let metros_cuadrados = parseFloat(prompt("Ingrese la cantidad de metros cuadrados a pintar:"));
let costo_total = costo_metro_cuadrado * metros_cuadrados;
alert(`El presupuesto para el trabajo de pintura es de $${costo_total}.`);