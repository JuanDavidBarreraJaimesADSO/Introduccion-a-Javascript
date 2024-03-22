console.log("TALLER EJERCICIO 78")
// Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5 * 5, nos debe mostrar el resultado para las demás multiplicaciones.
function tabla_cinco(secuencia) {
  for (i = 0; i <= 10; i++) {
    secuencia = 5 * i;
    if (i === 5) {
      continue
    }
    alert(`Tabla del (5 * ${i} = ${secuencia})`)
  }
}
tabla_cinco()