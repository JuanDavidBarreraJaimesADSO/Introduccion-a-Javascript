console.log("TALLER EJERCICIO 63")
// Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos
// los años que ha cumplido (desde 1 hasta su edad).
let edad = parseInt(prompt("Ingrese su edad actual"))
if ( edad > 0) {
    for (let i = 1; i <= edad; i++) {
        alert(`Ha cumplido ${i} año${i === 1 ? '' : 's'}`);
    }
} else {
    alert("Por favor, ingrese una edad válida.");
}