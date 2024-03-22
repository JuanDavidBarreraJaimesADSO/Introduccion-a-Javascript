/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 11")
// 11. Escribir un programa que sume, resta, multiplique y divida dos números.
let numero1 = parseInt(prompt("Indique el valor del primer numero"));
let numero2 = parseInt(prompt("Indique el valor del segundo numero"));
operacion = prompt("Desea Sumar , Restar, Multiplicar o Dividir").toLowerCase();
if (operacion === "sumar" || operacion === "suma") {
  operacion = numero1 + numero2;
  alert(`El resultado de la suma correspondientes es igual a ${operacion}`)
}
if (operacion === "restar" || operacion === "resta") {
  operacion = numero1 - numero2;
  alert(`El resultado de la resta correspondientes es igual a ${operacion}`)
}
if (operacion === "multiplicar") {
  operacion = numero1 * numero2;
  alert(`El resultado de la multiplicación correspondientes es igual a ${operacion}`)
}
if (operacion === "division" || operacion === "división" || operacion === "dividir") {
  operacion = numero1 / numero2;
  if (numero2 === 0) {
    alert("Error no se puede dividir entre Cero")
  }
  alert(`El resultado de la división correspondientes es igual a ${operacion}`)
}