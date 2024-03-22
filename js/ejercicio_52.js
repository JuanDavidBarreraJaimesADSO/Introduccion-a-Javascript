console.log("TALLER EJERCICIO 51")
let total_cuenta = parseFloat(prompt("Ingrese la cuenta total a pagar"))
if (total_cuenta >= 130000){
    impuesto = total_cuenta * 0.15
    total_pago = total_cuenta - impuesto;
    alert(`Por compras superiores a 130000 reciben un descuento del 15% por lo tanto el total a pagar con descuento es de $${total_pago}`)
}else{
    alert(`La cuenta no excede la cifra de 130000 por lo tanto no se aplica un descuento , total a pagar  $${total_cuenta}`)
}