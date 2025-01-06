// 1. Lendo um Arquivo JSON & Convertendo JSON, em formato de string, para um objeto.

const fs = require('fs');

fs.readFile(
  `C:\\Users\\gustavo.vieira\\Desktop\\React - Ada Tech\\TypeScript, POO e Browser APIs\\JSON\\.prettierrc.json`,
  (erro, dados) => {
    if (erro) {
      console.log('Erro: ' + erro);
    } else {
      // dados: Buffer com os dados do arquivo json
      const dadosObjeto = JSON.parse(dados); // convertendo o Buffer em um Objeto do JS
      console.log(dadosObjeto.singleQuote);
    }
  }
);

const jsonString = '{"nome": "Gustavo"}';
console.log(JSON.parse(jsonString));

console.clear();

// 2. Convertendo um Objeto do JS, em um JSON (string).

const pessoa = {
  nome: 'Gustavo',
  papel: 'Homem de Ferro',
};

const tipoPessoa = JSON.stringify(pessoa);

console.log(JSON.stringify(pessoa)); // converte um objeto JSON em uma string
console.log(typeof tipoPessoa);
