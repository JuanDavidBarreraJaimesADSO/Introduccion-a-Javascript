console.log("TALLER EJERCICIO 34")
// Generar el algoritmo que dé como resultado el tiempo estimado
// para el llenado de un depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
let pi = Math.PI;
let radio = parseFloat(prompt("Ingrese el radio del deposito en metros")); 
let altura = parseFloat(prompt("Ingrese la altura del deposito en metros")); 
let caudal = parseFloat(prompt("Ingrese el deposito en litros por segundo"));  
let volumen = pi * Math.pow(radio, 2) * altura * 1000;
let tiempo_seg = volumen/ caudal;
let tiempo_min = tiempo_seg / 60;
alert(`El tiempo estimado para el llenado del depósito es de aproximadamente ${tiempo_min.toFixed(2)} minutos.`);