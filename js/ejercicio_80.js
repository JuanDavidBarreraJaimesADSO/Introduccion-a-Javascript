///////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 80")
// Genera un patrón de asteriscos en forma de pirámide.
function piramide(base) {
    for (let i = 1; i <= base; i++) {
      let fila = '';
      for (let j = 1; j <= base - i; j++) {
        fila += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        fila += '*';
      }
      console.log(fila);
    }
  }
  let base = parseInt(prompt("Ingrese el número de niveles de la pirámide:"));
  piramide(base);