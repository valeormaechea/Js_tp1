let numero = parseInt(prompt("Ingrese un numero: "));
let divisible = "";

if (numero % 2 === 0) {
  divisible = divisible + " 2";
}
if (numero % 3 === 0) {
  divisible = divisible + " 3";
}
if (numero % 5 === 0) {
  divisible = divisible + " 5";
}
if (numero % 7 === 0) {
  divisible = divisible + " 7";
}

if (divisible.length === 0) {
  document.write("El numero no es divisible por 2, 3, 5 o 7.");
} else {
  document.write("El numero es divisible por"+divisible +".");
}
