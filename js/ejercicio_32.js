console.log("TALLER EJERCICIO 31")
// Se requiere calcular la distancia entre dos puntos, realizar el código que permita
// hallar la solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2).
let x1 = 2;
let y1 = 4;
let x2 = 6;
let y2 = 8;
let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
alert(`La distancia entre los puntos (${x1},${y1}) y (${x2},${y2}) es: ${distancia.toFixed(2)}`);