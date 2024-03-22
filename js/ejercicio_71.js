/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 70")
// Escribir un programa que almacene la cadena de caracteres contraseña en una
// variable, pregunte al usuario por la contraseña hasta que introduzca la contraseña
// correcta.
let contraseña = "Strongerpassword";
let ingresar_contraseña = prompt("Ingrese la contraseña:");
while (ingresar_contraseña !== contraseña) {
    ingresar_contraseña = prompt("Contraseña incorrecta. Por favor, ingrese la contraseña:");
}
alert("¡Contraseña correcta! Bienvenido.")
/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 71")
// Escribir un programa que pida al usuario un número entero y muestre por pantalla 
// si es un número primo o no
let numero = parseInt(prompt("Ingrese un número entero:"));
for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
        numero_primo = false;
        break; 
    }
}
    if (numero_primo) {
    alert(`${numero} es un número primo.`);
}   else {
    alert(`${numero} no es un número primo.`);
}
/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 72")
// Escribir un programa que pida al usuario una palabra y luego muestre por pantalla 
// una a una las letras de la palabra introducida empezando por la última.
let palabra = prompt("Ingrese una palabra:");
for (let i = palabra.length - 1; i >= 0; i--) {
    alert(palabra[i])
}