/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 54")
// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que
// él segundo, en caso contrario indicar con un mensaje que la operación no es posible realizarla.
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
if (numero1 > numero2) {
    let resultado = numero1 - numero2;
    alert(`La resta es: ${resultado}`);
} else {
    alert("La operación no es posible porque el primer número no es mayor que el segundo.");
}