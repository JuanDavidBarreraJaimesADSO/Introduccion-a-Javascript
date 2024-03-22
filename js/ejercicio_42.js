console.log("TALLER EJERCICIO 41")
// Ingrese una frase que lo identifique como programador de Software y luego
// mostrar esta frase invertida.
let frase = prompt("Frase clave para identificar")
let frase_invertida = ("");
for (let i = frase.length - 1; i >= 0; i--){
  frase_invertida += frase[i];
}
alert(`La frase invertida equivale a: ${frase_invertida}`)