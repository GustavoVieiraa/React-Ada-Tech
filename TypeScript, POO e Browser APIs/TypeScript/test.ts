
// function somar(num1: number, num2: number) {
//     return num1 + num2
// }

// somar(10, 0);

let numero = 20; // Inferência de tipo
const pi = 3.1415;
let nome = "Gustavo";


// const nomeDoUsuario = prompt("Qual é o seu nome?");

// console.log(nomeDoUsuario?.toUpperCase());

const numeros = [1, 2, 3, 4, 5];

// ! const misto: (number | string)[] = ["Gustavo", 25, 1.74];
// ! const misto2: any[] = ["Gustavo", 25, 1.74];


type Person = {
    nome: string;
    idade: number;
    altura: number;
    profissao?: string;
}


