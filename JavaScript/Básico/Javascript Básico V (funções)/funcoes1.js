function saudacao(nomeDoEstudante, curso = "Front-end em React") {
  return `Olá, ${nomeDoEstudante}! Seja bem-vindo(o) ao curso de ${curso}!`;
}

const mensagemDeSaudacao = saudacao("Gustavo", "Back-end em Node.js");

console.log(mensagemDeSaudacao);

function somar(num1, num2) {
  return num1 + num2;
}

const resultado = somar(10, 5);

console.log(resultado);

console.clear();

// FUNÇÕES ANÔNIMAS

const dobroDoNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroDoNumero(5);

console.log(dobro);

console.clear();

// ARROW FUNCTIONS: Função Seta

const subtrair = (num1, num2) => {
  return num1 - num2;
};

const multiplicar = (num1, num2) => num1 * num2;

const triploDoNumero = (numero) => numero * 3;
