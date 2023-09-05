class Tarefa {
  private descricao: string;
  private conlcuida: boolean = false;
  prioridade: Prioridade = Prioridade.BAIXA;

  constructor(descricao: string) {
    this.descricao = descricao;
  }

  marcarConcluido() {
    this.conlcuida = true;
  }

  toString() {
    return this.descricao + (this.conlcuida ? " (Concluída)" : " (Pendente)");
  }
}

class Lista<T, C = unknown> {
  protected elementos: T[] = [];

  adicionar(item: T) {
    this.elementos.push(item);
  }

  listar() {
    console.log(this.elementos.join("\n"));
    return this.elementos;
  }
}

class ListaPrioritaria extends Lista<Tarefa> {
  // @ts-ignore
  adicionarTarefas(descricao: string, prioridade: Prioridade): void {
    const novaTarefa = new Tarefa(descricao);
    novaTarefa.prioridade = prioridade;
    this.elementos.push(novaTarefa);
  }

  listarTarefas(): void {
    console.log("Prioritarias:");
    this.listarTarefas();
  }
}

const listaString = new Lista<String>();

listaString.listar();

const listaTarefas = new Lista<Tarefa>();

listaTarefas.adicionar(new Tarefa("Estudar POO"));
listaTarefas.adicionar(new Tarefa("Fazer compras"));
listaTarefas.listar();

const listaPrioritaria = new ListaPrioritaria();

listaPrioritaria.adicionarTarefas("Reunião", Prioridade.ALTA);
listaPrioritaria.adicionarTarefas("Tomar banho", Prioridade.BAIXA);
listaPrioritaria.listarTarefas();
