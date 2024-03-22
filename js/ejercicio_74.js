////////////////////////////////12 EJERCICIOS ////////////////////////////////////////
console.log("TALLER EJERCICIO 75")
// Crea una función que reciba dos números como parámetros y devuelva el mayor de ellos.
num1 = prompt("Ingrese el primer numero para compararlos");
num2 = prompt("Ingrese el segundo numero para compararlos ");
function numero_mayor(num1, num2) {
  return Math.max(num1, num2);
}
alert(`El numero mayor de los dos numeros es ${numero_mayor(num1, num2)}`)
///////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 76")
// Crea una función que tome un número como argumento y devuelva la cadena si el numero es par o impar.
num = prompt("Ingrese un numero para determinar si es par o impar")
function par_impar(num) {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
alert(`El numero ingresado es ${par_impar(num)}`)