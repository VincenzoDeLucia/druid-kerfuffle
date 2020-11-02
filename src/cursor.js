class Cursor {
  constructor(color, col, row) {
    this.col = col;
    this.row = row;
    this.color = color;
    this.hasAPiece = false;
    this.active = false;
  }

  selectPiece(piece){
    //if (game.board[this.col][this.row].occupied){
    // try wrapping code in here to pick up any piece;
    //}
    if (piece.col === this.col && piece.row === this.row) {
        //piece.showPossibleMoves();
        piece.selected = true;
        this.hasAPiece = true;
        console.log(game.board);
    }
  }

  movePiece(piece){
    game.board[piece.col][piece.row].occupied = false;
    piece.col = this.col;
    piece.row = this.row;
    game.board[piece.col][piece.row].occupied = true;
  }

  drawCursor() {
    fill(this.color);
    rect(
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  moveLeft() {
    if (this.col > 0) {
      this.col -= 1;
    }
    return;
  }

  moveRight() {
    if (this.col < 7) {
      this.col += 1;
    }
    return;
  }

  moveUp() {
    if (this.row > 0) {
      this.row -= 1;
    }
    return;
  }

  moveDown() {
    if (this.row < 7) {
      this.row += 1;
    }
    return;
  }
}
