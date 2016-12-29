/**
 * Created by hieutran on 12/29/2016.
 */
import React from 'react'
import Draggable from 'react-draggable'
import './App.css'


var ChessPiece = React.createClass({

    componentWillMount() {
        this.style = {
            left: this.props.pos.j * 90 + 'px',
            top: this.props.pos.i * 90 + 'px'

        }
    },
    handleStop(e) {
        console.log(e);

    },
    render() {
        return (<Draggable onStop={this.handleStop} grid={[90, 90]}>
                <div className="chess_pieces" style={this.style}><img src={"img/" + this.props.type + ".png"}
                                                                      role="presentation"/></div>
            </Draggable>
        );

    }
})

export default ChessPiece