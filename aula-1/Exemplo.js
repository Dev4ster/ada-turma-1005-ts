class Exemplo {
  name;
  age;
  weight;

  constructor(name, age) {
    this.age = age;
  }
}

const exemplo = new Exemplo("Teste", 18);

exemplo.email = "victor";

exemplo.console.log(exemplo);

const exemplo2 = {
  name: "Teste",
  age: 18,
  weight: 0,
  withWeight(weight) {
    this.weight = weight;
  },
};

exemplo2.email = "victor2";
exemplo2.console.log(exemplo2);
