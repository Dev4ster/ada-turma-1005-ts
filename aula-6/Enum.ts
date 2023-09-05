enum Prioridade {
  ALTA = "ALTA",
  MEDIA = "MEDIA",
  BAIXA = "BAIXA",
}

let contDoRelatorioMensal;
let prioridade;

if (prioridade === Prioridade.ALTA) {
}

const lista = [1, 2, 3];

const lista2 = [...lista, 4, 5, 6]; // [1,2,3,4,5,6]

type FuncProps = {
  nome: string;
  sobrenome: string;
  endereco: {
    rua: string;
    numero: number;
  };
};
const endereco = {
  rua: "nome da rua",
  numero: 10,
};

const pessoa = {
  nome: "victor",
  sobrenome: "menezes",
  endereco: {
    ...endereco,
  },
};

const { nome, ...restoObj } = pessoa;
const [primeiro, segundo, ...resto] = lista2;

const lista3 = lista.concat(lista2);

const funcao = ({ nome, ...restoFunc }: FuncProps) => {};

const funcao2 = (nome: string, isBraziliam = false) => {};

funcao2("victor");
