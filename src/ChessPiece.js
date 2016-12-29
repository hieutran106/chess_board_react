/**
 * Created by hieutran on 12/29/2016.
 */
import React from 'react'
import './App.css'

var ChessPiece = React.createClass({

    componentWillMount() {
        console.log(this.props.pos);
        this.style = {
             left: this.props.pos.j * 90 + 'px',
             top: this.props.pos.i * 90 + 'px'

        }
    },
    render() {
        return (<div className="chess_pieces" style={this.style}><img src={"img/"+this.props.type+".png"} role="presentation"/></div>);

    }
})

export default ChessPiece