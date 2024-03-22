console.log("TALLER EJERCICIO 22")
const costoPorMinuto = 355;
let duracionLlamadaMinutos = parseFloat(prompt("Ingrese la duración de la llamada en minutos:"));
let costoSinIVA = duracionLlamadaMinutos * costoPorMinuto;
let iva = costoSinIVA * 0.20;
let costoTotalConIVA = costoSinIVA + iva;
alert(`El costo total de la llamada telefónica es: $${costoTotalConIVA.toFixed(2)}`);