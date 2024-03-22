console.log("TALLER EJERCICIO 30")
let password = prompt("Ingrese la contraseña")
let regex_caracteres = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/;
if (regex_caracteres.test(password)) {
    alert("La contraseña es fuerte. Cumple con los criterios de seguridad.");
} else {
    alert("La contraseña no cumple con los criterios de seguridad. Debe tener entre 8 y 12 caracteres, al menos una mayúscula, una minúscula y un dígito.");
}