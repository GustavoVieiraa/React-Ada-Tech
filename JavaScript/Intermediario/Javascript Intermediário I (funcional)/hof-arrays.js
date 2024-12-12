// * Funções de Alta Ordem de Arrays

// Array.forEach()

const numeros = [40, 34, 67, 89, 23, 10, 55, 22];

numeros.forEach((elemento, index, arrayCompleto) => {
  console.log(index, elemento, arrayCompleto);
});

console.clear();

// 2. Array.prototype.find(): útil para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero === 10;
});

console.log(encontrado);

console.clear();

//3.
const pessoas = [
  {
    nome: "Gustavo 1",
    idade: 34,
  },
  {
    nome: "Gustavo 2",
    idade: 22,
  },
  {
    nome: "Gustavo 3",
    idade: 55,
  },
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade == 22);

console.log(pessoaEncontrada);
