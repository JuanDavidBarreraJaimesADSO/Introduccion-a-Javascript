console.log("TALLER EJERCICIO 49")
// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los
// lados sean positivos: área triangulo= lado * lado
let base = parseFloat(prompt("Ingresa la longitud del rectángulo:"));
let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
if (base > 0 && altura > 0) {
    let areaRectangulo = base * altura;
    alert(`El área del rectángulo es: ${areaRectangulo}`);
} else {
    alert("Las medidas ingresadas no son válidas. Por favor, asegúrate de ingresar valores positivos para la longitud y la altura del rectángulo.");
}