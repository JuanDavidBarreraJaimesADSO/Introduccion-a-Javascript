console.log("TALLER EJERCICIO 20")
let a = parseFloat(prompt("Ingrese el coeficiente a:"));
let b = parseFloat(prompt("Ingrese el coeficiente b:"));
let c = parseFloat(prompt("Ingrese el coeficiente c:"));
let discriminante = b * b - 4 * a * c;
if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert(`Las raíces reales son: x1 = ${x1.toFixed(2)} y x2 = ${x2.toFixed(2)}`);
} else if (discriminante === 0) {
    let x = -b / (2 * a);
    alert(`La raíz real doble es: x = ${x.toFixed(2)}`);
} else {
    alert("La ecuación no tiene raíces reales.");
}