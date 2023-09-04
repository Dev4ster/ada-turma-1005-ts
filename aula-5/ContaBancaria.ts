interface OperacoesBancarias {
  depositar(valor: number): void;
  sacar(valor: number): void;
}

class Logger {
  static registrarLog(mensagem: string) {
    console.log(`[LOG]: ${mensagem}`);
  }
}

class ContaBancaria implements OperacoesBancarias {
  constructor(
    private numeroConta: string,
    private saldo: number,
    private titular: string
  ) {}

  protected registrarLog(mensagem: string) {
    Logger.registrarLog(`Conta ${this.numeroConta}: ${mensagem}`);
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      this.registrarLog(
        `Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`
      );
    }
  }
  sacar(valor: number): void {
    if (valor > 0 && valor < +this.saldo) {
      this.saldo -= valor;
      this.registrarLog(
        `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`
      );
    } else {
      this.registrarLog("Saldo insuficiente para saque.");
    }
  }

  get NumeroConta(): string {
    return this.numeroConta;
  }

  get Saldo(): number {
    return this.saldo;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(
    numeroConta: string,
    saldo: number,
    titular: string,
    private juros: number
  ) {
    super(numeroConta, saldo, titular);
  }

  consultarSaldo(): number {
    const saldoComJuros = this.Saldo + this.juros;
    this.registrarLog(`Saldo com juros: ${saldoComJuros}`);

    return saldoComJuros;
  }
}

const conta1 = new ContaBancaria("123", 1000, "Alice");
const conta2 = new ContaPoupanca("456", 500, "Bob", 50);
const conta3 = new ContaPoupanca("456", 100, "Maria", 10);

conta1.depositar(200);
conta1.sacar(150);

conta2.depositar(100);
conta2.sacar(300);

conta2.consultarSaldo();

const callBackDoReduce = (anterior: number, proximo: ContaBancaria) => {
  console.log(`ANTERIOR: ${anterior} | PROXIMO: ${proximo.Saldo}`);
  return anterior + proximo.Saldo;
};

function saldoDoBanco(contas: ContaBancaria[]) {
  return contas.reduce(callBackDoReduce, 0);
}

console.log("SALDO BANCO: ", saldoDoBanco([conta1, conta2, conta3]));
