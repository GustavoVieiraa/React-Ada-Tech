// Utilize sempre o Canel case no JavaScript!

// JavaScript possui tipagem dinâmica: infere os tipos de dados
// JavaScript possui uma tipagem fraca

console.log();

var nomeDoProfessor = "Gustavo Vieira";
var idade = 21;
var altura = 1.73;
var estudando = true;

console.log(nomeDoProfessor, typeof nomeDoProfessor);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;

// ! mediaDoAluno = 5; Não é permitado!

console.log(notaDoAluno);
console.log(mediaDoAluno);

const nota1 = 10;
const nota2 = 8;

const somaDasNotas = nota1 + nota2;

let mediaDasNotas = somaDasNotas / 2;

console.log("Soma das notas = ", somaDasNotas);
console.log("Média das notas = ", mediaDasNotas);
