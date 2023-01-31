import React from "react";
import { useState, useEffect } from 'react'
import Word from "./Word";
import LetterBank from "./LetterBank";
import Snowman from "./Snowman";
import WrongLetterBank from "./WrongLetterBank";
import Popup from "./Popup";

function MainContainer({ score, setScore }){

  const [word, setWord] = useState('');
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)
  const [wrongLetters, setWrongLetters] = useState([]);
  const [gamesPlayed, setGamesPlayed] = useState(0);

useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f210eecfb5mshfc612e739004a93p1bdbcbjsn591e5976f5cf',
      'X-RapidAPI-Host': 'random-word-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch('https://random-word-by-api-ninjas.p.rapidapi.com/v1/randomword', options)
    .then(response => response.json())
    .then(data => setWord(data.word))
    .catch(err => console.error(err));
  }, [gamesPlayed]);

  

  function handleDisplayWrongLetters(letter){
      setWrongLetters([...wrongLetters, letter])
  };

  function startNewGame(){
    setGamesPlayed(gamesPlayed +1);
    if(win === true){
      setScore(score +25);
    } else {
      setScore(score+ 5)
    }
    setLose(false);
    setWin(false);
    setSelectedLetters([]);
    setWrongLetters([]);
  }


  //   Return of JSX
    return(
        <div id="main-container">
           <Popup trigger={win || lose} startNewGame={startNewGame} win={win}/>
           <Word 
                word={word} 
                selectedLetters={selectedLetters} 
                setWin={setWin}
                setLose={setLose}
                wrongLetters={wrongLetters}
            />
            <Snowman wrongLetters={wrongLetters}/>
            <WrongLetterBank wrongLetters={wrongLetters} />
            <LetterBank 
                win={win}
                lose={lose}
                word={word} 
                wrongLetters={wrongLetters}
                selectedLetters={selectedLetters} 
                setSelectedLetters={setSelectedLetters}
                handleDisplayWrongLetters={handleDisplayWrongLetters}
                score={score}
                setScore={setScore}
                gamesPlayed={gamesPlayed}
            />
        </div>
    )
};

export default MainContainer;