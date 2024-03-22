/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 9")
// En una determinada empresa, sus empleados son evaluados al final de cada año.
// Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir
// aumentando, traduciéndose en mejores beneficios. Los puntos que pueden
// conseguir los empleados pueden ser 0.0, 0.4, 0.6 o más, pero no valores
// intermedios
let edad = prompt("Digite su edad");
if (edad < 4) { console.log("¡Entrada gratis!"); }
else if (edad >= 4 && edad <= 18) { console.log("El precio de la entrada es de 5€."); }
else { console.log("El precio de la entrada es de 10€."); }