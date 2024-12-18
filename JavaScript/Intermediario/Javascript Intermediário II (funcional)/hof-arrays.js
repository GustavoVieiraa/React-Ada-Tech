// ! Array.prototype.every(): verificar se todos os elementos de um array seguem uma determinada condição
// !                          retornada pela função

const numeros = [40, 34, 67, 89, 23, 16, 10];

const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos);

console.clear();

const pessoas = [
  {
    nome: "Gustavo 1",
    idade: 34,
    altura: 1.75,
  },
  {
    nome: "Gustavo 2",
    idade: 22,
    altura: 1.87,
  },
  {
    nome: "Gustavo 3",
    idade: 55,
    altura: 1.72,
  },
];

const todosMaioresDeIdade = pessoas.every(
  (pessoa) => pessoa.idade >= 18 && pessoa.altura >= 1.7
);

console.log(todosMaioresDeIdade);

console.clear();

// ! Array.prototype.some(): verificar se algum elemento do array torna verdadeira uma determinada condição
// !                         retornada pela função

const numeros2 = [-1, 3, 7, -3, 5, 12];

const retorno = numeros2.some((numero) => numero == 3);

console.log(retorno);
