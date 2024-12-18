// * Map
// ! Map cria um novo array que possui o *mesmo tamanho do array original*
// ! composto pelos elementos que foram retornados a cada iteração

const numeros = [40, 34, 67, 89, 23, 16, 10];

const novoArray = numeros.map((elemento) => {
  return elemento + 1;
});

console.log(novoArray);
console.clear();

// Exemplo 2: Adicionando uma propriedade aos objetos do array

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 21.5, quantidade: 5 },
  { produto: "Leite 1L", preco: 5.99, quantidade: 12 },
];

const valorCompra = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(valorCompra);

