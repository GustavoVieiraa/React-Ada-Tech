// Object Literal

const array = ["Walisson", 27, 1.77, true];

const pessoa = {
  nome: "Gustavo",
  idade: 21,
  altura: 1.73,
  ehProgramador: true,
  hobbies: ["Jogar Fifinha", "Academia", "Música"],
  cumprimentar: () => {
    console.log(`Oubaaaa, eu sou o ${pessoa.nome}`);
  },
};

pessoa.profissao = "Programador";

console.log(pessoa);
pessoa.cumprimentar();

console.clear();

const { nome, hobbies, idade } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(idade);
console.log(pessoa);
