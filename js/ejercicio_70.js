console.log("TALLER EJERCICIO 69")
// Escribir un programa que pida al usuario un número entero y muestre por consola
// un triángulo rectángulo como el de más abajo.
let altura = parseInt(prompt("Ingrese la altura del triángulo:"));
for (let i = 1; i <= altura; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += "* ";
    }
    alert(fila);
}