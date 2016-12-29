/**
 * Created by hieutran on 12/28/2016.
 */
import React from 'react';
import './App.css';

var Square=React.createClass({
    render() {
        if (this.props.black) {
            return (
                <div className="white_square"> {this.props.children}</div>
            )
        } else {
            return (<div className="black_square"> {this.props.children}</div>)
        }
    }
})

export default Square