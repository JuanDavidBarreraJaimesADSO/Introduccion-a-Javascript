console.log("TALLER EJERCICIO 83")
//Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.
function sin_vocales(cadena) {
    let regexVocales = /[aeiouAEIOU]/g;
    let cadena_sin_vocales = cadena.replace(regexVocales, '');
    return cadena_sin_vocales;
  }
  let cadena_original = "Hola mundo";
  let resultado = sin_vocales(cadena_original);
  console.log("Cadena sin vocales:", resultado);