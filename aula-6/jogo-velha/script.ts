enum Simbolo {
  X,
  O,
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
        this.celulas[a] === player.simbolo &&
        this.celulas[b] === player.simbolo &&
        this.celulas[c] === player.simbolo
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
    new Player("Jogador", Simbolo.X),
    new Player("Jogador 2", Simbolo.O),
  ];
  currentPlayerIndex = 0;
  gameOver = false;

  fazerJogada(index: number) {
    if (!this.gameOver) {
      const playerAtual = this.players[this.currentPlayerIndex];
      if (this.board.fazerJogada(playerAtual, index)) {
        if (this.board.verificaWin(playerAtual)) {
          alert(`${playerAtual.nome} venceu`);
          this.gameOver = true;
        } else if (this.board.empatou()) {
          alert(`empatou`);
          this.gameOver = true;
        } else {
          this.currentPlayerIndex = 1 - this.currentPlayerIndex;
          alert(`${this.players[this.currentPlayerIndex].nome} é sua vez`);
        }
      }
    }
  }
}
