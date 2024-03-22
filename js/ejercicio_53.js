/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 52")
// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el
// empleado es de planta, la hora trabajada se le paga a $20000, si el empleado es
// administrativo, la hora trabajada se le paga a $10000. Para calcular su pago es
// necesario conocer el total de horas trabajadas.
const salario_administrativo = 20000;
const salario_planta = 10000;
let cargo = prompt("Ingrese el cargo correspondiente ADMINSITRATIVO (A) , PLATNA (P) ").toUpperCase()   
let horas = parseFloat(prompt("Indique las horas trabajadas "))
if (cargo === "A"){    
    salario = salario_administrativo * horas
    alert(`El total del salario correspondiente al empleado Administrativo es de $${salario}`)
}else if (cargo === "P"){
    salario = salario_planta * horas
    alert(`El total del salario correspondiente al empleado Administrativo es de $${salario}`)
}