console.log("TALLER EJERCICIO 36")
// En el programa de cocina de “Doña Anita” han dado la receta para la preparación
// de bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir
// 10 gramos de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos
// de chocolate. ¿La cantidad de gramos de harina para hacer el bizcocho es?
let gramos_cacao = parseFloat(prompt("Ingrese los gramos de cacao"));
let gramos_cacao_100_harina = parseFloat(prompt("Ingrese los gramos de cacao por cada 100 gramos de harina"));
const gramos_harina = (gramos_cacao * 100) / gramos_cacao_100_harina;
alert(`La cantidad de gramos de harina necesarios para hacer el bizcocho es ${gramos_harina} gramos.`);