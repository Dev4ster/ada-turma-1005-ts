// const Pessoa = () => ({
//   nome: "Victor",
//   falar() {
//     console.log()
//   }
// });

// function Pessoa1() {
//   return {
//     nome: "Victor",
//   };
// }

// const p1 = Pessoa();
// const p2 = Pessoa1();

// console.log(p1);
// console.log(p2);

const animal = new Object({ nome: "cachorro" });

const endereco = {
  rua: "nome da rua",
  numero: 10,
};

type PessoaTipo = {
  nome: string;
  idade?: number;
};

const pessoa: PessoaTipo = {
  nome: "Victor",
};

const helloWorld = function (pessoa: PessoaTipo) {
  console.log(pessoa);
};

type Operacao = () => string;

const calc = (operacao: Operacao) => {
  console.log(operacao);
};

const teste = function () {
  return "testeeeee";
};

calc(teste);
