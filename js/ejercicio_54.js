/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 53")
// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los
// resultados de: Iva, Subtotal y Total de la compra de los artículos.
let producto1 = parseFloat(prompt("Ingrese el valor del primer producto"))
let producto2 = parseFloat(prompt("Ingrese el valor del segundo producto"))
let producto3 = parseFloat(prompt("Ingrese el valor del tercer producto"))
let producto4 = parseFloat(prompt("Ingrese el valor del cuarto producto"))
let producto5 = parseFloat(prompt("Ingrese el valor del quinto producto"))
let subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
let iva = subtotal * 0.19; 
let total = subtotal + iva;
alert(`El subtotal de la compra es: $${subtotal.toFixed(2)}
El valor del IVA aplicado es: $${iva.toFixed(2)}
El total de la compra con IVA incluido es: $${total.toFixed(2)}`);