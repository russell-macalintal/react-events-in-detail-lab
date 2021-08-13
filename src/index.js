import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>
    {/* function is passed as a prop (named onReceiveCoordinate) to CoordinatesButton component */}
    <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />

    {/* function is passed as a prop (named onDelayedClick) to DelayedButton component */}
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
  </div>,
  document.getElementById('global')
);
