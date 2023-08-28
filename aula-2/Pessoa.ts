class Teste {
  constructor(teste: string, teste2: string) {}
}

const t = new Teste("tt", "22");

console.log(t);

class Pessoa {
  private nome: string;
  readonly idade: number;
  protected estaViva: boolean;

  constructor(nome: string, idade: number, estaViva: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.estaViva = estaViva;
  }

  falar() {}

  getNome() {
    return this.nome;
  }

  setNome(nome: string) {
    this.nome = nome.toLowerCase();
  }

  getEstaViva() {
    return this.estaViva;
  }
}

class PessoaFisica extends Pessoa {
  cnpj: number;

  constructor(nome: string, idade: number, estaViva: boolean, cnpj: number) {
    super(nome, idade, estaViva);
    this.cnpj = cnpj;
  }
}

const p = new Pessoa("Victor", 26, true);

const p2 = new PessoaFisica("Victor", 26, true, 123);

console.log();

console.log(p2);

console.log(p2);
