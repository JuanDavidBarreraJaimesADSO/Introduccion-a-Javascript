/////////////////////////////////////////////////////////////////////////////////////////////
// escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la
// contraseña introducida por el usuario coincide con la guardada en la variable sin
// tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
// ingresar valores alfanuméricos.
alert("TALLER EJERCICIO 2");
let contraseña_eje2 = "Strongerpassword";
let contraseñaIngresada = prompt("Por favor, ingresa la contraseña:");
if (/^[a-zA-Z0-9]+$/.test(contraseñaIngresada)) {
    if (contraseñaIngresada.toLowerCase() === contraseña_eje2.toLowerCase()) {
        alert("La contraseña es correcta.");
    } else {
        alert("La contraseña es incorrecta.");
    }
} else {
    alert("Error: la contraseña debe contener solo caracteres alfanuméricos.");
}