/**
 * Created by hieutran on 12/28/2016.
 */
import React from 'react';
import './App.css';
import BoardCell from './BoardCell'
import ChessPiece from './ChessPiece'

var ChessBoard = React.createClass({
    getInitialState() {
      return {initState:[
          [-4,-2,-3,-5,-6,-3,-2,-4],
          [-1,-1,-1,-1,-1,-1,-1,-1],
          [ 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0, 0, 0, 0, 0],
          [ 0, 0, 0, 0, 0, 0, 0, 0],
          [ 1, 1, 1, 1, 1, 1, 1, 1],
          [ 4, 2, 3, 5, 6, 3, 2, 4]
            ]};
    },
    getType(x) {
        switch (x) {
            case -4:
                return "rook_black";
            case 4:
                return "rook_white";
            case -2:
                return "knight_black";
            case 2:
                return "knight_white";
            case -3:
                return "bishop_black";
            case 3:
                return "bishop_white";
            case -5:
                return "queen_black";
            case 5:
                return "queen_white";
            case -6:
                return "king_black";
            case 6:
                return "king_white";
            case -1:
                return "pawn_black";
            case 1:
                return "pawn_white";
            default:
                return "error";
        }
    },
    render() {
        var content=[];

        for (var i=0;i<8;i++) {
            var row=[];
            for (var j=0;j<8;j++) {
                var pos={i:i,j:j};
                var cell=<BoardCell key={"pos"+i+j} pos={pos}/>;
                row.push(cell);
            }
            content.push(<div key={"row"+i}>{row}</div>);
        }

        var chess_pieces=[];
        for (var i=0;i<8;i++) {
            for ( var j=0;j<8;j++) {

                var state=this.state.initState[i][j];

                if (state !== 0) {
                    var type = this.getType(this.state.initState[i][j]);
                    var pos = {i: i, j: j};
                    var piece = <ChessPiece key={"pos" + i + j} type={type} pos={pos}/>;
                    chess_pieces.push(piece);
                }
            }
        }

        return (
            <div id="chessboard">
                {content}
                {chess_pieces}
            </div>
        )

    }
})

export default ChessBoard