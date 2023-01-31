import React from 'react'
import './Popup.css'

function Win(props) {

    // Return of JSX
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-button' onClick={props.startNewGame}>Start A New Game</button>
            {props.win ? <h3>YOU WON!</h3> : <h3>Game Over. Try Again!</h3>}
        </div>
    </div>
  ) : null;
}

export default Win;