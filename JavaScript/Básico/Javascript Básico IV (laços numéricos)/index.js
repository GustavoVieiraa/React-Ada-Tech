const prompt = require("readline-sync");

let i;

// for (expressão 1; expressão 2; expressão 3) {
// O escopo do for
// }

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// limpando o console
console.clear();

// for (;;) {}

// Exemplo

let maiorNumero = 0;
let numeroInformado;

for (let i = 1; i <= 5; i++) {
  numeroInformado = Number(prompt.question("Informe um número positivo: "));

  if (numeroInformado > maiorNumero) {
    maiorNumero = numeroInformado;
  }
}

console.log("Maior número: ", maiorNumero);
