/**
 * Created by hieutran on 12/28/2016.
 */
import React from 'react';
import './App.css';

var BoardCell=React.createClass({
    render() {
        var i=this.props.pos.i;
        var j=this.props.pos.j;
        if ((i+j)%2===0) {
            return (
                <div className="white_square"></div>
            )
        } else {
            return (<div className="black_square"></div>)

        }
    }
})

export default BoardCell