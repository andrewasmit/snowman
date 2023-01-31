import React from 'react'
import { useEffect } from 'react'
import './Popup.css'

function Popup(props) {

    // Return of JSX
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-button' onClick={props.startNewGame}>Start A New Game</button>
            {props.win ?
            <div> 
              <h1>☃ YOU WON! ☃</h1>
              {props.score > props.highScore ? <div><h2>NEW HIGH SCORE!</h2> <h3>10 Bonus Points!!</h3></div> : null}
              {props.score < props.highScore ? <h2>5 Bonus Points to Start New Game</h2> : null}
              <p>Your score: {props.score}</p>
            </div> 
            :
            <div> 
              <h1>☃ Game Over. Try Again! ☃</h1>
              <h3>The word was "{props.word.toUpperCase()}"</h3>
              <p>Your score: {props.score}</p>
            </div> 
            }
        </div>
    </div>
  ) : null;
}

export default Popup;


