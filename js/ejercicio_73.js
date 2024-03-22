/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 74")
// Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta
// que el usuario escriba “salir” que terminará.
let entrada_usuario;
while (true) {
    entrada_usuario = prompt("Ingrese algo (escriba 'salir' para terminar):");
    if (entrada_usuario.toLowerCase() === "salir") {
        break;
    }
    alert(`El eco ${entrada_usuario}`);
}