class Person {
  name: string;
  age: number;
  weight?: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static withWeight(name: string, age: number, weight: number): Person {
    const person = new Person("Com peso", 18);
    person.weight = weight;
    return person;
  }
}

const person = new Person("Teste", 18);

// const person2 = Person.withWeight("Teste", 18, 100);

// const queue: number[] = [];

// queue.push(1);
// queue.push(2);
// queue.push(3);
// console.log(queue);
// queue.shift();
// console.log(queue);

// const pilha: number[] = [];

// pilha.push(1);
// pilha.push(2);
// pilha.push(3);
// console.log(pilha);
// pilha.pop();
// console.log(pilha);

// console.log(person);
// person.name = "Victor";
// console.log(person.name);

// console.log(person.name.toUpperCase());

const person2 = {
  name: "Teste",
  age: 18,
  weight: 0,
  withWeight(weight: number) {
    this.weight = weight;
  },
};

const nome = "victor";
person2.withWeight(18);
console.log(person2);
