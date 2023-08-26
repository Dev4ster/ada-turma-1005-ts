interface ICopiadora {
  copiar(): void;
}

interface IScanner {
  escanear(): void;
}

interface IImpresora {
  imprimi(): void;
}

abstract class Fax {
  enviar() {}
}

class ImpressoraFax implements Fax {
  enviar(): void {
    throw new Error("Method not implemented.");
  }
}

class ImpressoraSimples implements IImpresora {
  imprimi(): void {
    throw new Error("Method not implemented.");
  }
}

class ImpressoraPro implements Fax, IImpresora, IScanner {
  escanear(): void {}
  imprimi(): void {
    throw new Error("Method not implemented.");
  }
  enviar(): void {
    throw new Error("Method not implemented.");
  }
}

interface IAnimal {
  nome: string;
}

class Animal implements IAnimal {
  nome: string;
  peso?: number;

  constructor(nome: string) {
    this.nome = nome;
  }

  respirar() {
    console.log(`${this.nome} respirou`);
  }
}

class Ave extends Animal {
  eTerrestre: boolean;
  constructor(nome: string, eTerrestre: boolean) {
    super(nome);
    this.eTerrestre = eTerrestre;
  }
  voar() {
    console.log(`${this.nome} vouou`);
  }
}

const ave: Ave = new Ave("avestruz", true);

ave.respirar();
ave.voar();

console.log(ave instanceof Animal);
