abstract class Forma {
  abstract calcularArea(): number;
  getPI(teste?: string) {
    console.log("obtendo PI");
    return Math.PI;
  }
}

interface Teste {
  getPi(): number;
}

class TesteClasse implements Teste {
  getPi(): number {
    throw new Error("Method not implemented.");
  }
}

class Circulo extends Forma {
  constructor(public raio: number) {
    super();
  }
  calcularArea(): number {
    return Math.PI * Math.pow(this.raio, 2);
  }

  getPI(): number {
    return 123;
  }
}

class Retangulo extends Forma {
  largura: number;
  altura: number;

  constructor(largura: number, altura: number) {
    super();
    this.altura = altura;
    this.largura = largura;
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}

function teste() {
  const forma = 1;
}

function teste2() {
  const forma = "123";
}

function calcularAreaTotal(formas: Forma[]) {
  let areaTotal = 0;

  for (const forma of formas) {
    areaTotal += forma.calcularArea();
  }

  return areaTotal;
}

const circulo = new Circulo(5);

const retangulo = new Retangulo(3, 4);
const areaTotal = calcularAreaTotal([circulo, retangulo]);

console.log("Area total:", areaTotal);

console.log("TESTE:", circulo.getPI());
console.log("TESTE 2:", retangulo.getPI());
