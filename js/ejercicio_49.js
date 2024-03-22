console.log("TALLER EJERCICIO 48")
// Escriba un algoritmo que permita calcular el área, debe preguntar que figura
// geométrica desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio
const pi = Math.PI;
let figura = prompt("¿Qué figura geométrica desea calcular? Triángulo (T) o Círculo (C):").toUpperCase();
if (figura === 'T') {
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    let area_triangulo = (base * altura) / 2;
    alert(`El área del triángulo es: ${area_triangulo.toFixed(2)}`);
} else if (figura === 'C') {
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    let area_circulo = pi * radio * radio;
    alert(`El área del círculo es: ${area_circulo.toFixed(2)}`);
} else {
    alert("La opción ingresada no es válida. Por favor, seleccione 'T' para Triángulo o 'C' para Círculo.");
}