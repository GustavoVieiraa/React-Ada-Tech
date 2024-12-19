const fs = require("fs");

// * 1. Callbacks
// ! Função assíncrona (ler um arquivo leva um tmepo)

console.log("ANTES da função...");

fs.readFile(
  "C:\\Users\\gustavo.vieira\\Desktop\\React - Ada Tech\\JavaScript\\Avançado\\arquivoLeitura.txt",
  (erro, conteudoDoArquivo) => {
    if (erro) {
      console.log("Ocorreu um erro ao tentar ler o arquivo: ", erro);
    } else {
      console.log(String(conteudoDoArquivo));
    }
  }
);

console.log("DEPOIS da função...");
