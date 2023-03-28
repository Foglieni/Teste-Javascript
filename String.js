let str = "Marte"; // string a ser invertida
let reversedStr = ""; // string invertida

// Loop para percorrer a string original de trás para frente
for(let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i]; // adiciona o caractere atual no final da string invertida
}

console.log(reversedStr); // imprime a string invertida no console
