//generate a randomly sized population if neural nets
//score the best one
//best ones get to reproduce

var ttt = function(ttt) {

    //states
    var X;
    var O;
    var TIE;

    //helper classes
    function newBoard() {
        return 0;
    }

    function isEmpty(board) {
        return board === 0;
    }

    /*
    square * 2^ 1
    board / (square * 2^ 1)
    */

    function getPiece(board, square) {
        return ((board >> (square << 1) & 3);
    }

};