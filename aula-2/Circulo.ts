interface CalcularFormas {
  resultado: number;
  calcularArea(): number;
  mostrarNaTela(): void;
}

class Circulo implements CalcularFormas {
  raio: number;
  resultado = 0;

  constructor(raio: number) {
    this.raio = raio;
  }

  calcularArea(): number {
    this.resultado = Math.PI * Math.pow(this.raio, 2);
    return this.resultado;
  }

  mostrarNaTela(): void {
    if (this.resultado) {
      console.log(`O resultado é ${this.resultado}`);
    } else {
      console.log(`Sem resultado`);
    }
  }
}

const ciruclo = new Circulo(32.5);
const ciruclo2 = new Circulo(12.3);

ciruclo.calcularArea();
ciruclo.mostrarNaTela();

console.log("------------");

ciruclo2.mostrarNaTela();
