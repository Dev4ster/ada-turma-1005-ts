#Exercício de POO: Todo List

Objetivo: Criar um sistema de lista de tarefas (Todo List) usando Programação Orientada a Objetos em TypeScript.

Passos do Exercício:

Definir a Classe Tarefa:

Crie uma classe chamada Tarefa.
A classe deve ter os atributos descricao (string) e concluida (boolean).
Implemente o construtor para receber a descrição da tarefa.
Implemente um método marcarConcluida para marcar a tarefa como concluída.
Implemente um método toString que retorna a descrição da tarefa seguida de " (Concluída)" ou " (Pendente)" com base no status.
Definir a Classe ListaDeTarefas:

Crie uma classe chamada ListaDeTarefas.
A classe deve ter o atributo tarefas que é um array de objetos Tarefa.
Implemente um método adicionarTarefa que recebe a descrição da tarefa e cria uma instância de Tarefa adicionando-a à lista.
Implemente um método listarTarefas que lista todas as tarefas na lista com seus respectivos status.
Definir a Classe ListaPrioritaria:

Crie uma classe chamada ListaPrioritaria que herda de ListaDeTarefas.
Implemente um atributo adicional prioridade (string) para cada tarefa na lista prioritária.
Implemente um método adicionarTarefaPrioritaria que recebe a descrição da tarefa e sua prioridade e adiciona uma instância de Tarefa à lista prioritária.
Sobrescreva o método listarTarefas para listar todas as tarefas na lista prioritária com suas prioridades.
Testar o Sistema:

Crie uma instância de ListaDeTarefas e uma instância de ListaPrioritaria.
Adicione várias tarefas às duas listas.
Marque algumas tarefas como concluídas.
Liste as tarefas nas duas listas para verificar se tudo está funcionando corretamente.
