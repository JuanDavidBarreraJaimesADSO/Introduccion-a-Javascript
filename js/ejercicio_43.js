console.log("TALLER EJERCICIO 42")
// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550.
// Calcular el monto total de la venta, según la cantidad de artículos solicitados
// durante el día.
const libros = 10000;
const cuadernos = 7550
const lapiceros = 5550
let numero_de_libros =  parseFloat(prompt("Ingrese la cantidad de libros comprados"));
let numero_de_cuadernos = parseFloat(prompt("Ingrese la cantidad de cuadernos comprados"));
let numero_de_lapiceros = parseFloat(prompt("Ingresela cantidad de lapiceros comprados"));
let total_libros = numero_de_libros * libros;
let total_cuadernos = numero_de_cuadernos * cuadernos;
let total_lapiceros = numero_de_lapiceros * lapiceros;
total_articulos = total_libros + total_cuadernos + total_lapiceros
alert(`El total de los ${numero_de_libros} libros comprados equivale a ${total_libros}`)
alert(`El total de los ${numero_de_cuadernos} cuadernos comprados equivale a ${total_cuadernos}`)
alert(`El total de los ${numero_de_lapiceros} lapiceros comprados equivale a ${total_lapiceros}`)
alert(`El valor total de los articulos comprados equivale a $${total_articulos}`)