console.log("TALLER EJERCICIO 64")
// Escribir un programa que pida al usuario un número entero positivo y muestre por
// pantalla todos los números impares desde 1 hasta ese número separados por
// coma.
let numero = parseInt(prompt("Ingrese un número entero positivo:"));
if (!isNaN(numero) && numero > 0) {
    let numeros_impares = "";
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            if (numeros_impares !== "") {
                numeros_impares += ", ";
            }
            numeros_impares += i;
        }
    }
    alert(`Los números impares desde 1 hasta ${numero} son: ${numerosImpares}`);
} else {
    alert("Por favor, ingrese un número entero positivo válido.");
}