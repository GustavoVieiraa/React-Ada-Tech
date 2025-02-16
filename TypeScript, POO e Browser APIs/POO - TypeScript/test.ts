
interface IPessoa {
    nome: string;
    idade: number;
    altura: number;
    peso: number;
}

class Pessoa implements IPessoa{
    nome: string;
    idade: number;
    altura: number;
    peso: number;
    private _cpf: string

    constructor(nome: string, idade: number, altura: number, peso: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this._cpf = cpf
    }

    dormir() {
        console.log("Tirando um ronquinho... 💤😴")
    }

    // acessor
    get cpf (): string {
        return this._cpf;
    }

    // acessor
    set cpf (newCpf: string) {
        this._cpf = newCpf;
    }


}

class Professor extends Pessoa {
    codigo: string;

    constructor(nome: string, idade: number, altura: number, peso: number, cpf: string, codigo: string) {
        super(nome, idade, altura, peso, cpf);
        this.codigo = codigo;
    }

    ensinar() {
        console.log("Ensinando... 📚📚📚")
    }

}


const pessoa1 = new Pessoa('Gustavo', 21, 1.77, 100, "555.555.555.55");
const professor1 = new Professor('Gustavo', 21, 1.77, 100, "555.555.555.55", "0001");

professor1.dormir();
professor1.ensinar();