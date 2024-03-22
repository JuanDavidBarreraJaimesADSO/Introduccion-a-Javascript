/////////////////////////////////////////////////////////////////////////////////////////////
console.log("TALLER EJERCICIO 58")
// Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.
let nombre_mes = prompt("Ingrese el nombre del mes:").toLowerCase();
let dia_mes = parseInt(prompt("Ingrese el día del mes:"));
const signos_zodiacales = [
    { nombre: "Capricornio", inicio: { mes: "enero", dia: 20 }, fin: { mes: "febrero", dia: 18 } },
    { nombre: "Acuario", inicio: { mes: "enero", dia: 21 }, fin: { mes: "febrero", dia: 19 } },
    { nombre: "Piscis", inicio: { mes: "febrero", dia: 20 }, fin: { mes: "marzo", dia: 20 } },
    { nombre: "Aries", inicio: { mes: "marzo", dia: 21 }, fin: { mes: "abril", dia: 19 } },
    { nombre: "Tauro", inicio: { mes: "abril", dia: 20 }, fin: { mes: "mayo", dia: 20 } },
    { nombre: "Géminis", inicio: { mes: "mayo", dia: 21 }, fin: { mes: "junio", dia: 20 } },
    { nombre: "Cáncer", inicio: { mes: "junio", dia: 21 }, fin: { mes: "julio", dia: 22 } },
    { nombre: "Leo", inicio: { mes: "julio", dia: 23 }, fin: { mes: "agosto", dia: 22 } },
    { nombre: "Virgo", inicio: { mes: "agosto", dia: 23 }, fin: { mes: "septiembre", dia: 22 } },
    { nombre: "Libra", inicio: { mes: "septiembre", dia: 23 }, fin: { mes: "octubre", dia: 22 } },
    { nombre: "Escorpio", inicio: { mes: "octubre", dia: 23 }, fin: { mes: "noviembre", dia: 21 } },
    { nombre: "Sagitario", inicio: { mes: "noviembre", dia: 22 }, fin: { mes: "diciembre", dia: 21 } },
    { nombre: "Capricornio", inicio: { mes: "diciembre", dia: 22 }, fin: { mes: "enero", dia: 19 } }
];
let signo_zodiacal = "No encontrado";
for (let signo of signos_zodiacales) {
    if ((nombre_mes === signo.inicio.mes && dia_mes >= signo.inicio.dia) || (nombre_mes === signo.fin.mes && dia_mes <= signo.fin.dia)) {
        signo_zodiacal = signo.nombre;
        break;
    }
}
alert(`El signo zodiacal correspondiente al día ${dia_mes} de ${nombre_mes} es: ${signo_zodiacal}`);