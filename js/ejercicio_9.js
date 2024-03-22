/////////////////////////////////////////////////////////////////////////////////////////////
//  La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.
// Los ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no,
// y en función de su respuesta le muestre un menú con los ingredientes disponibles
// para que elija. Solo se puede elegir un ingrediente además de la mozzarella y el
// tomate que están en todas las pizzas. Al final se debe mostrar por pantalla si la
// pizza elegida es vegetariana o no y todos los ingredientes que lleva.
console.log("TALLER EJERCICIO 10")
let pizza = prompt("¿Desea una pizza vegetariana? (responder 'sí' o 'no')").toLowerCase();
let vegetarianos = ["pimiento", "tofu"];
let Novegetarianos = ["pepperoni", "jamón", "salmón"];
if (pizza === "si") {
  const ingrediente = prompt(`Ingredientes vegetarianos disponibles: ${vegetarianos.join(', ')}. Indique el  ingrediente deseado:`);
  alert(`La pizza es vegetariana y lleva Mozzarella, Tomate, ${ingrediente}`);
} else if (pizza === "no") {
  const ingrediente = prompt(`Ingredientes no vegetarianos disponibles: ${Novegetarianos.join(', ')}. Elige un ingrediente:`);
  alert(`La pizza no es vegetariana y lleva Mozzarella, Tomate, ${ingrediente}`);
}
else { alert("Respuesta inválida. Por favor, responda 'si' o 'no'."); }