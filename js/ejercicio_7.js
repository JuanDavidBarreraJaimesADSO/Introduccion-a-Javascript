/////////////////////////////////////////////////////////////////////////////////////////////
// los tramos impositivos para la declaración de la renta en un determinado país son:
// a.entre 10000 y 20000 ----5 %
// b.entre 20000 y 35000 ----10 %
// c.entre 35000 y 60000 ----20 %
// d.más de 60000 ----45 %
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla
// el tipo de impositivo que le corresponde
console.log("TALLER EJERCICIO 7");
let renta_eje7 = prompt("Indique su renta anual")
if (renta_eje7 >= 10000 && renta_eje7 <= 20000) { (renta_eje7 * 0.5) }
if (renta_eje7 >= 20000 && renta_eje7 <= 35000) { (renta_eje7 * 0.10) }
if (renta_eje7 >= 35000 && renta_eje7 <= 59999) { (renta_eje7 * 0.10) }
if (renta_eje7 >= 60001) { (renta_eje7 * 0.45) }
alert(`El impositivo de la  renta anual correspondiente equivale a ${renta_eje7}`)