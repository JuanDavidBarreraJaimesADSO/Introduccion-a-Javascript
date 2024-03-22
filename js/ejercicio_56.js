/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 55")
// En una tienda de HELADO da un descuento por compra a sus clientes con
// membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A,
// tipo B y tipo C. Los descuentos son los siguientes: Tipo A 10% de descuento Tipo B
// 15% de descuento Tipo C 20% de descuento.
let membresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
let precio_helado = parseFloat(prompt("Ingrese el precio del helado:"));
let descuento
if (membresia === "A") {
    descuento = 0.10;
} else if (membresia === "B") {
    descuento = 0.15;
} else if (membresia === "C") {
    descuento = 0.20;
} else {
    alert("Tipo de membresía no válido.");}
let total_descuento = precio_helado * descuento;
let total = precio_helado - descuento;
alert(`El descuento aplicado es de $${total_descuento.toFixed(2)}. El precio final del helado es de $${total.toFixed(2)}.`);