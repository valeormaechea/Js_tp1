let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));

if (numero1 > numero2) {
  document.write("El numero " + numero1 + " es el mas grande.");
} else if (numero2 > numero1) {
  document.write("El numero " + numero2 + " es el mas grande.");
} else {
  document.write("Los numeros son iguales.");
}
