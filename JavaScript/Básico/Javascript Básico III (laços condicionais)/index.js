const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Qual eh o seu saldo?"));

// while (saldo < 0) {
//   saldo = Number(
//     prompt.question("Saldo invalido! Por favor, informe novamente: ")
//   );
// }

// console.log(saldo);

// Exemplo 2

let notaDoAluno = Number(prompt.question("Informe a nota do aluno"));

let somaDasNotas = 0; // Acumulador
let qtdNotasValidas = 0; // Acumulador (Quantidade de notas válidas digitadas)

while (notaDoAluno >= 0) {
  somaDasNotas += notaDoAluno;
  qtdNotasValidas++; // pós-incremento
  notaDoAluno = Number(prompt.question("Informe a próxima nota: "));
}

console.log(somaDasNotas);
console.log(qtdNotasValidas);
