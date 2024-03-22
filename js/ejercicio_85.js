console.log("TALLER EJERCICIO 85")
let numero = 24;
function par_impar() {
    let numero = Math.floor(Math.random() * 10) + 1;
    if (numero % 2 === 0) {
      return `${numero} es un número par.`;
    } else {
      return `${numero} es un número impar.`;
    }
  }
  let resultado = par_impar();
  console.log(resultado);