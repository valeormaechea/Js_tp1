let frase = prompt("Ingrese una frase: ");

console.log(frase.length);
console.log(frase.substring(0, 1));

for (let i = 0; i <= frase.length; i++) {
  if (
    frase.charAt(i) === "a" ||
    frase.charAt(i) === "e" ||
    frase.charAt(i) === "i" ||
    frase.charAt(i) === "o" ||
    frase.charAt(i) === "u"
  ) {
    document.write(frase.charAt(i));
  }
}