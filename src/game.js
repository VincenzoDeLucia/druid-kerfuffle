class Game {
  constructor() {
    //put your game components here
    this.firstPiece = new Piece("orange", 0, 0);
    this.secondPiece = new Piece("cyan", 0, 7);
    this.firstCursor = new Cursor("orange", 0, 0);
    this.secondCursor = new Cursor("cyan", 0, 7);
    this.board = [];
  }

  setUp() {
    let newRow = [];
    for (let i = 0; i < 8; i++) {
      for (let l = 0; l < 8; l++) {
        newRow.push({
          col: i,
          row: l,
          occupied: false,
          enhanced: false,
        });
      }
      game.board.push(newRow);
      newRow = [];
    }
    game.firstCursor.active = true;
  }

  drawBoard() {
    var rows = 0;
    var firstColor = color(200, 200, 200);
    var secondColor = color(50, 50, 50);
    while (rows < 8) {
      if (rows % 2 == 0) {
        firstColor = color(50, 50, 50);
        secondColor = color(200, 200, 200);
      } else {
        firstColor = color(200, 200, 200);
        secondColor = color(50, 50, 50);
      }
      var cols = 0;
      while (cols < 8) {
        if (cols % 2 == 0) {
          fill(secondColor);
        } else {
          fill(firstColor);
        }
        rect(cols * SQUARE_SIDE, rows * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
        cols = cols + 1;
      }
      rows = rows + 1;
    }
  }

  drawPieces() {
    this.firstPiece.drawPiece();
    this.secondPiece.drawPiece();
  }

  drawCursors() {
    if (this.firstCursor.active) {
      this.firstCursor.drawCursor();
    }
    if (this.secondCursor.active) {
      this.secondCursor.drawCursor();
    }
  }

  drawGame() {
    this.drawBoard();
    this.drawCursors();
    this.drawPieces();
  }
}

function keyPressed() {
  if (game.firstCursor.active) {
    if (keyCode === 37) {
      game.firstCursor.moveLeft();
    }
    if (keyCode === 38) {
      game.firstCursor.moveUp();
    }
    if (keyCode === 39) {
      game.firstCursor.moveRight();
    }
    if (keyCode === 40) {
      game.firstCursor.moveDown();
    }
    if (keyCode === 13) {
      if (game.firstCursor.hasAPiece) {
        game.firstCursor.movePiece(game.firstPiece);
        game.secondCursor.active = true;
        game.firstCursor.active = false;
        game.firstCursor.hasAPiece = false;
      } else if (
        !game.firstCursor.hasAPiece &&
        game.firstCursor.col === game.firstPiece.col &&
        game.firstCursor.row === game.firstPiece.row
      ) {
        game.firstCursor.selectPiece(game.firstPiece);
        game.firstPiece.showPossibleMoves();
      }
    }
  } else {
    if (keyCode === 37) {
      game.secondCursor.moveLeft();
    }
    if (keyCode === 38) {
      game.secondCursor.moveUp();
    }
    if (keyCode === 39) {
      game.secondCursor.moveRight();
    }
    if (keyCode === 40) {
      game.secondCursor.moveDown();
    }
    if (keyCode === 13) {
      if (game.secondCursor.hasAPiece) {
        game.secondCursor.movePiece(game.secondPiece);
        game.firstCursor.active = true;
        game.secondCursor.active = false;
        game.secondCursor.hasAPiece = false;
      } else if (
        !game.secondCursor.hasAPiece &&
        game.secondCursor.col === game.secondPiece.col &&
        game.secondCursor.row === game.secondPiece.row
      ) {
        game.secondCursor.selectPiece(game.secondPiece);
      }
    }
  }
}
