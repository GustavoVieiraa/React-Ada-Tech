// Operações Booleanos: Comparações

const idade = 18;

const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional: if/else

if (ehMaiorDeIdade) {
  console.log("Você eh de maior de idade!");
} else {
  console.log("Você não eh de maior!");
}

const mediaDoAluno = 8.999999;

if (mediaDoAluno >= 7) {
  console.log("Você foi aprovado!");
} else if (mediaDoAluno >= 5) {
  console.log("Prova Final");
} else {
  console.log("Reprovado");
}

// 1. Preciso ser maior de idade
// 2. Preciso ter uma CNH (PPD)

const idadeDaPessoa = 18;
const temCNH = true;

if (idadeDaPessoa >= 18 && temCNH) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você NÃO pode dirigir!");
}

// Muito útil quando sua váriavel possui valores específicos - Switch / Case

const permissoes = "banana";

switch (permissoes) {
  case "aluno":
    console.log("Você só pode visualizar as aulas.");
    break;
  case "professor":
    console.log("Você pode alteras as aulas e adicionar exercícios.");
    break;
  case "admin":
    console.log("Você pode fazer o que quiser no sistema!");
    break;
  default:
    console.log("Não sei quem é você no sistema");
}

// * Operador Ternário

const idadeGusta = 21;

idadeGusta >= 18
  ? console.log("Maior de idade!")
  : console.log("Menor de idade!");
