const fs = require("fs");

// * 2. Promises (promessas)

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "C:\\Users\\gustavo.vieira\\Desktop\\React - Ada Tech\\JavaScript\\Avançado\\arquivoLeitura.txt",
      (erro, conteudoDoArquivo) => {
        if (erro) {
          reject("Ocorreu um erro ao tentar ler o arquivo: ", erro);
        } else {
          resolve(String(conteudoDoArquivo));
        }
      }
    );
  }); // criando uma promessa
}

// lerArquivoPromise()
//   .then((retornoDoResolveDaPromise) => {
//     retornoDoResolveDaPromise;
//   })
//   .catch((erro) => {
//     console.log(`Deu ruim:\n${erro}`);
//   })
//   .finally(() => {
//     console.log(
//       `Finalização da execução, independente do resultado, se for reject ou resolve`
//     );
//   });

console.clear();

// * 3. async/await

async function leituraDeDados() {
  console.log("Isso é executado antes da promise ser resolvida!");

  try {
    const retornoDaPromessa = await lerArquivoPromise(); // espera a promessa ser resolvida para avançar no código
    console.log(retornoDaPromessa);
    console.log("Isso é executado depois da promise ser resolvida!");
  } catch (err) {
    console.log(err);
    console.log("Isso é executado depois da promise (com erro)");
  }
}

leituraDeDados();
