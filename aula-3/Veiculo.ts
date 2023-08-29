class AnoMenorQue2020Exception extends Error {
  codigo = 2020;
  constructor() {
    super("Novo ano deve ser maior que 2020");
    this.name = "erro_customizado";
  }
}

class Veiculo {
  private cor?: string;
  private ano?: number;
  private modelo?: string;

  set _modelo(modelo: string) {
    this.modelo = modelo;
  }

  get _modelo(): string | undefined {
    return this.modelo;
  }

  getCor = () => this.cor;
  setCor = (novaCor: string) => {
    this.cor = novaCor;
  };

  getAno = () => this.ano;
  setAno = (novoAno: number) => {
    if (novoAno >= 2020) {
      this.ano = novoAno;
    } else if (novoAno < 0) {
      throw new Error();
    } else {
      throw new AnoMenorQue2020Exception();
    }
  };
}

try {
  const veiculo = new Veiculo();
  veiculo.setCor("Verde");
  console.log(veiculo.getCor());
  veiculo.setAno(2023);
  veiculo.setAno(-2019);
  veiculo._modelo = "Gol";

  console.log(veiculo._modelo);
} catch (error: any) {
  if (error instanceof AnoMenorQue2020Exception) {
    console.log(error.message);
  } else {
    throw error;
  }
} finally {
  console.log("FINALIZOU");
}
