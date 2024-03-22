console.log("TALLER EJERCICIO 25")
let costoMedicamentos = parseFloat(prompt("Ingrese el costo de los medicamentos:"));
let descuento = costoMedicamentos * 0.10;
let precioFinal = costoMedicamentos - descuento;
alert(`El descuento aplicado es de $${descuento.toFixed(2)} y el precio final es de $${precioFinal.toFixed(2)}.`);