"use strict";
class Pessoa {
    constructor(nome, idade, altura, peso, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this._cpf = cpf;
    }
    dormir() {
        console.log("Tirando um ronquinho... 💤😴");
    }
    // acessor
    get cpf() {
        return this._cpf;
    }
    // acessor
    set cpf(newCpf) {
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, peso, cpf, codigo) {
        super(nome, idade, altura, peso, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log("Ensinando... 📚📚📚");
    }
}
const pessoa1 = new Pessoa('Gustavo', 21, 1.77, 100, "555.555.555.55");
const professor1 = new Professor('Gustavo', 21, 1.77, 100, "555.555.555.55", "0001");
professor1.dormir();
professor1.ensinar();
