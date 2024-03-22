console.log("TALLER EJERCICIO 21")
let a = parseFloat(prompt("Ingrese la longitud del semieje 'a':"));
let b = parseFloat(prompt("Ingrese la longitud del semieje 'b':"));
let c = parseFloat(prompt("Ingrese la longitud del semieje 'c':"));
let volumen = (4/3) * Math.PI * a * b * c;
alert(`El volumen del elipsoide es: ${volumen.toFixed(2)}`);