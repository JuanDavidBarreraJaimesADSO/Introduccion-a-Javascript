console.log("TALLER EJERCICIO 38")
// Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final
// del año. Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con
// el resto. ¿Qué parte le corresponde a Lorena?
const total = parseInt(prompt("Ingrese el total de tapas recolectadas:")); 
const martin_jairo = 2/3 + 1/4;
const lorena = total - martin_jairo;
alert(`La parte que le corresponde a Lorena de las tapas de gaseosas es de ${lorena.toFixed(2)} .`);