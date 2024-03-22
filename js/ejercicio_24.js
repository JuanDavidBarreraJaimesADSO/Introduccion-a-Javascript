console.log("TALLER EJERCICIO 23")
let velocidadKPH = parseFloat(prompt("Ingrese la velocidad del automóvil en kilómetros por hora:"));
let velocidadMPS = velocidadKPH * (1000 / 3600);
alert(`La velocidad del automóvil es de ${velocidadMPS.toFixed(2)} metros por segundo.`);