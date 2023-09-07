/**
 * use esse comando pra buildar
 * tsc script.ts --outFile script.js --target esnext
 *  */
enum Simbolo {
  X = "X",
  O = "O",
}

class Player {
  constructor(readonly nome: string, readonly simbolo: Simbolo) {}
}

class Board {
  constructor(readonly celulas = Array(9).fill(null)) {}

  fazerJogada(player: Player, index: number) {
    if (!this.celulas[index]) {
      this.celulas[index] = player.simbolo;
      return true;
    }

    return false;
  }

  verificaWin(player: Player) {
    const vitoriasPossiveis = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // linhas
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // colunas
      [0, 4, 8],
      [2, 4, 6], // diagonais
    ];
    return vitoriasPossiveis.some((possibilidade) => {
      const [a, b, c] = possibilidade;

      return (
        this.celulas[a] === player.simbolo.toString() &&
        this.celulas[b] === player.simbolo.toString() &&
        this.celulas[c] === player.simbolo.toString()
      );
    });
  }

  empatou() {
    return this.celulas.every((cell) => cell !== null);
  }
}

class Game {
  board = new Board();
  players = [
    new Player("Jogador 1", Simbolo.X),
    new Player("Jogador 2", Simbolo.O),
  ];
  currentPlayerIndex = 0;
  gameOver = false;

  fazerJogada(index: number) {
    if (!this.gameOver) {
      const playerAtual = this.players[this.currentPlayerIndex];
      if (this.board.fazerJogada(playerAtual, index)) {
        if (this.board.verificaWin(playerAtual)) {
          this.mensagem(`${playerAtual.nome} venceu`);
          this.gameOver = true;
        } else if (this.board.empatou()) {
          this.mensagem(`empatou`);
          this.gameOver = true;
        } else {
          this.currentPlayerIndex = 1 - this.currentPlayerIndex;
          this.mensagem(
            `${this.players[this.currentPlayerIndex].nome} é sua vez`
          );
        }
      }
    }
  }

  mensagem(msg: string) {
    const mensagemSpan = document.querySelector("span");
    mensagemSpan!.textContent = msg;
    mensagemSpan?.classList.add("visivel");
    const jogadorAtualClass = !!this.currentPlayerIndex ? "um" : "zero";
    const jogadorAtualClassReplace = !!this.currentPlayerIndex ? "zero" : "um";
    if (!mensagemSpan?.classList.contains("um")) {
      mensagemSpan?.classList.remove("zero");
      mensagemSpan?.classList.add("um");
    } else {
      mensagemSpan?.classList.remove("um");
      mensagemSpan?.classList.add("zero");
    }
  }

  resetar() {
    this.board = new Board();
    this.gameOver = false;
    this.currentPlayerIndex = 0;
    const cells = document.querySelectorAll(".cell");
    document.querySelector("span")!.textContent = "";
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("bloqueado");
    });
    document.querySelector("span")?.classList.remove("visivel");
    document.querySelector("span")?.classList.remove("um");
    document.querySelector("span")?.classList.remove("zero");
  }
}

const jogo = new Game();

const boardDiv = document.getElementById("board");
const resetarButton = document.querySelector("button");

boardDiv?.addEventListener("click", (evento) => {
  const cell = (evento.target as HTMLDivElement) || null;
  if (!cell?.textContent) {
    const index = cell.getAttribute("data-index");
    cell.textContent = jogo.players[jogo.currentPlayerIndex].simbolo.toString();
    jogo.fazerJogada(Number(index));
    cell.classList.toggle("bloqueado");
  }
});

resetarButton?.addEventListener("click", (evento) => {
  jogo.resetar();
});
