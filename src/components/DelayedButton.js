// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    render() {
        return (
            <button
            // Callback function is an arrow function [(e) => {...}]
                onClick={(e) => {
                // e.persist() is needed to retain event object data to be used in setTimeout() function; otherwise event object will be pooled and information will be lost BEFORE function can fire
                    e.persist();
                // first argument of setTimeout() is an arrow function declaration (ie. equivalent to function name only without '()' ) as we don't want to automatically invoke the argument function WITHOUT the event trigger
                    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
                }}
            ></button>
        )
    }
}