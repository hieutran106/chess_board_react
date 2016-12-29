/**
 * Created by hieutran on 12/28/2016.
 */
import React from 'react';
import './App.css';
import Square from './Square'
import Piece from './Piece'

var Board = React.createClass({
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
    renderSquare(i) {

        const x = Math.floor(i / 8);
        const y = i % 8;

        const black = (x + y) % 2 === 1;

        var piece;
        var state=this.state.initState[x][y];
        if (state !== 0) {
            var type = this.getType(state);
            piece = <Piece type={type}/>;

        } else {
            piece=null;
        }
        console.log(piece);
        return (<Square key={i} pos={i} black={black}>
            {piece}
        </Square>)

    },

    render() {
        var squares=[];
        //Draw the board
        for (var i=0;i<64;i++) {
            squares.push(this.renderSquare(i));
        }
        return (
            <div id="board">
                {squares}
            </div>
        )
    }
})

export default Board