class Game {
  constructor() {
    //put your game components here
    this.orange1 = new Piece("orange", 0, 0);
    this.orange2 = new Piece("orange", 2, 0);
    this.orange3 = new Piece("orange", 4, 0);
    this.orange4 = new Piece("orange", 6, 0);
    this.orange5 = new Piece("orange", 1, 1);
    this.orange6 = new Piece("orange", 3, 1);
    this.orange7 = new Piece("orange", 5, 1);
    this.orange8 = new Piece("orange", 7, 1);
    this.cyan1 = new Piece("cyan", 0, 6);
    this.cyan2 = new Piece("cyan", 2, 6);
    this.cyan3 = new Piece("cyan", 4, 6);
    this.cyan4 = new Piece("cyan", 6, 6);
    this.cyan5 = new Piece("cyan", 1, 7);
    this.cyan6 = new Piece("cyan", 3, 7);
    this.cyan7 = new Piece("cyan", 5, 7);
    this.cyan8 = new Piece("cyan", 7, 7);
    this.firstCursor = new Cursor("orange", 0, 0);
    this.secondCursor = new Cursor("cyan", 0, 7);
    this.orangeTeam = [
      this.orange1,
      this.orange2,
      this.orange3,
      this.orange4,
      this.orange5,
      this.orange6,
      this.orange7,
      this.orange8,
    ];
    this.cyanTeam = [
      this.cyan1,
      this.cyan2,
      this.cyan3,
      this.cyan4,
      this.cyan5,
      this.cyan6,
      this.cyan7,
      this.cyan8,
    ];
    this.board = [];

    this.activeCursor = this.firstCursor;
  }

  toggleCursor() {
    const isFirstCursor = this.activeCursor.color === "orange";
    if (isFirstCursor) {
      return (this.activeCursor = this.secondCursor);
    }
    this.activeCursor = this.firstCursor;
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
      this.board.push(newRow);
      newRow = [];
    }
    this.firstCursor.active = true;
  }

  drawBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (j % 2 == 0) {
          if (i % 2 == 0) {
            fill(255);
          } else {
            fill(0);
          }
        } else {
          if (i % 2 == 0) {
            fill(0);
          } else {
            fill(255);
          }
        }
        rect(i * SQUARE_SIDE, j * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
      }
    }
  }

  drawPieces() {
    for (let i = 0; i < this.orangeTeam.length; i++) {
      this.orangeTeam[i].drawPiece();
      this.cyanTeam[i].drawPiece();
    }
  }

  drawCursors() {
    this.activeCursor.drawCursor();
    // if (this.firstCursor.active) {
    //   this.firstCursor.drawCursor();
    // }
    // if (this.secondCursor.active) {
    //   this.secondCursor.drawCursor();
    // }
  }

  drawGame() {
    this.drawBoard();
    this.drawCursors();
    this.drawPieces();
  }
}

function keyPressed() {
  if (keyCode === 13) {
    game.toggleCursor();
  }
  if (keyCode === 39) {
    game.activeCursor.moveRight();
  }
}

// function keyPressed() {
//   if (keyCode === 39) {
//     game.activeCursor.moveRight();
//   }

//   //if (game.firstCursor.active) {
//   //  if (keyCode === 37) {
//   //    game.firstCursor.moveLeft();
//   //  }
//   //  if (keyCode === 38) {
//   //    game.firstCursor.moveUp();
//   //  }
//   //  if (keyCode === 39) {
//   //    game.firstCursor.moveRight();
//   //  }
//   //  if (keyCode === 40) {
//   //    game.firstCursor.moveDown();
//   //  }
//   //  if (keyCode === 13) {
//   //    if (game.firstCursor.hasAPiece) {
//   //      game.firstCursor.movePiece(game.firstPiece);
//   //      game.secondCursor.active = true;
//   //      game.firstCursor.active = false;
//   //      game.firstCursor.hasAPiece = false;
//   //    } else if (
//   //      !game.firstCursor.hasAPiece &&
//   //      game.firstCursor.col === game.firstPiece.col &&
//   //      game.firstCursor.row === game.firstPiece.row
//   //    ) {
//   //      game.firstCursor.selectPiece(game.firstPiece);
//   //      game.firstPiece.showPossibleMoves();
//   //    }
//   //  }
//   //} else {
//   //  if (keyCode === 37) {
//   //    game.secondCursor.moveLeft();
//   //  }
//   //  if (keyCode === 38) {
//   //    game.secondCursor.moveUp();
//   //  }
//   //  if (keyCode === 39) {
//   //    game.secondCursor.moveRight();
//   //  }
//   //  if (keyCode === 40) {
//   //    game.secondCursor.moveDown();
//   //  }
//   //  if (keyCode === 13) {
//   //    if (game.secondCursor.hasAPiece) {
//   //      game.secondCursor.movePiece(game.secondPiece);
//   //      game.firstCursor.active = true;
//   //      game.secondCursor.active = false;
//   //      game.secondCursor.hasAPiece = false;
//   //    } else if (
//   //      !game.secondCursor.hasAPiece &&
//   //      game.secondCursor.col === game.secondPiece.col &&
//   //      game.secondCursor.row === game.secondPiece.row
//   //    ) {
//   //      game.secondCursor.selectPiece(game.secondPiece);
//   //    }
//   //  }
//   //}
// } //
// //
