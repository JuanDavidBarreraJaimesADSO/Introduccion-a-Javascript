console.log("TALLER EJERCICIO 65")
// Escribir un programa que pida al usuario un número entero positivo y muestre por
// pantalla la cuenta atrás desde ese número hasta cero separados por comas.
let numero = parseInt(prompt("Ingrese un número entero positivo:"));
let cuenta_atras = "";
if ( numero > 0) {
    let cuenta_atras = "";
    for (let i = numero; i >= 0; i--) {
        if (cuenta_atras !== "") { 
            cuenta_atras += ", "; 
        }
        cuenta_atras += i;
    } 
    alert(`La cuenta regresiva desde ${numero} hasta 0 es: ${cuenta_atras}`);
} else {
    alert("Por favor, ingrese un número entero positivo válido.");
}