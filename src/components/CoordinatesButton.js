// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    render() {
        return (
            <button
            // Callback function is an arrow function [(e) => {...}]
                onClick={(e) => {
                    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
                }}
            ></button>
        )
    }
}