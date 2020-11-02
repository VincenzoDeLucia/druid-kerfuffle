class Piece {
    constructor(color, col, row){
        this.selected = false;
        this.col = col;
        this.row = row;
        this.color = color;
        this.possibleMoves = [[this.col-1, this.row-1], [this.col+1, this.row-1], [this.col-1, this.row+1], [this.col+1, this.row+1]];
    }

    movePiece(positionX, positionY){
        game.board[this.col][this.row].occupied = false;
        this.col = positionX;
        this.row = positionY;
        game.board[this.col][this.row].occupied = true;
    }

    showPossibleMoves(){
    //    if (this.selected===true){
    //        line(this.col-1, this.row-1, this.col, this.row-1);
    //        strokeWeight(25);
    //        stroke(this.color);
    //        line(this.col-1, this.row-1, this.col-1, this.row);
    //        stroke(this.color);
    //        strokeWeight(25);
    //    }
    }

    drawPiece(){
        game.board[this.col][this.row].occupied = true;
        fill (this.color);
        circle((this.col*SQUARE_SIDE)+(SQUARE_SIDE/2), (this.row*SQUARE_SIDE)+(SQUARE_SIDE/2), SQUARE_SIDE);
    }
}