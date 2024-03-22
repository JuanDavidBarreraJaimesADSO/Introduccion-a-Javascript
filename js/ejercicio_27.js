console.log("TALLER EJERCICIO 26")
let gradosc = parseFloat(prompt("Ingrese los grados centigrados a convertir "))
conversion = (gradosc * 9/5) + 32;
gradosf = conversion.toFixed(2);
alert(`La cantidad de grados centigrados ${gradosc} equivalen a ${gradosf}  grados Fahrenheit.`);