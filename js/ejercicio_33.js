console.log("TALLER EJERCICIO 32")
// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos
// con un 2% de descuento, realice un algoritmo que indique cuanto fue el valor a
// pagar por cada producto y el total de la compra.
let producto1 = parseFloat(prompt("Ingrese el valor del primer producto"))
let producto2 = parseFloat(prompt("Ingrese el valor del segundo producto"))
let producto3 = parseFloat(prompt("Ingrese el valor del tercer producto"))
let producto4 = parseFloat(prompt("Ingrese el valor del cuarto producto"))
let producto5 = parseFloat(prompt("Ingrese el valor del quinto producto"))
descuento1 = (producto1 + producto2) * 0.10;
descuento2 = (producto4 + producto5) * 0.4;
total = producto1 + producto2 + producto3 + producto4 + producto5 - descuento1 - descuento2;
alert(`El total de la comprar con los descuentos correspondientes equivale a $${total} ` )