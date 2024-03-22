console.log("TALLER EJERCICIO 44")
// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando
// como constante el valor de una moneda.
const conversion_dolar = 0.00027; 
const conversion_euro = 0.00023; 
let pesos = parseFloat(prompt("Ingrese la cantidad de pesos a convertir:"));
let dolares = pesos * conversion_dolar;
let euros = pesos * conversion_euro;
alert(`La cantidad de ${pesos} pesos equivale a aproximadamente $${dolares.toFixed(2)} dolares y €${euros.toFixed(2)} euros.`);