// * 1. Função que retorna outra função como parâmetro (Cloujure)

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}, Seja bem-vinda(o) ao curso de ${courseName}`
    );
  };
}

const displayWelcomeToFrontEndCourse = welcome("Front-end em React");
const displayWelcomeToBackEndCourse = welcome("Back-end em Node.js");
const displayWelcomeToFullStackCourse = welcome(
  "Front-end em React & Back-end em Node.js"
);

displayWelcomeToFullStackCourse("Gustavo Vieira");
displayWelcomeToFrontEndCourse("Aurora Boreal");
displayWelcomeToBackEndCourse("Sophya Damiazo");

console.clear();

// * 2. Função que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const divisao = (num1, num2) => num1 / num2;

// operação: função que realiza a operação entre os dois numeros
//           ou seja, ela precisa ser uma função que receba dois numeros
const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);

console.log(calcular(10, 30, multiplicar));
