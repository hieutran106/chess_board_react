/**
 * Created by hieutran on 12/29/2016.
 */
import React from 'react'
import Draggable from 'react-draggable'
import './App.css'


var Piece = React.createClass({


    render() {
        console.log("Test");
        return (<Draggable grid={[90, 90]}>
                <div className="piece"><img src={"img/" + this.props.type + ".png"}
                                                                      role="presentation"/></div>
            </Draggable>
        );

    }
})

export default Piece