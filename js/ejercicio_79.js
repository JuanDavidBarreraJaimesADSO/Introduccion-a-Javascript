///////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 79")
// // Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// // aceptan números, la función debe devolver true si el pin es valido y false si no es válido.
function validar(pin) {
  const caracteres = /([0-9])/g
  const comparacion = pin.match(caracteres)
  const validacion = comparacion.length;
  return validacion;
}
aliert(`El pin ingresado es ${pin}`)
