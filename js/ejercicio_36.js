console.log("TALLER EJERCICIO 35")
// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales
// cada uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno
// por $87000. Después de pagar le sobran $91000. ¿Cuánto dinero tenía?
const llaves = 11500;
const bomba = 1168000;
const pernos = 87000;
const total_llaves = 5;
const total_pernos = 3;
const dinero_actual = 91000;
const total_compras = (llaves * total_llaves) + bomba + (pernos * total_pernos);
const cantidad_inicial = total_compras + dinero_actual;
alert(`El jefe de obra tenía inicialmente $${cantidad_inicial} pesos.`);