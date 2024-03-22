console.log("TALLER EJERCICIO 56")
// Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es
// menor a $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a
// $100.000 se paga un interés anual de 4%. Al final mostrar el saldo final y el interés
// pagado.
let saldo = parseFloat(prompt("Ingrese el saldo de su cuenta bancaria:"));
const tasa_baja = 0.03;
const tasa_alta = 0.04; 
let tasa_interes = 0;
if (saldo < 100000) {
    tasa_interes = tasa_baja;
} else {
    tasa_interes = tasa_alta;
}
let interes = saldo * tasa_interes;
let saldo_final = saldo + interes;
alert(`Saldo final: $${saldo_final.toFixed(2)}
Interés pagado: $${interes.toFixed(2)}`);